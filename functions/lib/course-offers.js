"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COURSE_OFFERS = void 0;
exports.getActiveOffer = getActiveOffer;
exports.publicOffer = publicOffer;
exports.COURSE_OFFERS = [
    {
        id: "118sc-icetran",
        courseId: "reciclagem",
        title: "Curso de Reciclagem para Condutores Infratores | Santa Catarina",
        referenceCode: "118sc-icetran",
        state: "SC",
        priceCents: 12000,
        currency: "BRL",
        environment: "sandbox",
        status: "active",
        integration: {
            idoferta: "198",
            idcurso: "118",
            idcfc: "1647",
            idturma: "676",
            idatendente: "2",
        },
    },
];
function getActiveOffer(offerId) {
    return exports.COURSE_OFFERS.find((offer) => offer.id === offerId && offer.status === "active");
}
function publicOffer(offer) {
    return {
        id: offer.id,
        courseId: offer.courseId,
        title: offer.title,
        state: offer.state,
        priceCents: offer.priceCents,
        currency: offer.currency,
        environment: offer.environment,
        status: offer.status,
    };
}
