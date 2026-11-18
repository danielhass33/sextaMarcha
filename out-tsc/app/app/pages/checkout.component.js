import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CurrencyPipe } from "@angular/common";
import { httpsCallable } from "firebase/functions";
import { functions } from "../core/firebase";
import * as i0 from "@angular/core";
function CheckoutComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1, "Carregando informa\u00E7\u00F5es do pedido...");
    i0.ɵɵelementEnd();
} }
function CheckoutComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "h2");
    i0.ɵɵtext(2, "N\u00E3o foi poss\u00EDvel abrir o pedido");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function CheckoutComponent_Conditional_23_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1, "\u2713 Pagamento de teste confirmado. O despachante j\u00E1 pode acompanhar a venda simulada no portal.");
    i0.ɵɵelementEnd();
} }
function CheckoutComponent_Conditional_23_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function CheckoutComponent_Conditional_23_Conditional_34_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.pay()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r0.processing());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.processing() ? "Processando teste..." : "Confirmar pagamento de teste \u2192");
} }
function CheckoutComponent_Conditional_23_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function CheckoutComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "section", 8)(2, "div", 10);
    i0.ɵɵtext(3, "01 / CURSO SELECIONADO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div", 11);
    i0.ɵɵelementStart(9, "div", 10);
    i0.ɵɵtext(10, "02 / DADOS DO ALUNO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 12)(12, "span");
    i0.ɵɵtext(13, "Nome completo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 12)(17, "span");
    i0.ɵɵtext(18, "E-mail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "strong");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 12)(22, "span");
    i0.ɵɵtext(23, "WhatsApp");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "strong");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 13);
    i0.ɵɵtext(27, "Os dados foram cadastrados pelo despachante. Para corrigir informa\u00E7\u00F5es, solicite um novo cadastro antes de pagar.");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(28, "div", 11);
    i0.ɵɵelementStart(29, "div", 10);
    i0.ɵɵtext(30, "03 / PAGAMENTO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p");
    i0.ɵɵtext(32, "Esta p\u00E1gina demonstra o fluxo futuro do ICETRAN. Nenhuma cobran\u00E7a real ou matr\u00EDcula ser\u00E1 efetuada.");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(33, CheckoutComponent_Conditional_23_Conditional_33_Template, 2, 0, "div", 14)(34, CheckoutComponent_Conditional_23_Conditional_34_Template, 2, 2, "button", 15);
    i0.ɵɵconditionalCreate(35, CheckoutComponent_Conditional_23_Conditional_35_Template, 2, 1, "p", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "aside", 17)(37, "div", 10);
    i0.ɵɵtext(38, "RESUMO DO PEDIDO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "h3");
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div", 18)(42, "span");
    i0.ɵɵtext(43, "Valor do curso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "strong");
    i0.ɵɵtext(45);
    i0.ɵɵpipe(46, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(47, "div", 11);
    i0.ɵɵelementStart(48, "div", 19)(49, "span");
    i0.ɵɵtext(50, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "strong");
    i0.ɵɵtext(52);
    i0.ɵɵpipe(53, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "div", 20);
    i0.ɵɵtext(55, "TESTE \u00B7 SEM COBRAN\u00C7A REAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "p");
    i0.ɵɵtext(57, "O parceiro receber\u00E1 comiss\u00E3o simulada somente ap\u00F3s a confirma\u00E7\u00E3o do pagamento nesta p\u00E1gina.");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const order_r3 = ctx;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(order_r3.courseTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Educa\u00E7\u00E3o no tr\u00E2nsito \u00B7 Santa Catarina (", order_r3.state, ")");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(order_r3.studentName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(order_r3.studentEmail);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Final ", order_r3.studentPhoneLast4);
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(order_r3.paymentStatus === "paid" ? 33 : 34);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.error() ? 35 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(order_r3.courseTitle);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(46, 10, order_r3.amountCents / 100, "BRL"));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(53, 13, order_r3.amountCents / 100, "BRL"));
} }
export class CheckoutComponent {
    constructor() {
        this.route = inject(ActivatedRoute);
        this.loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.processing = signal(false, ...(ngDevMode ? [{ debugName: "processing" }] : []));
        this.error = signal("", ...(ngDevMode ? [{ debugName: "error" }] : []));
        this.info = signal(null, ...(ngDevMode ? [{ debugName: "info" }] : []));
        this.token = "";
    }
    async ngOnInit() {
        this.token = this.route.snapshot.paramMap.get("token") ?? "";
        if (!functions) {
            this.error.set("Firebase não configurado.");
            this.loading.set(false);
            return;
        }
        try {
            const fn = httpsCallable(functions, "getPublicCheckout");
            this.info.set((await fn({ token: this.token })).data);
        }
        catch {
            this.error.set("Link inválido, expirado ou temporariamente indisponível. Solicite um novo link ao despachante.");
        }
        finally {
            this.loading.set(false);
        }
    }
    async pay() {
        if (this.processing() || this.info()?.paymentStatus === "paid" || !functions)
            return;
        this.processing.set(true);
        this.error.set("");
        try {
            const fn = httpsCallable(functions, "confirmSandboxCheckout");
            await fn({ token: this.token });
            this.info.update(info => info ? { ...info, paymentStatus: "paid" } : info);
        }
        catch {
            this.error.set("Não foi possível confirmar o teste. Tente novamente.");
        }
        finally {
            this.processing.set(false);
        }
    }
    static { this.ɵfac = function CheckoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CheckoutComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckoutComponent, selectors: [["ng-component"]], decls: 26, vars: 1, consts: [[1, "checkout-shell"], [1, "checkout-header"], ["routerLink", "/", 1, "brand"], [1, "mark"], [1, "safe"], [1, "checkout-main"], [1, "checkout-heading"], [1, "accent"], [1, "checkout-card"], [1, "checkout-grid"], [1, "section-kicker"], [1, "separator"], [1, "field"], [1, "hint"], [1, "success"], ["type", "button", 1, "pay", 3, "disabled"], ["role", "alert", 1, "error"], [1, "checkout-card", "summary"], [1, "price-line"], [1, "price-line", "total"], [1, "sandbox"], ["type", "button", 1, "pay", 3, "click", "disabled"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "a", 2)(3, "span", 3);
            i0.ɵɵtext(4, "6");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "SEXTA ");
            i0.ɵɵelementStart(7, "b");
            i0.ɵɵtext(8, "MARCHA");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "span", 4);
            i0.ɵɵtext(10, "AMBIENTE DE HOMOLOGA\u00C7\u00C3O");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "main", 5)(12, "div", 6)(13, "span");
            i0.ɵɵtext(14, "EDUCA\u00C7\u00C3O NO TR\u00C2NSITO / INSCRI\u00C7\u00C3O");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "h1");
            i0.ɵɵtext(16, "Finalize sua inscri\u00E7\u00E3o");
            i0.ɵɵelementStart(17, "span", 7);
            i0.ɵɵtext(18, ".");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "p");
            i0.ɵɵtext(20, "Confira os dados cadastrados pelo despachante e os detalhes do curso antes de continuar.");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(21, CheckoutComponent_Conditional_21_Template, 2, 0, "div", 8)(22, CheckoutComponent_Conditional_22_Template, 5, 1, "div", 8)(23, CheckoutComponent_Conditional_23_Template, 58, 16, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "footer");
            i0.ɵɵtext(25, "SEXTA MARCHA \u00B7 Experi\u00EAncia de compra demonstrativa \u00B7 ICETRAN ainda n\u00E3o integrado");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(21);
            i0.ɵɵconditional(ctx.loading() ? 21 : ctx.error() && !ctx.info() ? 22 : (tmp_0_0 = ctx.info()) ? 23 : -1, tmp_0_0);
        } }, dependencies: [RouterLink, CurrencyPipe], styles: ["[_nghost-%COMP%]{display:block;min-height:100vh;background:#f5f6f7;color:#1b1d22;font-family:Arial,Helvetica,sans-serif}.checkout-shell[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column}.checkout-header[_ngcontent-%COMP%]{background:#17191d;color:white;min-height:82px;padding:18px clamp(20px,5vw,80px);display:flex;justify-content:space-between;align-items:center;gap:20px}.brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;text-decoration:none;color:white;font-weight:800;letter-spacing:.06em}.mark[_ngcontent-%COMP%]{font-size:32px;color:#f47721}.safe[_ngcontent-%COMP%]{font-size:10px;letter-spacing:.12em;color:#ffad76;font-weight:800}.checkout-main[_ngcontent-%COMP%]{width:min(1120px,calc(100% - 36px));margin:56px auto 80px;flex:1}.checkout-heading[_ngcontent-%COMP%]{margin-bottom:28px}.checkout-heading[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .section-kicker[_ngcontent-%COMP%]{color:#f47721;font-size:11px;font-weight:900;letter-spacing:.13em}.checkout-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(30px,4vw,48px);letter-spacing:-.05em;margin:12px 0}.accent[_ngcontent-%COMP%]{color:#f47721}.checkout-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .checkout-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#737b87;line-height:1.7}.checkout-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1.65fr) minmax(270px,1fr);gap:24px;align-items:start}.checkout-card[_ngcontent-%COMP%]{background:white;border:1px solid #e6e8eb;border-radius:15px;padding:clamp(24px,4vw,38px)}.checkout-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:25px;line-height:1.3;margin:15px 0 8px}.checkout-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:19px;line-height:1.4}.separator[_ngcontent-%COMP%]{height:1px;background:#eceef0;margin:26px 0}.field[_ngcontent-%COMP%]{display:grid;gap:6px;margin-top:18px}.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;color:#828b96}.field[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:15px;overflow-wrap:anywhere}.hint[_ngcontent-%COMP%]{background:#f6f7f8;padding:15px;border-radius:8px;font-size:12px;line-height:1.6;color:#66707d;margin-top:22px}.price-line[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:12px;font-size:13px;margin:20px 0}.total[_ngcontent-%COMP%]{font-size:17px;font-weight:800}.sandbox[_ngcontent-%COMP%]{background:#fff1e7;color:#a74b0a;padding:11px;border-radius:7px;font-size:11px;font-weight:900;letter-spacing:.05em;text-align:center}.pay[_ngcontent-%COMP%]{width:100%;border:0;border-radius:8px;padding:18px;background:#f47721;color:#161616;font-weight:900;font-size:15px;cursor:pointer;margin-top:15px}.pay[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:wait}.success[_ngcontent-%COMP%]{background:#e7f6ec;color:#166c39;border-radius:8px;padding:18px;line-height:1.6;margin-top:20px}.error[_ngcontent-%COMP%]{color:#bd2b2b!important}footer[_ngcontent-%COMP%]{padding:24px;text-align:center;color:#8c949e;font-size:11px}@media(max-width:750px){.checkout-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.checkout-main[_ngcontent-%COMP%]{margin:32px auto 50px}.safe[_ngcontent-%COMP%]{font-size:8px}.checkout-header[_ngcontent-%COMP%]{padding:16px 20px}}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckoutComponent, [{
        type: Component,
        args: [{ standalone: true, imports: [CurrencyPipe, RouterLink], template: "<div class=\"checkout-shell\">\n  <header class=\"checkout-header\"><a routerLink=\"/\" class=\"brand\"><span class=\"mark\">6</span><span>SEXTA <b>MARCHA</b></span></a><span class=\"safe\">AMBIENTE DE HOMOLOGA\u00C7\u00C3O</span></header>\n  <main class=\"checkout-main\">\n    <div class=\"checkout-heading\"><span>EDUCA\u00C7\u00C3O NO TR\u00C2NSITO / INSCRI\u00C7\u00C3O</span><h1>Finalize sua inscri\u00E7\u00E3o<span class=\"accent\">.</span></h1><p>Confira os dados cadastrados pelo despachante e os detalhes do curso antes de continuar.</p></div>\n    @if(loading()){<div class=\"checkout-card\">Carregando informa\u00E7\u00F5es do pedido...</div>}\n    @else if(error() && !info()){<div class=\"checkout-card\"><h2>N\u00E3o foi poss\u00EDvel abrir o pedido</h2><p>{{error()}}</p></div>}\n    @else if(info(); as order){\n      <div class=\"checkout-grid\">\n        <section class=\"checkout-card\">\n          <div class=\"section-kicker\">01 / CURSO SELECIONADO</div>\n          <h2>{{order.courseTitle}}</h2>\n          <p>Educa\u00E7\u00E3o no tr\u00E2nsito \u00B7 Santa Catarina ({{order.state}})</p>\n          <div class=\"separator\"></div>\n          <div class=\"section-kicker\">02 / DADOS DO ALUNO</div>\n          <div class=\"field\"><span>Nome completo</span><strong>{{order.studentName}}</strong></div>\n          <div class=\"field\"><span>E-mail</span><strong>{{order.studentEmail}}</strong></div>\n          <div class=\"field\"><span>WhatsApp</span><strong>Final {{order.studentPhoneLast4}}</strong></div>\n          <div class=\"hint\">Os dados foram cadastrados pelo despachante. Para corrigir informa\u00E7\u00F5es, solicite um novo cadastro antes de pagar.</div>\n          <div class=\"separator\"></div>\n          <div class=\"section-kicker\">03 / PAGAMENTO</div>\n          <p>Esta p\u00E1gina demonstra o fluxo futuro do ICETRAN. Nenhuma cobran\u00E7a real ou matr\u00EDcula ser\u00E1 efetuada.</p>\n          @if(order.paymentStatus==='paid'){\n            <div class=\"success\">\u2713 Pagamento de teste confirmado. O despachante j\u00E1 pode acompanhar a venda simulada no portal.</div>\n          } @else {\n            <button type=\"button\" class=\"pay\" [disabled]=\"processing()\" (click)=\"pay()\">{{processing()?'Processando teste...':'Confirmar pagamento de teste \u2192'}}</button>\n          }\n          @if(error()){<p class=\"error\" role=\"alert\">{{error()}}</p>}\n        </section>\n        <aside class=\"checkout-card summary\"><div class=\"section-kicker\">RESUMO DO PEDIDO</div><h3>{{order.courseTitle}}</h3><div class=\"price-line\"><span>Valor do curso</span><strong>{{order.amountCents/100 | currency:'BRL'}}</strong></div><div class=\"separator\"></div><div class=\"price-line total\"><span>Total</span><strong>{{order.amountCents/100 | currency:'BRL'}}</strong></div><div class=\"sandbox\">TESTE \u00B7 SEM COBRAN\u00C7A REAL</div><p>O parceiro receber\u00E1 comiss\u00E3o simulada somente ap\u00F3s a confirma\u00E7\u00E3o do pagamento nesta p\u00E1gina.</p></aside>\n      </div>\n    }\n  </main>\n  <footer>SEXTA MARCHA \u00B7 Experi\u00EAncia de compra demonstrativa \u00B7 ICETRAN ainda n\u00E3o integrado</footer>\n</div>\n", styles: [":host{display:block;min-height:100vh;background:#f5f6f7;color:#1b1d22;font-family:Arial,Helvetica,sans-serif}.checkout-shell{min-height:100vh;display:flex;flex-direction:column}.checkout-header{background:#17191d;color:white;min-height:82px;padding:18px clamp(20px,5vw,80px);display:flex;justify-content:space-between;align-items:center;gap:20px}.brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:white;font-weight:800;letter-spacing:.06em}.mark{font-size:32px;color:#f47721}.safe{font-size:10px;letter-spacing:.12em;color:#ffad76;font-weight:800}.checkout-main{width:min(1120px,calc(100% - 36px));margin:56px auto 80px;flex:1}.checkout-heading{margin-bottom:28px}.checkout-heading>span,.section-kicker{color:#f47721;font-size:11px;font-weight:900;letter-spacing:.13em}.checkout-heading h1{font-size:clamp(30px,4vw,48px);letter-spacing:-.05em;margin:12px 0}.accent{color:#f47721}.checkout-heading p,.checkout-card p{color:#737b87;line-height:1.7}.checkout-grid{display:grid;grid-template-columns:minmax(0,1.65fr) minmax(270px,1fr);gap:24px;align-items:start}.checkout-card{background:white;border:1px solid #e6e8eb;border-radius:15px;padding:clamp(24px,4vw,38px)}.checkout-card h2{font-size:25px;line-height:1.3;margin:15px 0 8px}.checkout-card h3{font-size:19px;line-height:1.4}.separator{height:1px;background:#eceef0;margin:26px 0}.field{display:grid;gap:6px;margin-top:18px}.field span{font-size:12px;color:#828b96}.field strong{font-size:15px;overflow-wrap:anywhere}.hint{background:#f6f7f8;padding:15px;border-radius:8px;font-size:12px;line-height:1.6;color:#66707d;margin-top:22px}.price-line{display:flex;justify-content:space-between;gap:12px;font-size:13px;margin:20px 0}.total{font-size:17px;font-weight:800}.sandbox{background:#fff1e7;color:#a74b0a;padding:11px;border-radius:7px;font-size:11px;font-weight:900;letter-spacing:.05em;text-align:center}.pay{width:100%;border:0;border-radius:8px;padding:18px;background:#f47721;color:#161616;font-weight:900;font-size:15px;cursor:pointer;margin-top:15px}.pay:disabled{opacity:.5;cursor:wait}.success{background:#e7f6ec;color:#166c39;border-radius:8px;padding:18px;line-height:1.6;margin-top:20px}.error{color:#bd2b2b!important}footer{padding:24px;text-align:center;color:#8c949e;font-size:11px}@media(max-width:750px){.checkout-grid{grid-template-columns:1fr}.checkout-main{margin:32px auto 50px}.safe{font-size:8px}.checkout-header{padding:16px 20px}}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/pages/checkout.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=checkout.component.js.map