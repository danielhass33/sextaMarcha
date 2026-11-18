import { Component, computed, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { LeadService } from "../core/lead.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function LeadFormComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 12);
    i0.ɵɵtext(1, "\u00C1REA DE ATUA\u00C7\u00C3O *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "select", 13)(3, "option", 14);
    i0.ɵɵtext(4, "Selecione seu perfil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "option", 15);
    i0.ɵɵtext(6, "Despachante");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "option", 16);
    i0.ɵɵtext(8, "Vistoriador");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "option", 17);
    i0.ɵɵtext(10, "Lojista");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "option", 18);
    i0.ɵɵtext(12, " Outro profissional automotivo ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "label", 19);
    i0.ɵɵtext(14, "PRINCIPAL INTERESSE *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "select", 20)(16, "option", 21);
    i0.ɵɵtext(17, "Educa\u00E7\u00E3o de tr\u00E2nsito");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "option", 22);
    i0.ɵɵtext(19, "Vistorias digitais (planejado)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "option", 23);
    i0.ɵɵtext(21, " Servi\u00E7os documentais (planejado) ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "option", 24);
    i0.ɵɵtext(23, " Solu\u00E7\u00F5es para lojistas (planejado) ");
    i0.ɵɵelementEnd()();
} }
function LeadFormComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 25);
    i0.ɵɵtext(1, "NOME COMPLETO *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "input", 26);
    i0.ɵɵelementStart(3, "label", 27);
    i0.ɵɵtext(4, "WHATSAPP COM DDD *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 28);
    i0.ɵɵelementStart(6, "label", 29);
    i0.ɵɵtext(7, "E-MAIL *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "input", 30);
    i0.ɵɵelementStart(9, "label", 31);
    i0.ɵɵtext(10, "CIDADE / UF");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 32);
} }
function LeadFormComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "p")(2, "strong");
    i0.ɵɵtext(3, "PROFISS\u00C3O");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p")(6, "strong");
    i0.ɵɵtext(7, "NOME");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p")(10, "strong");
    i0.ɵɵtext(11, "WHATSAPP");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p")(14, "strong");
    i0.ɵɵtext(15, "INTERESSE");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "label", 34);
    i0.ɵɵelement(18, "input", 35);
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, "Autorizo o contato da Sexta Marcha sobre solu\u00E7\u00F5es e oportunidades. Consulte as informa\u00E7\u00F5es de privacidade antes de enviar. *");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.professionLabel());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.form.controls.name.value);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.form.controls.phone.value);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.form.controls.interest.value, " ");
} }
function LeadFormComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("error", ctx_r0.hasError());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.message(), " ");
} }
function LeadFormComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 37);
    i0.ɵɵlistener("click", function LeadFormComponent_Conditional_22_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.previous()); });
    i0.ɵɵtext(1, " \u2190 VOLTAR ");
    i0.ɵɵelementEnd();
} }
export class LeadFormComponent {
    constructor() {
        this.fb = inject(FormBuilder);
        this.leadService = inject(LeadService);
        this.step = signal(1, ...(ngDevMode ? [{ debugName: "step" }] : []));
        this.accelerating = signal(false, ...(ngDevMode ? [{ debugName: "accelerating" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal("", ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.hasError = signal(false, ...(ngDevMode ? [{ debugName: "hasError" }] : []));
        this.progress = computed(() => (this.step() / 3) * 100, ...(ngDevMode ? [{ debugName: "progress" }] : []));
        this.form = this.fb.nonNullable.group({
            profession: ["", Validators.required],
            interest: ["educacao", Validators.required],
            name: ["", [Validators.required, Validators.minLength(3)]],
            phone: [
                "",
                [Validators.required, Validators.pattern(/^[+()\d\s-]{10,20}$/)],
            ],
            email: ["", [Validators.required, Validators.email]],
            city: [""],
            consent: [false, Validators.requiredTrue],
        });
    }
    professionLabel() {
        return ({
            despachante: "Despachante",
            vistoriador: "Vistoriador",
            lojista: "Lojista",
            outros: "Outro profissional",
        }[this.form.controls.profession.value] || "");
    }
    previous() {
        this.message.set("");
        this.step.update((v) => Math.max(1, v - 1));
    }
    async next() {
        this.message.set("");
        this.hasError.set(false);
        const fields = this.step() === 1
            ? ["profession", "interest"]
            : this.step() === 2
                ? ["name", "phone", "email"]
                : ["consent"];
        for (const key of fields) {
            const control = this.form.get(key);
            control?.markAsTouched();
            if (control?.invalid) {
                this.hasError.set(true);
                this.message.set("Confira os campos obrigatórios antes de continuar.");
                return;
            }
        }
        if (this.step() < 3) {
            this.accelerating.set(true);
            await new Promise((resolve) => setTimeout(resolve, 330));
            this.step.update((v) => v + 1);
            this.accelerating.set(false);
            return;
        }
        this.loading.set(true);
        try {
            await this.leadService.submit(this.form.getRawValue());
            this.message.set("Cadastro recebido! Em breve entraremos em contato.");
            this.form.reset({
                profession: "",
                interest: "educacao",
                name: "",
                phone: "",
                email: "",
                city: "",
                consent: false,
            });
            this.step.set(1);
        }
        catch (e) {
            this.hasError.set(true);
            this.message.set(e instanceof Error
                ? e.message
                : "Não foi possível enviar seu cadastro.");
        }
        finally {
            this.loading.set(false);
        }
    }
    static { this.ɵfac = function LeadFormComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LeadFormComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LeadFormComponent, selectors: [["app-lead-form"]], decls: 29, vars: 15, consts: [[1, "form-shell"], [1, "form-meter"], [1, "meter-track"], [1, "form-head"], [1, "eyebrow"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "step-panel"], ["role", "status", 1, "form-feedback", 3, "error"], [1, "form-actions"], ["type", "button", 1, "back"], ["type", "submit", 1, "button-primary", 3, "disabled"], [1, "form-note"], ["for", "profession"], ["id", "profession", "formControlName", "profession"], ["value", ""], ["value", "despachante"], ["value", "vistoriador"], ["value", "lojista"], ["value", "outros"], ["for", "interest"], ["id", "interest", "formControlName", "interest"], ["value", "educacao"], ["value", "vistoria"], ["value", "documentos"], ["value", "lojistas"], ["for", "name"], ["id", "name", "formControlName", "name", "autocomplete", "name", "placeholder", "Seu nome"], ["for", "phone"], ["id", "phone", "formControlName", "phone", "type", "tel", "inputmode", "tel", "autocomplete", "tel", "placeholder", "(11) 99999-9999"], ["for", "email"], ["id", "email", "formControlName", "email", "type", "email", "autocomplete", "email", "placeholder", "voce@empresa.com.br"], ["for", "city"], ["id", "city", "formControlName", "city", "placeholder", "Bel\u00E9m / PA"], [1, "review"], [1, "consent"], ["type", "checkbox", "formControlName", "consent"], ["role", "status", 1, "form-feedback"], ["type", "button", 1, "back", 3, "click"]], template: function LeadFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "span");
            i0.ɵɵtext(3, "CADASTRO DE INTERESSE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 2);
            i0.ɵɵelement(7, "div");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 3)(9, "span", 4);
            i0.ɵɵtext(10, "ACELERE SUA JORNADA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "h3");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14, "Preencha seus dados para conhecer as pr\u00F3ximas oportunidades.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "form", 5);
            i0.ɵɵlistener("ngSubmit", function LeadFormComponent_Template_form_ngSubmit_15_listener() { return ctx.next(); });
            i0.ɵɵelementStart(16, "div", 6);
            i0.ɵɵconditionalCreate(17, LeadFormComponent_Conditional_17_Template, 24, 0);
            i0.ɵɵconditionalCreate(18, LeadFormComponent_Conditional_18_Template, 12, 0);
            i0.ɵɵconditionalCreate(19, LeadFormComponent_Conditional_19_Template, 21, 4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(20, LeadFormComponent_Conditional_20_Template, 2, 3, "p", 7);
            i0.ɵɵelementStart(21, "div", 8);
            i0.ɵɵconditionalCreate(22, LeadFormComponent_Conditional_22_Template, 2, 0, "button", 9);
            i0.ɵɵelementStart(23, "button", 10);
            i0.ɵɵtext(24);
            i0.ɵɵelementStart(25, "span");
            i0.ɵɵtext(26, "\u2192");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(27, "p", 11);
            i0.ɵɵtext(28, " O envio s\u00F3 funciona ap\u00F3s configurar o Firebase e a prote\u00E7\u00E3o App Check. Nenhum dado \u00E9 armazenado no modo inicial. ");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("ETAPA 0", ctx.step(), " / 03");
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("width", ctx.progress(), "%");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.step() === 1 ? "QUAL \u00C9 SUA PISTA?" : ctx.step() === 2 ? "QUEM EST\u00C1 NO VOLANTE?" : "PRONTO PARA ACELERAR?", " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("accelerating", ctx.accelerating());
            i0.ɵɵattribute("data-step", ctx.step());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === 1 ? 17 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === 2 ? 18 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === 3 ? 19 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 20 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.step() > 1 ? 22 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.loading() || ctx.accelerating());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.loading() ? "ENVIANDO..." : ctx.step() === 3 ? "ENVIAR INTERESSE" : "PR\u00D3XIMA MARCHA", " ");
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LeadFormComponent, [{
        type: Component,
        args: [{ selector: "app-lead-form", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"form-shell\">\r\n      <div class=\"form-meter\">\r\n        <span>CADASTRO DE INTERESSE</span><span>ETAPA 0{{ step() }} / 03</span>\r\n      </div>\r\n      <div class=\"meter-track\"><div [style.width.%]=\"progress()\"></div></div>\r\n      <div class=\"form-head\">\r\n        <span class=\"eyebrow\">ACELERE SUA JORNADA</span>\r\n        <h3>\r\n          {{\r\n            step() === 1\r\n              ? \"QUAL \u00C9 SUA PISTA?\"\r\n              : step() === 2\r\n                ? \"QUEM EST\u00C1 NO VOLANTE?\"\r\n                : \"PRONTO PARA ACELERAR?\"\r\n          }}\r\n        </h3>\r\n        <p>Preencha seus dados para conhecer as pr\u00F3ximas oportunidades.</p>\r\n      </div>\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"next()\" novalidate>\r\n        <div\r\n          class=\"step-panel\"\r\n          [class.accelerating]=\"accelerating()\"\r\n          [attr.data-step]=\"step()\"\r\n        >\r\n          @if (step() === 1) {\r\n            <label for=\"profession\">\u00C1REA DE ATUA\u00C7\u00C3O *</label\r\n            ><select id=\"profession\" formControlName=\"profession\">\r\n              <option value=\"\">Selecione seu perfil</option>\r\n              <option value=\"despachante\">Despachante</option>\r\n              <option value=\"vistoriador\">Vistoriador</option>\r\n              <option value=\"lojista\">Lojista</option>\r\n              <option value=\"outros\">\r\n                Outro profissional automotivo\r\n              </option></select\r\n            ><label for=\"interest\">PRINCIPAL INTERESSE *</label\r\n            ><select id=\"interest\" formControlName=\"interest\">\r\n              <option value=\"educacao\">Educa\u00E7\u00E3o de tr\u00E2nsito</option>\r\n              <option value=\"vistoria\">Vistorias digitais (planejado)</option>\r\n              <option value=\"documentos\">\r\n                Servi\u00E7os documentais (planejado)\r\n              </option>\r\n              <option value=\"lojistas\">\r\n                Solu\u00E7\u00F5es para lojistas (planejado)\r\n              </option>\r\n            </select>\r\n          }\r\n          @if (step() === 2) {\r\n            <label for=\"name\">NOME COMPLETO *</label\r\n            ><input\r\n              id=\"name\"\r\n              formControlName=\"name\"\r\n              autocomplete=\"name\"\r\n              placeholder=\"Seu nome\"\r\n            /><label for=\"phone\">WHATSAPP COM DDD *</label\r\n            ><input\r\n              id=\"phone\"\r\n              formControlName=\"phone\"\r\n              type=\"tel\"\r\n              inputmode=\"tel\"\r\n              autocomplete=\"tel\"\r\n              placeholder=\"(11) 99999-9999\"\r\n            /><label for=\"email\">E-MAIL *</label\r\n            ><input\r\n              id=\"email\"\r\n              formControlName=\"email\"\r\n              type=\"email\"\r\n              autocomplete=\"email\"\r\n              placeholder=\"voce@empresa.com.br\"\r\n            /><label for=\"city\">CIDADE / UF</label\r\n            ><input id=\"city\" formControlName=\"city\" placeholder=\"Bel\u00E9m / PA\" />\r\n          }\r\n          @if (step() === 3) {\r\n            <div class=\"review\">\r\n              <p><strong>PROFISS\u00C3O</strong> {{ professionLabel() }}</p>\r\n              <p><strong>NOME</strong> {{ form.controls.name.value }}</p>\r\n              <p><strong>WHATSAPP</strong> {{ form.controls.phone.value }}</p>\r\n              <p>\r\n                <strong>INTERESSE</strong> {{ form.controls.interest.value }}\r\n              </p>\r\n            </div>\r\n            <label class=\"consent\"\r\n              ><input type=\"checkbox\" formControlName=\"consent\" /><span\r\n                >Autorizo o contato da Sexta Marcha sobre solu\u00E7\u00F5es e\r\n                oportunidades. Consulte as informa\u00E7\u00F5es de privacidade antes de\r\n                enviar. *</span\r\n              ></label\r\n            >\r\n          }\r\n        </div>\r\n        @if (message()) {\r\n          <p class=\"form-feedback\" [class.error]=\"hasError()\" role=\"status\">\r\n            {{ message() }}\r\n          </p>\r\n        }\r\n        <div class=\"form-actions\">\r\n          @if (step() > 1) {\r\n            <button type=\"button\" class=\"back\" (click)=\"previous()\">\r\n              \u2190 VOLTAR\r\n            </button>\r\n          }\r\n          <button\r\n            type=\"submit\"\r\n            class=\"button-primary\"\r\n            [disabled]=\"loading() || accelerating()\"\r\n          >\r\n            {{\r\n              loading()\r\n                ? \"ENVIANDO...\"\r\n                : step() === 3\r\n                  ? \"ENVIAR INTERESSE\"\r\n                  : \"PR\u00D3XIMA MARCHA\"\r\n            }}\r\n            <span>\u2192</span>\r\n          </button>\r\n        </div>\r\n      </form>\r\n      <p class=\"form-note\">\r\n        O envio s\u00F3 funciona ap\u00F3s configurar o Firebase e a prote\u00E7\u00E3o App Check.\r\n        Nenhum dado \u00E9 armazenado no modo inicial.\r\n      </p>\r\n    </div>\r\n", styles: ["/* Estilos espec\u00EDficos deste componente. */\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LeadFormComponent, { className: "LeadFormComponent", filePath: "src/app/components/lead-form.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=lead-form.component.js.map