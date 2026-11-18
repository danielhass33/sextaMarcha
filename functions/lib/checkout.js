"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmSandboxCheckout = exports.getPublicCheckout = void 0;
const https_1 = require("firebase-functions/v2/https");
const firestore_1 = require("firebase-admin/firestore");
const node_crypto_1 = require("node:crypto");
const db = (0, firestore_1.getFirestore)();
const options = { region: "southamerica-east1", enforceAppCheck: true, maxInstances: 10 };
const hashToken = (token) => {
    if (typeof token !== "string" || !/^[a-f0-9]{64}$/.test(token))
        throw new https_1.HttpsError("invalid-argument", "Link inválido.");
    return (0, node_crypto_1.createHash)("sha256").update(token).digest("hex");
};
async function resolve(token) {
    const ref = db.collection("checkoutTokens").doc(hashToken(token));
    const snap = await ref.get();
    if (!snap.exists || snap.data()?.["expiresAt"]?.toMillis?.() < Date.now())
        throw new https_1.HttpsError("not-found", "Link expirado ou indisponível.");
    const orderId = snap.data()?.["orderId"];
    if (typeof orderId !== "string")
        throw new https_1.HttpsError("not-found", "Pedido indisponível.");
    return orderId;
}
/** Exibe somente dados mínimos; o token é uma credencial bearer. */
exports.getPublicCheckout = (0, https_1.onCall)(options, async (request) => {
    const orderId = await resolve(request.data?.token);
    const [orderSnap, studentSnap] = await Promise.all([db.collection("orders").doc(orderId).get(), db.collection("students").doc(orderId).get()]);
    const order = orderSnap.data(), student = studentSnap.data();
    if (!order || !student || order["environment"] !== "sandbox")
        throw new https_1.HttpsError("not-found", "Pedido indisponível.");
    return { courseTitle: order["courseTitle"], amountCents: order["amountCents"], state: order["offerState"], environment: "sandbox", paymentStatus: order["paymentStatus"], studentName: student["fullName"], studentEmail: student["email"], studentPhoneLast4: String(student["phone"] ?? "").slice(-4) };
});
/** Apenas homologação: nunca processa dinheiro real. Idempotente. */
exports.confirmSandboxCheckout = (0, https_1.onCall)(options, async (request) => {
    const orderId = await resolve(request.data?.token);
    const orderRef = db.collection("orders").doc(orderId), saleRef = db.collection("sales").doc(orderId), commissionRef = db.collection("commissions").doc(orderId), enrollmentRef = db.collection("enrollments").doc(orderId), eventRef = db.collection("paymentEvents").doc(orderId);
    return db.runTransaction(async (tx) => {
        const [orderSnap, saleSnap] = await Promise.all([tx.get(orderRef), tx.get(saleRef)]);
        const order = orderSnap.data();
        if (!order || order["gateway"] !== "mock" || order["environment"] !== "sandbox")
            throw new https_1.HttpsError("failed-precondition", "Pagamento indisponível.");
        if (order["paymentStatus"] === "paid")
            return { ok: true, alreadyProcessed: true };
        if (order["paymentStatus"] !== "pending" || saleSnap.exists)
            throw new https_1.HttpsError("failed-precondition", "Pedido não está pendente.");
        const amount = order["amountCents"], partnerId = order["partnerId"], studentId = order["studentId"];
        if (!Number.isSafeInteger(amount) || amount <= 0 || typeof partnerId !== "string" || typeof studentId !== "string")
            throw new https_1.HttpsError("failed-precondition", "Pedido inválido.");
        const partnerAmount = Math.round(amount * .1), sextaAmount = Math.round(amount * .2);
        tx.update(orderRef, { paymentStatus: "paid", paymentMethod: "mock-checkout", paymentConfirmedAt: firestore_1.FieldValue.serverTimestamp(), commissionStatus: "simulated", updatedAt: firestore_1.FieldValue.serverTimestamp() });
        tx.create(saleRef, { partnerId, courseId: order["courseId"], orderId, amount: amount / 100, commissionAmount: partnerAmount / 100, status: "paid", environment: "sandbox", simulated: true, createdAt: firestore_1.FieldValue.serverTimestamp() });
        tx.create(commissionRef, { orderId, partnerId, amountCents: partnerAmount, percentage: 10, status: "simulated", environment: "sandbox", payable: false, createdAt: firestore_1.FieldValue.serverTimestamp() });
        tx.create(enrollmentRef, { orderId, studentId, partnerId, courseId: order["courseId"], referenceCode: order["referenceCode"], integration: order["integration"], status: "draft", externalEnrollmentId: null, submittedToIcetran: false, createdAt: firestore_1.FieldValue.serverTimestamp() });
        tx.create(eventRef, { orderId, type: "mock_checkout_confirmed", environment: "sandbox", amountCents: amount, split: { partner: partnerAmount, sextaMarcha: sextaAmount, icetran: amount - partnerAmount - sextaAmount }, createdAt: firestore_1.FieldValue.serverTimestamp() });
        return { ok: true, alreadyProcessed: false };
    });
});
