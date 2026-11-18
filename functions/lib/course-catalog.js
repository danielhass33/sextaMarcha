"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCourseOffers = void 0;
const https_1 = require("firebase-functions/v2/https");
const firestore_1 = require("firebase-admin/firestore");
const course_offers_1 = require("./course-offers");
const db = (0, firestore_1.getFirestore)();
exports.listCourseOffers = (0, https_1.onCall)({
    region: "southamerica-east1",
    enforceAppCheck: true,
    maxInstances: 10,
}, async (request) => {
    if (!request.auth) {
        throw new https_1.HttpsError("unauthenticated", "Faça login para consultar as ofertas.");
    }
    const partner = await db.collection("partners").doc(request.auth.uid).get();
    const profile = partner.data();
    if (profile?.["status"] !== "active" ||
        !["partner", "master"].includes(profile?.["role"])) {
        throw new https_1.HttpsError("permission-denied", "Perfil comercial não autorizado.");
    }
    return {
        offers: course_offers_1.COURSE_OFFERS.filter((offer) => offer.status === "active").map(course_offers_1.publicOffer),
    };
});
