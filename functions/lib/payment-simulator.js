"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateCoursePayment = void 0;
const https_1 = require("firebase-functions/v2/https");
/** Legado desativado: o fluxo de homologação deve passar pelo checkout do cliente. */
exports.simulateCoursePayment = (0, https_1.onCall)({ region: "southamerica-east1", enforceAppCheck: true, maxInstances: 5 }, async () => {
    throw new https_1.HttpsError("failed-precondition", "O pagamento de teste deve ser confirmado exclusivamente na página de compra do cliente.");
});
