"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renewCheckoutLink = exports.listCourseOrders = exports.createTestCourseOrder = void 0;
const https_1 = require("firebase-functions/v2/https");
const firestore_1 = require("firebase-admin/firestore");
const node_crypto_1 = require("node:crypto");
const course_offers_1 = require("./course-offers");
const db = (0, firestore_1.getFirestore)();
const region = "southamerica-east1";
const COURSE = {
    id: "118sc-icetran",
    title: "Curso de Reciclagem para Condutores Infratores | Santa Catarina",
    referenceCode: "118sc-icetran",
    priceCents: 12000,
    integration: {
        idoferta: "198",
        idcurso: "118",
        idcfc: "1647",
        idturma: "676",
        idatendente: "2",
    },
};
function obj(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
        throw new https_1.HttpsError("invalid-argument", "Dados inválidos.");
    }
    return value;
}
function text(value, max = 150) {
    return typeof value === "string" ? value.trim().slice(0, max) : "";
}
function digits(value) {
    return text(value, 50).replace(/\D/g, "");
}
function validCpf(cpf) {
    if (!/^\d{11}$/.test(cpf) || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    for (let size = 9; size <= 10; size++) {
        let sum = 0;
        for (let i = 0; i < size; i++) {
            sum += Number(cpf[i]) * (size + 1 - i);
        }
        const remainder = (sum * 10) % 11;
        const expected = remainder === 10 ? 0 : remainder;
        if (expected !== Number(cpf[size]))
            return false;
    }
    return true;
}
async function authorizedUser(uid) {
    const snapshot = await db.collection("partners").doc(uid).get();
    const profile = snapshot.data();
    if (!profile ||
        profile["status"] !== "active" ||
        !["partner", "master"].includes(profile["role"])) {
        throw new https_1.HttpsError("permission-denied", "Usuário sem permissão comercial.");
    }
    return profile;
}
exports.createTestCourseOrder = (0, https_1.onCall)({
    region,
    enforceAppCheck: true,
    maxInstances: 10,
}, async (request) => {
    if (!request.auth) {
        throw new https_1.HttpsError("unauthenticated", "Faça login.");
    }
    const uid = request.auth.uid;
    const profile = await authorizedUser(uid);
    if (profile["role"] !== "partner") {
        throw new https_1.HttpsError("permission-denied", "Apenas parceiros podem iniciar vendas.");
    }
    const input = obj(request.data);
    const student = obj(input["student"]);
    const address = obj(student["address"]);
    const requestId = text(input["requestId"], 80);
    const courseId = text(input["courseId"], 80);
    if (!/^[a-zA-Z0-9-]{16,80}$/.test(requestId)) {
        throw new https_1.HttpsError("invalid-argument", "Identificação da solicitação inválida.");
    }
    const offer = (0, course_offers_1.getActiveOffer)(courseId);
    if (!offer || offer.environment !== "sandbox") {
        throw new https_1.HttpsError("failed-precondition", "Oferta indisponível para homologação.");
    }
    const fullName = text(student["fullName"], 120);
    const cpf = digits(student["document"]);
    const birth = text(student["dateOfBirth"], 10);
    const email = text(student["email"], 180).toLowerCase();
    const phone = digits(student["phone"]);
    const cnh = digits(student["cnh"]);
    const category = text(student["cnhCategory"], 3).toUpperCase();
    const zipCode = digits(address["zipCode"]);
    const street = text(address["street"], 150);
    const number = text(address["number"], 15);
    const district = text(address["district"], 100);
    const city = text(address["city"], 100);
    const state = text(address["state"], 2).toUpperCase();
    const complement = text(address["complement"], 100);
    const birthDate = new Date(`${birth}T12:00:00Z`);
    const birthValid = /^\d{4}-\d{2}-\d{2}$/.test(birth) &&
        !Number.isNaN(birthDate.getTime()) &&
        birthDate.toISOString().slice(0, 10) === birth &&
        birthDate.getTime() < Date.now();
    if (fullName.length < 3 ||
        !validCpf(cpf) ||
        !birthValid ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        !/^\d{10,13}$/.test(phone) ||
        !/^\d{9,12}$/.test(cnh) ||
        !["A", "B", "AB", "C", "D", "E", "AC", "AD", "AE"].includes(category) ||
        !/^\d{8}$/.test(zipCode) ||
        !street ||
        !number ||
        !district ||
        !city ||
        !/^[A-Z]{2}$/.test(state) ||
        input["consent"] !== true) {
        throw new https_1.HttpsError("invalid-argument", "Confira os dados do aluno, CNH e endereço.");
    }
    const orderId = (0, node_crypto_1.createHash)("sha256")
        .update(`${uid}:${requestId}`)
        .digest("hex");
    const orderRef = db.collection("orders").doc(orderId);
    const studentRef = db.collection("students").doc(orderId);
    const checkoutToken = (0, node_crypto_1.randomBytes)(32).toString("hex");
    const checkoutTokenHash = (0, node_crypto_1.createHash)("sha256")
        .update(checkoutToken)
        .digest("hex");
    const checkoutRef = db.collection("checkoutTokens").doc(checkoutTokenHash);
    const result = await db.runTransaction(async (tx) => {
        const existing = await tx.get(orderRef);
        if (existing.exists) {
            return {
                orderId,
                status: existing.data()?.["paymentStatus"] ?? "pending",
                checkoutToken: null,
            };
        }
        tx.create(studentRef, {
            partnerId: uid,
            orderId,
            fullName,
            document: cpf,
            dateOfBirth: birth,
            email,
            phone,
            cnh,
            cnhCategory: category,
            address: {
                zipCode,
                street,
                number,
                complement,
                district,
                city,
                state,
            },
            consent: true,
            consentVersion: "2026-11",
            createdAt: firestore_1.FieldValue.serverTimestamp(),
        });
        tx.create(checkoutRef, {
            orderId,
            createdAt: firestore_1.FieldValue.serverTimestamp(),
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        });
        tx.create(orderRef, {
            partnerId: uid,
            studentId: studentRef.id,
            courseId: offer.id,
            catalogCourseId: offer.courseId,
            courseTitle: offer.title,
            referenceCode: offer.referenceCode,
            integration: offer.integration,
            amountCents: offer.priceCents,
            currency: offer.currency,
            offerState: offer.state,
            offerVersion: 1,
            paymentStatus: "pending",
            enrollmentStatus: "not_requested",
            gateway: "mock",
            environment: "sandbox",
            paymentMethod: null,
            gatewayOrderId: null,
            commissionStatus: "not_calculated",
            fiscalStatus: "not_issued",
            createdAt: firestore_1.FieldValue.serverTimestamp(),
            updatedAt: firestore_1.FieldValue.serverTimestamp(),
        });
        return { orderId, status: "pending", checkoutToken };
    });
    return { ok: true, ...result };
});
exports.listCourseOrders = (0, https_1.onCall)({
    region,
    enforceAppCheck: true,
    maxInstances: 10,
}, async (request) => {
    if (!request.auth) {
        throw new https_1.HttpsError("unauthenticated", "Faça login.");
    }
    const uid = request.auth.uid;
    const profile = await authorizedUser(uid);
    const ordersRef = db.collection("orders");
    const queryRef = profile["role"] === "master"
        ? ordersRef.limit(100)
        : ordersRef.where("partnerId", "==", uid).limit(100);
    const snapshot = await queryRef.get();
    return {
        orders: snapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                partnerId: data["partnerId"],
                courseId: data["courseId"],
                courseTitle: data["courseTitle"],
                amountCents: data["amountCents"],
                paymentStatus: data["paymentStatus"],
                enrollmentStatus: data["enrollmentStatus"],
                gateway: data["gateway"],
                environment: data["environment"],
                createdAt: data["createdAt"]?.toDate?.()?.toISOString?.() ?? null,
            };
        }),
    };
});
/** Recupera/renova um link para um pedido próprio, sem expor dados do aluno. */
exports.renewCheckoutLink = (0, https_1.onCall)({ region, enforceAppCheck: true, maxInstances: 10 }, async (request) => {
    if (!request.auth)
        throw new https_1.HttpsError("unauthenticated", "Faça login.");
    await authorizedUser(request.auth.uid);
    const orderId = text(request.data?.["orderId"], 80);
    if (!/^[a-f0-9]{64}$/.test(orderId))
        throw new https_1.HttpsError("invalid-argument", "Pedido inválido.");
    const order = await db.collection("orders").doc(orderId).get();
    if (!order.exists ||
        order.data()?.["partnerId"] !== request.auth.uid ||
        order.data()?.["environment"] !== "sandbox")
        throw new https_1.HttpsError("permission-denied", "Pedido indisponível.");
    const token = (0, node_crypto_1.randomBytes)(32).toString("hex");
    const hash = (0, node_crypto_1.createHash)("sha256").update(token).digest("hex");
    await db
        .collection("checkoutTokens")
        .doc(hash)
        .create({
        orderId,
        createdAt: firestore_1.FieldValue.serverTimestamp(),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });
    return { token };
});
