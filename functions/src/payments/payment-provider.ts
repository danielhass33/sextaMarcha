/** Contrato de integração futura. Não processa pagamentos nesta versão. */
export type PaymentEnvironment = "sandbox" | "production";
export type PaymentState = "pending" | "paid" | "failed" | "refunded" | "canceled";
export interface PaymentCheckoutRequest {
  orderId: string;
  amountCents: number;
  currency: "BRL";
  customerReference: string; // Referência interna; dados sensíveis permanecem no servidor
  idempotencyKey: string;
}
export interface PaymentCheckoutResult {
  provider: string;
  providerOrderId: string;
  checkoutUrl: string;
  status: PaymentState;
}
export interface PaymentProvider {
  readonly name: string;
  createCheckout(request: PaymentCheckoutRequest): Promise<PaymentCheckoutResult>;
  getPayment(providerOrderId: string): Promise<PaymentState>;
}
/** Futuro adaptador Pagar.me: exige contrato comercial, credenciais, webhook e testes. */
export class PagarmePaymentProvider implements PaymentProvider {
  readonly name = "pagarme";
  async createCheckout(_request: PaymentCheckoutRequest): Promise<PaymentCheckoutResult> {
    throw new Error("Pagar.me ainda não integrado: checkout real desabilitado.");
  }
  async getPayment(_providerOrderId: string): Promise<PaymentState> {
    throw new Error("Pagar.me ainda não integrado: conciliação desabilitada.");
  }
}
