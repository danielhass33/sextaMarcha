"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagarmePaymentProvider = void 0;
/** Futuro adaptador Pagar.me: exige contrato comercial, credenciais, webhook e testes. */
class PagarmePaymentProvider {
    name = "pagarme";
    async createCheckout(_request) {
        throw new Error("Pagar.me ainda não integrado: checkout real desabilitado.");
    }
    async getPayment(_providerOrderId) {
        throw new Error("Pagar.me ainda não integrado: conciliação desabilitada.");
    }
}
exports.PagarmePaymentProvider = PagarmePaymentProvider;
