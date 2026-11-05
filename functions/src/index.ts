import { onCall, HttpsError } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
initializeApp();
const db = getFirestore();
const asText = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";
export const submitLead = onCall(
  { region: "southamerica-east1", enforceAppCheck: true, maxInstances: 5 },
  async (request) => {
    const data = request.data as Record<string, unknown> | null;
    if (!data || typeof data !== "object")
      throw new HttpsError("invalid-argument", "Dados inválidos.");
    const name = asText(data["name"], 120),
      phone = asText(data["phone"], 25).replace(/[^\d+]/g, ""),
      email = asText(data["email"], 180).toLowerCase();
    const profession = asText(data["profession"], 40),
      city = asText(data["city"], 120),
      interest = asText(data["interest"], 50);
    const allowedProfession = [
      "despachante",
      "vistoriador",
      "lojista",
      "outros",
    ];
    const allowedInterest = ["educacao", "vistoria", "documentos", "lojistas"];
    if (
      name.length < 3 ||
      !/^\+?\d{10,13}$/.test(phone) ||
      !/^\S+@\S+\.\S+$/.test(email) ||
      !allowedProfession.includes(profession) ||
      !allowedInterest.includes(interest) ||
      data["consent"] !== true
    ) {
      throw new HttpsError(
        "invalid-argument",
        "Confira os dados e o consentimento.",
      );
    }
    await db
      .collection("leads")
      .add({
        name,
        phone,
        email,
        profession,
        city,
        interest,
        consent: true,
        consentVersion: "2026-10",
        createdAt: FieldValue.serverTimestamp(),
        source: "landing-sexta-marcha",
      });
    return { ok: true };
  },
);

/** Creates an unapproved partner profile; never grants admin or financial permissions. */
export const registerPartner = onCall(
  { region: "southamerica-east1", enforceAppCheck: true, maxInstances: 10 },
  async (request) => {
    if (!request.auth)
      throw new HttpsError("unauthenticated", "Entre na sua conta.");
    const data = request.data as Record<string, unknown> | null;
    if (!data || typeof data !== "object")
      throw new HttpsError("invalid-argument", "Dados inválidos.");
    const name = asText(data["name"], 120),
      business = asText(data["business"], 120),
      city = asText(data["city"], 120);
    const phone = asText(data["phone"], 25).replace(/\D/g, "");
    const cnpj = asText(data["cnpj"], 20).replace(/\D/g, "");
    const crdd = asText(data["crdd"], 60);
    if (!validCnpj(cnpj) || crdd.length < 2)
      throw new HttpsError(
        "invalid-argument",
        "CNPJ ou registro CRDD inválido.",
      );
    if (
      name.length < 3 ||
      business.length < 2 ||
      city.length < 3 ||
      !/^[0-9]{10,13}$/.test(phone) ||
      data["consent"] !== true
    ) {
      throw new HttpsError(
        "invalid-argument",
        "Confira os dados obrigatórios.",
      );
    }
    const { getAuth } = await import("firebase-admin/auth");
    const user = await getAuth().getUser(request.auth.uid);
    if (!user.email)
      throw new HttpsError("failed-precondition", "E-mail não disponível.");
    const ref = db.collection("partners").doc(request.auth.uid);
    try {
      await ref.create({
        uid: request.auth.uid,
        email: user.email.toLowerCase(),
        name,
        business,
        cnpj,
        crdd,
        phone,
        city,
        role: "partner",
        status: "pending",
        commissionRate: null,
        payoutStatus: "not_configured",
        consent: true,
        consentVersion: "2026-11",
        createdAt: FieldValue.serverTimestamp(),
        source: "cadastro-despachante",
      });
    } catch (e: any) {
      if (e?.code === 6 || e?.code === "already-exists")
        throw new HttpsError("already-exists", "Perfil já cadastrado.");
      throw e;
    }
    return { ok: true, status: "pending" };
  },
);

/** Validate CNPJ digits and check digits; not a substitute for registration verification. */
function validCnpj(value: string): boolean {
  if (!/^\d{14}$/.test(value) || /^(\d)\1{13}$/.test(value)) return false;
  const digit = (size: number) => {
    let sum = 0,
      weight = size - 7;
    for (let i = 0; i < size; i++) {
      sum += Number(value[i]) * weight;
      weight = weight === 2 ? 9 : weight - 1;
    }
    const rem = sum % 11;
    return rem < 2 ? 0 : 11 - rem;
  };
  return digit(12) === Number(value[12]) && digit(13) === Number(value[13]);
}
/** Only an existing active master can approve or suspend partners. */
export const setPartnerStatus = onCall(
  { region: "southamerica-east1", enforceAppCheck: true, maxInstances: 10 },
  async (request) => {
    if (!request.auth)
      throw new HttpsError("unauthenticated", "Entre na sua conta.");
    const caller = await db.collection("partners").doc(request.auth.uid).get();
    if (
      caller.data()?.["role"] !== "master" ||
      caller.data()?.["status"] !== "active"
    )
      throw new HttpsError("permission-denied", "Acesso master necessário.");
    const data = request.data as Record<string, unknown> | null;
    const partnerId = asText(data?.["partnerId"], 128),
      status = asText(data?.["status"], 20);
    if (!partnerId || !["active", "suspended"].includes(status))
      throw new HttpsError("invalid-argument", "Dados inválidos.");
    if (partnerId === request.auth.uid)
      throw new HttpsError(
        "failed-precondition",
        "Não é permitido alterar o próprio perfil master.",
      );
    const ref = db.collection("partners").doc(partnerId);
    const target = await ref.get();
    if (!target.exists)
      throw new HttpsError("not-found", "Parceiro não encontrado.");
    if (target.data()?.["role"] !== "partner")
      throw new HttpsError(
        "permission-denied",
        "Somente perfis de parceiro podem ser alterados.",
      );
    await ref.update({
      status,
      updatedAt: FieldValue.serverTimestamp(),
      updatedBy: request.auth.uid,
    });
    return { ok: true, status };
  },
);
