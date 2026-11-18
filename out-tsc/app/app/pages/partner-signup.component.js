import { Component, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signOut, } from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { firebaseApp, functions } from "../core/firebase";
import { CommercialService } from "../core/commercial.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function PartnerSignupComponent_Conditional_142_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 57);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function PartnerSignupComponent_Conditional_143_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.success());
} }
export class PartnerSignupComponent {
    constructor() {
        this.router = inject(Router);
        this.commercial = inject(CommercialService);
        this.name = "";
        this.business = "";
        this.cnpj = "";
        this.crdd = "";
        this.phone = "";
        this.city = "";
        this.email = "";
        this.password = "";
        this.confirm = "";
        this.consent = false;
        this.busy = signal(false, ...(ngDevMode ? [{ debugName: "busy" }] : []));
        this.error = signal("", ...(ngDevMode ? [{ debugName: "error" }] : []));
        this.success = signal("", ...(ngDevMode ? [{ debugName: "success" }] : []));
    }
    async register() {
        if (this.busy())
            return;
        this.error.set("");
        this.success.set("");
        const digitsPhone = this.phone.replace(/\D/g, "");
        if (!this.name.trim() ||
            !this.business.trim() ||
            !this.city.trim() ||
            !/^\d{10,13}$/.test(digitsPhone) ||
            !this.consent) {
            this.error.set("Confira os dados obrigatórios e o consentimento.");
            return;
        }
        if (!/^\d{14}$/.test(this.cnpj.replace(/\D/g, "")) || !this.crdd.trim()) {
            this.error.set("Informe um CNPJ de 14 dígitos e o registro CRDD.");
            return;
        }
        if (this.password.length < 12 || this.password !== this.confirm) {
            this.error.set("Use uma senha de pelo menos 12 caracteres e confirme-a corretamente.");
            return;
        }
        if (!firebaseApp || !functions) {
            this.error.set("Firebase ainda não configurado.");
            return;
        }
        this.busy.set(true);
        const auth = getAuth(firebaseApp);
        let created = false;
        try {
            const credential = await createUserWithEmailAndPassword(auth, this.email.trim().toLowerCase(), this.password);
            created = true;
            await sendEmailVerification(credential.user);
            const callable = httpsCallable(functions, "registerPartner");
            await callable({
                name: this.name.trim(),
                business: this.business.trim(),
                cnpj: this.cnpj.trim(),
                crdd: this.crdd.trim(),
                phone: this.phone.trim(),
                city: this.city.trim(),
                consent: this.consent,
            });
            await this.commercial.reloadProfile();
            this.password = "";
            this.confirm = "";
            this.success.set("Conta criada! Confirme seu e-mail. Seu cadastro ficará em análise até a habilitação comercial.");
            await this.router.navigateByUrl("/portal");
        }
        catch (e) {
            const code = e?.code;
            console.error("Falha no cadastro do parceiro:", e);
            this.error.set(created
                ? "A conta foi criada, mas não foi possível concluir o perfil. Entre em contato com o suporte antes de tentar outro e-mail."
                : code === "auth/email-already-in-use"
                    ? "Este e-mail já possui conta. Entre pelo portal ou recupere sua senha."
                    : "Não foi possível criar sua conta. Verifique os dados e tente novamente.");
            if (created)
                await signOut(auth).catch(() => { });
        }
        finally {
            this.busy.set(false);
        }
    }
    static { this.ɵfac = function PartnerSignupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PartnerSignupComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PartnerSignupComponent, selectors: [["ng-component"]], decls: 149, vars: 14, consts: [["signupForm", "ngForm"], [1, "signup-page"], [1, "signup-shell"], ["aria-labelledby", "signup-title", 1, "intro"], [1, "intro-top"], ["id", "signup-title"], [1, "intro-copy"], ["aria-label", "Benef\u00EDcios para parceiros", 1, "benefits"], [1, "benefit"], ["aria-hidden", "true", 1, "benefit-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.7", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "m2 9 10-5 10 5-10 5L2 9Z"], ["d", "M6 11v6c4 3 8 3 12 0v-6"], ["d", "M22 9v7"], [1, "benefit-icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"], ["d", "m9 12 2 2 4-4"], ["d", "M4 20V11h4v9M10 20V5h4v15M16 20v-7h4v7M2 20h20"], ["cx", "7", "cy", "7", "r", "2.5"], ["cx", "17", "cy", "17", "r", "2.5"], ["d", "M19 5 5 19"], [1, "login-hint"], ["routerLink", "/portal"], ["aria-hidden", "true"], ["aria-hidden", "true", 1, "intro-decor"], ["aria-labelledby", "form-title", 1, "form-card"], [1, "form-heading"], [1, "eyebrow"], [1, "slash"], ["id", "form-title"], [1, "dot"], [3, "ngSubmit"], [1, "field"], ["for", "partner-name"], ["id", "partner-name", "name", "name", "autocomplete", "name", "placeholder", "Digite seu nome completo", "minlength", "3", "maxlength", "120", "required", "", 3, "ngModelChange", "ngModel"], ["for", "partner-business"], ["id", "partner-business", "name", "business", "placeholder", "Nome do seu estabelecimento", "maxlength", "120", "required", "", 3, "ngModelChange", "ngModel"], [1, "field-row"], ["for", "partner-cnpj"], ["id", "partner-cnpj", "name", "cnpj", "inputmode", "numeric", "placeholder", "00.000.000/0000-00", "maxlength", "18", "required", "", 3, "ngModelChange", "ngModel"], ["for", "partner-crdd"], ["id", "partner-crdd", "name", "crdd", "placeholder", "Identifica\u00E7\u00E3o CRDD", "maxlength", "60", "required", "", 3, "ngModelChange", "ngModel"], ["for", "partner-phone"], ["id", "partner-phone", "name", "phone", "autocomplete", "tel", "type", "tel", "inputmode", "tel", "placeholder", "(91) 99999-9999", "required", "", 3, "ngModelChange", "ngModel"], ["for", "partner-city"], ["id", "partner-city", "name", "city", "placeholder", "Ex.: Bel\u00E9m/PA", "maxlength", "120", "required", "", 3, "ngModelChange", "ngModel"], ["for", "partner-email"], ["id", "partner-email", "name", "email", "autocomplete", "email", "type", "email", "placeholder", "seuemail@exemplo.com", "required", "", 3, "ngModelChange", "ngModel"], ["for", "partner-password"], ["id", "partner-password", "name", "password", "autocomplete", "new-password", "type", "password", "placeholder", "Crie uma senha segura", "minlength", "12", "required", "", 3, "ngModelChange", "ngModel"], ["for", "partner-confirm"], ["id", "partner-confirm", "name", "confirm", "autocomplete", "new-password", "type", "password", "placeholder", "Repita sua senha", "required", "", 3, "ngModelChange", "ngModel"], [1, "consent-row"], ["id", "partner-consent", "name", "consent", "type", "checkbox", "required", "", 3, "ngModelChange", "ngModel"], ["for", "partner-consent"], ["type", "submit", 1, "submit-button", 3, "disabled"], ["role", "alert", 1, "feedback", "error"], ["role", "status", 1, "feedback", "success"], [1, "form-footer"]], template: function PartnerSignupComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "main", 1)(1, "div", 2)(2, "section", 3)(3, "div", 4)(4, "h1", 5);
            i0.ɵɵtext(5, "SEU NEG\u00D3CIO.");
            i0.ɵɵelement(6, "br");
            i0.ɵɵelementStart(7, "span");
            i0.ɵɵtext(8, "NOVA MARCHA.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "p", 6);
            i0.ɵɵtext(10, "Amplie as oportunidades do seu estabelecimento. Ofere\u00E7a cursos de tr\u00E2nsito, acompanhe suas vendas e tenha visibilidade sobre suas comiss\u00F5es em um s\u00F3 lugar.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 7)(12, "article", 8)(13, "div", 9);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(14, "svg", 10);
            i0.ɵɵelement(15, "path", 11)(16, "path", 12)(17, "path", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(18, "div")(19, "h3");
            i0.ɵɵtext(20, "CURSOS DE TR\u00C2NSITO");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "p");
            i0.ɵɵtext(22, "Novas oportunidades de receita para seu neg\u00F3cio.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(23, "div", 8)(24, "div", 14);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(25, "svg", 15);
            i0.ɵɵelement(26, "path", 16)(27, "path", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(28, "div")(29, "h3");
            i0.ɵɵtext(30, "DEFESA E REGULARIZA\u00C7\u00C3O");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "p");
            i0.ɵɵtext(32, "Suspens\u00E3o, recursos de multas e cassa\u00E7\u00E3o da CNH.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(33, "article", 8)(34, "div", 9);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(35, "svg", 10);
            i0.ɵɵelement(36, "path", 18);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(37, "div")(38, "h3");
            i0.ɵɵtext(39, "GEST\u00C3O DE VENDAS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "p");
            i0.ɵɵtext(41, "Consulte suas vendas e acompanhe seus resultados.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(42, "article", 8)(43, "div", 9);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(44, "svg", 10);
            i0.ɵɵelement(45, "circle", 19)(46, "circle", 20)(47, "path", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(48, "div")(49, "h3");
            i0.ɵɵtext(50, "COMISS\u00D5ES TRANSPARENTES");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "p");
            i0.ɵɵtext(52, "Visualize seus valores e o fechamento semanal.");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(53, "div", 22);
            i0.ɵɵtext(54, "J\u00C1 POSSUI CADASTRO? ");
            i0.ɵɵelementStart(55, "a", 23);
            i0.ɵɵtext(56, "ACESSAR PORTAL ");
            i0.ɵɵelementStart(57, "span", 24);
            i0.ɵɵtext(58, "\u2197");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(59, "div", 25)(60, "span");
            i0.ɵɵtext(61, "06");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(62, "section", 26)(63, "div", 27)(64, "div", 28);
            i0.ɵɵelement(65, "span", 29);
            i0.ɵɵtext(66, " CADASTRO DE PARCEIRO");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "h2", 30);
            i0.ɵɵtext(68, "CRIAR MEU ACESSO");
            i0.ɵɵelementStart(69, "span", 31);
            i0.ɵɵtext(70, ".");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(71, "p");
            i0.ɵɵtext(72, "Preencha os dados abaixo para solicitar sua habilita\u00E7\u00E3o.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(73, "form", 32, 0);
            i0.ɵɵlistener("ngSubmit", function PartnerSignupComponent_Template_form_ngSubmit_73_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.register()); });
            i0.ɵɵelementStart(75, "div", 33)(76, "label", 34);
            i0.ɵɵtext(77, "NOME COMPLETO ");
            i0.ɵɵelementStart(78, "span");
            i0.ɵɵtext(79, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(80, "input", 35);
            i0.ɵɵtwoWayListener("ngModelChange", function PartnerSignupComponent_Template_input_ngModelChange_80_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.name, $event) || (ctx.name = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(81, "div", 33)(82, "label", 36);
            i0.ɵɵtext(83, "NOME DO ESTABELECIMENTO ");
            i0.ɵɵelementStart(84, "span");
            i0.ɵɵtext(85, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(86, "input", 37);
            i0.ɵɵtwoWayListener("ngModelChange", function PartnerSignupComponent_Template_input_ngModelChange_86_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.business, $event) || (ctx.business = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(87, "div", 38)(88, "div", 33)(89, "label", 39);
            i0.ɵɵtext(90, "CNPJ DO ESTABELECIMENTO ");
            i0.ɵɵelementStart(91, "span");
            i0.ɵɵtext(92, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(93, "input", 40);
            i0.ɵɵtwoWayListener("ngModelChange", function PartnerSignupComponent_Template_input_ngModelChange_93_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.cnpj, $event) || (ctx.cnpj = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(94, "div", 33)(95, "label", 41);
            i0.ɵɵtext(96, "REGISTRO / CRDD ");
            i0.ɵɵelementStart(97, "span");
            i0.ɵɵtext(98, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(99, "input", 42);
            i0.ɵɵtwoWayListener("ngModelChange", function PartnerSignupComponent_Template_input_ngModelChange_99_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.crdd, $event) || (ctx.crdd = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(100, "div", 38)(101, "div", 33)(102, "label", 43);
            i0.ɵɵtext(103, "WHATSAPP COM DDD ");
            i0.ɵɵelementStart(104, "span");
            i0.ɵɵtext(105, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(106, "input", 44);
            i0.ɵɵtwoWayListener("ngModelChange", function PartnerSignupComponent_Template_input_ngModelChange_106_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.phone, $event) || (ctx.phone = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(107, "div", 33)(108, "label", 45);
            i0.ɵɵtext(109, "CIDADE / UF ");
            i0.ɵɵelementStart(110, "span");
            i0.ɵɵtext(111, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(112, "input", 46);
            i0.ɵɵtwoWayListener("ngModelChange", function PartnerSignupComponent_Template_input_ngModelChange_112_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.city, $event) || (ctx.city = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(113, "div", 33)(114, "label", 47);
            i0.ɵɵtext(115, "E-MAIL DE ACESSO ");
            i0.ɵɵelementStart(116, "span");
            i0.ɵɵtext(117, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(118, "input", 48);
            i0.ɵɵtwoWayListener("ngModelChange", function PartnerSignupComponent_Template_input_ngModelChange_118_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(119, "div", 38)(120, "div", 33)(121, "label", 49);
            i0.ɵɵtext(122, "SENHA (M\u00CDN. 12 CARACTERES) ");
            i0.ɵɵelementStart(123, "span");
            i0.ɵɵtext(124, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(125, "input", 50);
            i0.ɵɵtwoWayListener("ngModelChange", function PartnerSignupComponent_Template_input_ngModelChange_125_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(126, "div", 33)(127, "label", 51);
            i0.ɵɵtext(128, "CONFIRMAR SENHA ");
            i0.ɵɵelementStart(129, "span");
            i0.ɵɵtext(130, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(131, "input", 52);
            i0.ɵɵtwoWayListener("ngModelChange", function PartnerSignupComponent_Template_input_ngModelChange_131_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.confirm, $event) || (ctx.confirm = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(132, "div", 53)(133, "input", 54);
            i0.ɵɵtwoWayListener("ngModelChange", function PartnerSignupComponent_Template_input_ngModelChange_133_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.consent, $event) || (ctx.consent = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(134, "label", 55);
            i0.ɵɵtext(135, "Concordo com o tratamento dos meus dados para an\u00E1lise do cadastro e opera\u00E7\u00E3o da plataforma, conforme a pol\u00EDtica de privacidade aplic\u00E1vel. ");
            i0.ɵɵelementStart(136, "span");
            i0.ɵɵtext(137, "*");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(138, "button", 56);
            i0.ɵɵtext(139);
            i0.ɵɵelementStart(140, "span", 24);
            i0.ɵɵtext(141, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(142, PartnerSignupComponent_Conditional_142_Template, 2, 1, "p", 57);
            i0.ɵɵconditionalCreate(143, PartnerSignupComponent_Conditional_143_Template, 2, 1, "p", 58);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(144, "div", 59)(145, "span");
            i0.ɵɵtext(146, "SEXTA MARCHA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(147, "span");
            i0.ɵɵtext(148, "ACESSO EXCLUSIVO PARA PARCEIROS");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            const signupForm_r3 = i0.ɵɵreference(74);
            i0.ɵɵadvance(80);
            i0.ɵɵtwoWayProperty("ngModel", ctx.name);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.business);
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.cnpj);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.crdd);
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.phone);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.city);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.password);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.confirm);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.consent);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.busy() || signupForm_r3.invalid);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("", ctx.busy() ? "CRIANDO ACESSO..." : "CRIAR CONTA", " ");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.error() ? 142 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.success() ? 143 : -1);
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinLengthValidator, i1.MaxLengthValidator, i1.CheckboxRequiredValidator, i1.NgModel, i1.NgForm, RouterLink], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  min-height: 100vh;\r\n  background: #090909;\r\n  color: #f6f6f6;\r\n  font-family: inherit;\r\n\r\n  --signup-orange: var(--brand-orange, #ff5a16);\r\n  --signup-orange-dark: #d7470e;\r\n  --signup-orange-border: #71331e;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n.signup-page[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  min-height: 100vh;\r\n  overflow: hidden;\r\n  background:\r\n    radial-gradient(ellipse at 16% 23%, #22201c 0, transparent 42%), #090909;\r\n}\r\n\r\n.signup-page[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 115px;\r\n  height: 6px;\r\n  background: var(--signup-orange);\r\n  transform: skewX(-30deg);\r\n  transform-origin: left;\r\n}\r\n\r\n.signup-shell[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n  width: 100%;\r\n  max-width: 1280px;\r\n  margin: 0 auto;\r\n  padding: 88px 24px 100px;\r\n\r\n  display: grid;\r\n  grid-template-columns:\r\n    minmax(0, 1fr)\r\n    minmax(480px, 0.97fr);\r\n  gap: clamp(36px, 4vw, 65px);\r\n  align-items: start;\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n.intro[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  min-height: 720px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  padding: 7px 0 12px;\r\n  isolation: isolate;\r\n}\r\n\r\n.intro-top[_ngcontent-%COMP%], \r\n.benefits[_ngcontent-%COMP%], \r\n.login-hint[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.brand-mark[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n  margin-bottom: 83px;\r\n  width: max-content;\r\n  letter-spacing: -0.05em;\r\n  font-style: italic;\r\n  font-weight: 950;\r\n  line-height: 0.85;\r\n}\r\n\r\n.brand-six[_ngcontent-%COMP%] {\r\n  font-size: 64px;\r\n  color: #fff;\r\n}\r\n\r\n.brand-m[_ngcontent-%COMP%] {\r\n  font-size: 53px;\r\n  color: var(--signup-orange);\r\n  margin-left: -10px;\r\n}\r\n\r\n.brand-word[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  line-height: 0.84;\r\n  margin-left: 11px;\r\n  letter-spacing: -0.06em;\r\n}\r\n\r\n.eyebrow[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  color: #dedede;\r\n  font-size: 12px;\r\n  letter-spacing: 0.11em;\r\n  font-weight: 800;\r\n}\r\n\r\n.slash[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 5px;\r\n  height: 21px;\r\n  background: var(--signup-orange);\r\n  transform: skewX(-21deg);\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: clamp(45px, 4.8vw, 78px);\r\n  line-height: 1.04;\r\n  letter-spacing: -0.065em;\r\n  font-weight: 950;\r\n  margin: 26px 0 23px;\r\n  white-space: nowrap;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: var(--signup-orange);\r\n}\r\n\r\n.intro-copy[_ngcontent-%COMP%] {\r\n  max-width: 530px;\r\n  color: #bcbcbc;\r\n  font-size: 16px;\r\n  line-height: 1.8;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n.benefits[_ngcontent-%COMP%] {\r\n  max-width: 540px;\r\n  margin: 48px 0 30px;\r\n}\r\n\r\n.benefit[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 19px;\r\n  padding: 17px 0;\r\n  border-bottom: 1px solid #333;\r\n}\r\n\r\n.benefit[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: 0;\r\n}\r\n\r\n.benefit-icon[_ngcontent-%COMP%] {\r\n  flex: 0 0 57px;\r\n  width: 57px;\r\n  height: 57px;\r\n  border: 1px solid var(--signup-orange-dark);\r\n  border-radius: 10px;\r\n\r\n  display: grid;\r\n  place-items: center;\r\n\r\n  color: var(--signup-orange);\r\n  background: linear-gradient(145deg, #28201a, #101010);\r\n}\r\n\r\n.benefit-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  width: 29px;\r\n  height: 29px;\r\n}\r\n\r\n.benefit[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  letter-spacing: 0.01em;\r\n  margin: 0 0 5px;\r\n  font-weight: 850;\r\n}\r\n\r\n.benefit[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  color: #999;\r\n  margin: 0;\r\n  line-height: 1.5;\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n.login-hint[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-weight: 800;\r\n  letter-spacing: 0.04em;\r\n  color: #9c9c9c;\r\n}\r\n\r\n.login-hint[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: var(--signup-orange);\r\n  margin-left: 13px;\r\n  text-decoration: none;\r\n  border-bottom: 1px solid var(--signup-orange-dark);\r\n  padding-bottom: 4px;\r\n  white-space: nowrap;\r\n  transition: color 0.2s;\r\n}\r\n\r\n.login-hint[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n.intro-decor[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: -30px;\r\n  bottom: 8px;\r\n  z-index: 0;\r\n  opacity: 0.035;\r\n  pointer-events: none;\r\n}\r\n\r\n.intro-decor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 390px;\r\n  font-weight: 900;\r\n  letter-spacing: -0.12em;\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n.form-card[_ngcontent-%COMP%] {\r\n  border: 1px solid var(--signup-orange-border);\r\n  border-radius: 24px;\r\n  background: linear-gradient(140deg, #171717, #101010 62%);\r\n  box-shadow: 0 28px 75px #0007;\r\n  padding: clamp(24px, 3vw, 45px);\r\n}\r\n\r\n.form-heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.form-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: clamp(26px, 2.5vw, 39px);\r\n  letter-spacing: -0.045em;\r\n  line-height: 1.1;\r\n  font-weight: 900;\r\n  margin: 18px 0 10px;\r\n}\r\n\r\n.dot[_ngcontent-%COMP%] {\r\n  color: var(--signup-orange);\r\n}\r\n\r\n.form-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  color: #a4a4a4;\r\n  line-height: 1.6;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n.field-row[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns:\r\n    minmax(0, 1fr)\r\n    minmax(0, 1fr);\r\n  gap: 16px;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n  min-width: 0;\r\n  margin-bottom: 17px;\r\n}\r\n\r\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: #eaeaea;\r\n  font-size: 10px;\r\n  font-weight: 850;\r\n  letter-spacing: 0.045em;\r\n  margin-bottom: 8px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \r\n.consent-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: var(--signup-orange);\r\n}\r\n\r\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 49px;\r\n  padding: 0 14px;\r\n\r\n  border: 1px solid #4a4a4a;\r\n  border-radius: 8px;\r\n  background: #222;\r\n  color: #fff;\r\n\r\n  font: inherit;\r\n  font-size: 13px;\r\n  outline: 0;\r\n\r\n  transition:\r\n    border-color 0.2s,\r\n    box-shadow 0.2s;\r\n}\r\n\r\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  color: #898989;\r\n}\r\n\r\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\r\n  border-color: #747474;\r\n}\r\n\r\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  border-color: var(--signup-orange);\r\n  box-shadow: 0 0 0 3px rgb(255 90 22 / 13%);\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n.consent-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 12px;\r\n  margin: 6px 0 22px;\r\n}\r\n\r\n.consent-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 18px;\r\n  height: 18px;\r\n  flex: 0 0 18px;\r\n  accent-color: var(--signup-orange);\r\n  margin: 2px 0 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.consent-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #aaa;\r\n  font-size: 12px;\r\n  line-height: 1.6;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n.submit-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 12px;\r\n\r\n  width: 100%;\r\n  min-height: 58px;\r\n\r\n  background: var(--signup-orange);\r\n  border: 0;\r\n  border-radius: 9px;\r\n  color: #0b0b0b;\r\n\r\n  font: inherit;\r\n  font-size: 14px;\r\n  font-weight: 950;\r\n  letter-spacing: 0.02em;\r\n\r\n  cursor: pointer;\r\n\r\n  transition:\r\n    transform 0.2s,\r\n    filter 0.2s;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:not(:disabled):hover {\r\n  filter: brightness(1.12);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 23px;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n.feedback[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  line-height: 1.6;\r\n  margin: 17px 0 0;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n  color: #ff9f92;\r\n}\r\n\r\n.success[_ngcontent-%COMP%] {\r\n  color: #a1e4b4;\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n.form-footer[_ngcontent-%COMP%] {\r\n  border-top: 1px solid #303030;\r\n  margin-top: 27px;\r\n  padding-top: 18px;\r\n\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 14px;\r\n\r\n  color: #777;\r\n  font-size: 9px;\r\n  font-weight: 750;\r\n  letter-spacing: 0.11em;\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n@media (max-width: 1150px) {\r\n  .signup-shell[_ngcontent-%COMP%] {\r\n    grid-template-columns:\r\n      minmax(0, 1fr)\r\n      minmax(430px, 1fr);\r\n    gap: 30px;\r\n    padding: 65px 30px 75px;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: clamp(38px, 4.6vw, 58px);\r\n  }\r\n\r\n  .brand-mark[_ngcontent-%COMP%] {\r\n    margin-bottom: 64px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n@media (max-width: 900px) {\r\n  .signup-shell[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    max-width: 740px;\r\n    gap: 36px;\r\n    padding: 52px 22px 70px;\r\n  }\r\n\r\n  .intro[_ngcontent-%COMP%] {\r\n    min-height: auto;\r\n    gap: 25px;\r\n  }\r\n\r\n  .brand-mark[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .intro-copy[_ngcontent-%COMP%] {\r\n    max-width: 650px;\r\n  }\r\n\r\n  .benefits[_ngcontent-%COMP%] {\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .intro-decor[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .form-card[_ngcontent-%COMP%] {\r\n    padding: 30px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n@media (max-width: 560px) {\r\n  .signup-shell[_ngcontent-%COMP%] {\r\n    padding: 35px 16px 55px;\r\n    gap: 30px;\r\n  }\r\n\r\n  .brand-mark[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n  }\r\n\r\n  .brand-six[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n  }\r\n\r\n  .brand-m[_ngcontent-%COMP%] {\r\n    font-size: 42px;\r\n  }\r\n\r\n  .brand-word[_ngcontent-%COMP%] {\r\n    font-size: 19px;\r\n  }\r\n\r\n  .eyebrow[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: clamp(36px, 9.1vw, 50px);\r\n    white-space: normal;\r\n  }\r\n\r\n  .intro-copy[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .benefits[_ngcontent-%COMP%] {\r\n    margin: 2px 0;\r\n  }\r\n\r\n  .benefit-icon[_ngcontent-%COMP%] {\r\n    flex-basis: 50px;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n\r\n  .form-card[_ngcontent-%COMP%] {\r\n    padding: 25px 18px;\r\n    border-radius: 17px;\r\n  }\r\n\r\n  .field-row[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    gap: 0;\r\n  }\r\n\r\n  .field[_ngcontent-%COMP%] {\r\n    margin-bottom: 16px;\r\n  }\r\n\r\n  .form-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 29px;\r\n  }\r\n\r\n  .form-footer[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    gap: 7px;\r\n  }\r\n\r\n  .login-hint[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n  }\r\n\r\n  .login-hint[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin-left: 6px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \r\n   .submit-button[_ngcontent-%COMP%], \r\n   .login-hint[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    transition: none;\r\n  }\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n@media (min-width: 901px) {\r\n  \n\r\n  .signup-shell[_ngcontent-%COMP%] {\r\n    gap: clamp(32px, 3.5vw, 54px);\r\n    align-items: start;\r\n  }\r\n\r\n  \n\r\n  .form-card[_ngcontent-%COMP%] {\r\n    padding: 28px 34px 24px;\r\n    border-radius: 20px;\r\n  }\r\n\r\n  \n\r\n  .form-heading[_ngcontent-%COMP%] {\r\n    margin-bottom: 18px;\r\n  }\r\n\r\n  .form-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: clamp(26px, 2.3vw, 34px);\r\n    margin: 12px 0 7px;\r\n  }\r\n\r\n  .form-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n  }\r\n\r\n  \n\r\n  .field[_ngcontent-%COMP%] {\r\n    margin-bottom: 11px;\r\n  }\r\n\r\n  .field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    height: 42px;\r\n    padding: 0 12px;\r\n    font-size: 12px;\r\n    border-radius: 7px;\r\n  }\r\n\r\n  .field-row[_ngcontent-%COMP%] {\r\n    gap: 13px;\r\n  }\r\n\r\n  \n\r\n  .consent-row[_ngcontent-%COMP%] {\r\n    gap: 10px;\r\n    margin: 3px 0 15px;\r\n  }\r\n\r\n  .consent-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    line-height: 1.5;\r\n  }\r\n\r\n  .consent-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    height: 16px;\r\n    flex-basis: 16px;\r\n  }\r\n\r\n  \n\r\n  .submit-button[_ngcontent-%COMP%] {\r\n    min-height: 48px;\r\n    font-size: 13px;\r\n  }\r\n\r\n  \n\r\n  .form-footer[_ngcontent-%COMP%] {\r\n    margin-top: 17px;\r\n    padding-top: 12px;\r\n  }\r\n\r\n  \n\r\n  .intro[_ngcontent-%COMP%] {\r\n    min-height: 690px;\r\n  }\r\n\r\n  .benefits[_ngcontent-%COMP%] {\r\n    margin: 30px 0 20px;\r\n  }\r\n\r\n  .benefit[_ngcontent-%COMP%] {\r\n    padding: 13px 0;\r\n  }\r\n\r\n  .benefit-icon[_ngcontent-%COMP%] {\r\n    flex: 0 0 51px;\r\n    width: 51px;\r\n    height: 51px;\r\n  }\r\n\r\n  .benefit-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    height: 25px;\r\n  }\r\n}\r\n\r\n\n\r\n@media (min-width: 901px) and (max-height: 850px) {\r\n  .signup-shell[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n    padding-bottom: 45px;\r\n  }\r\n\r\n  .form-card[_ngcontent-%COMP%] {\r\n    padding-top: 24px;\r\n    padding-bottom: 20px;\r\n  }\r\n\r\n  .field[_ngcontent-%COMP%] {\r\n    margin-bottom: 9px;\r\n  }\r\n\r\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n  }\r\n\r\n  .intro[_ngcontent-%COMP%] {\r\n    min-height: 640px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\n\r\n\r\n@media (min-width: 901px) {\r\n  .signup-shell[_ngcontent-%COMP%] {\r\n    padding-top: 90px !important;\r\n    padding-bottom: 60px;\r\n    align-items: start;\r\n  }\r\n\r\n  .intro[_ngcontent-%COMP%], \r\n   .form-card[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .intro[_ngcontent-%COMP%] {\r\n    min-height: 0;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  .benefits[_ngcontent-%COMP%] {\r\n    margin: 28px 0 18px;\r\n  }\r\n\r\n  .benefit[_ngcontent-%COMP%] {\r\n    padding: 11px 0;\r\n  }\r\n\r\n  .login-hint[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .signup-shell[_ngcontent-%COMP%] {\r\n    padding-top: 95px !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 560px) {\r\n  .signup-shell[_ngcontent-%COMP%] {\r\n    padding-top: 70px !important;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PartnerSignupComponent, [{
        type: Component,
        args: [{ standalone: true, imports: [FormsModule, RouterLink], template: "<main class=\"signup-page\">\r\n  <div class=\"signup-shell\">\r\n    <section class=\"intro\" aria-labelledby=\"signup-title\">\r\n      <div class=\"intro-top\">\r\n        <h1 id=\"signup-title\">SEU NEG\u00D3CIO.<br><span>NOVA MARCHA.</span></h1>\r\n        <p class=\"intro-copy\">Amplie as oportunidades do seu estabelecimento. Ofere\u00E7a cursos de tr\u00E2nsito, acompanhe suas\r\n          vendas e tenha visibilidade sobre suas comiss\u00F5es em um s\u00F3 lugar.</p>\r\n      </div>\r\n\r\n      <div class=\"benefits\" aria-label=\"Benef\u00EDcios para parceiros\">\r\n        <article class=\"benefit\">\r\n          <div class=\"benefit-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\r\n              stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n              <path d=\"m2 9 10-5 10 5-10 5L2 9Z\" />\r\n              <path d=\"M6 11v6c4 3 8 3 12 0v-6\" />\r\n              <path d=\"M22 9v7\" />\r\n            </svg></div>\r\n          <div>\r\n            <h3>CURSOS DE TR\u00C2NSITO</h3>\r\n            <p>Novas oportunidades de receita para seu neg\u00F3cio.</p>\r\n          </div>\r\n        </article>\r\n\r\n        <div class=\"benefit\">\r\n          <div class=\"benefit-icon\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\r\n              stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\r\n              <path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z\" />\r\n              <path d=\"m9 12 2 2 4-4\" />\r\n            </svg>\r\n          </div>\r\n\r\n          <div>\r\n            <h3>DEFESA E REGULARIZA\u00C7\u00C3O</h3>\r\n            <p>Suspens\u00E3o, recursos de multas e cassa\u00E7\u00E3o da CNH.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <article class=\"benefit\">\r\n          <div class=\"benefit-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\r\n              stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n              <path d=\"M4 20V11h4v9M10 20V5h4v15M16 20v-7h4v7M2 20h20\" />\r\n            </svg></div>\r\n          <div>\r\n            <h3>GEST\u00C3O DE VENDAS</h3>\r\n            <p>Consulte suas vendas e acompanhe seus resultados.</p>\r\n          </div>\r\n        </article>\r\n\r\n        <article class=\"benefit\">\r\n          <div class=\"benefit-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\r\n              stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n              <circle cx=\"7\" cy=\"7\" r=\"2.5\" />\r\n              <circle cx=\"17\" cy=\"17\" r=\"2.5\" />\r\n              <path d=\"M19 5 5 19\" />\r\n            </svg></div>\r\n          <div>\r\n            <h3>COMISS\u00D5ES TRANSPARENTES</h3>\r\n            <p>Visualize seus valores e o fechamento semanal.</p>\r\n          </div>\r\n        </article>\r\n      </div>\r\n\r\n      <div class=\"login-hint\">J\u00C1 POSSUI CADASTRO? <a routerLink=\"/portal\">ACESSAR PORTAL <span\r\n            aria-hidden=\"true\">\u2197</span></a></div>\r\n      <div class=\"intro-decor\" aria-hidden=\"true\"><span>06</span></div>\r\n    </section>\r\n\r\n    <section class=\"form-card\" aria-labelledby=\"form-title\">\r\n      <div class=\"form-heading\">\r\n        <div class=\"eyebrow\"><span class=\"slash\"></span> CADASTRO DE PARCEIRO</div>\r\n        <h2 id=\"form-title\">CRIAR MEU ACESSO<span class=\"dot\">.</span></h2>\r\n        <p>Preencha os dados abaixo para solicitar sua habilita\u00E7\u00E3o.</p>\r\n      </div>\r\n      <form #signupForm=\"ngForm\" (ngSubmit)=\"register()\">\r\n        <div class=\"field\"><label for=\"partner-name\">NOME COMPLETO <span>*</span></label><input id=\"partner-name\"\r\n            name=\"name\" [(ngModel)]=\"name\" autocomplete=\"name\" placeholder=\"Digite seu nome completo\" minlength=\"3\"\r\n            maxlength=\"120\" required></div>\r\n        <div class=\"field\"><label for=\"partner-business\">NOME DO ESTABELECIMENTO <span>*</span></label><input\r\n            id=\"partner-business\" name=\"business\" [(ngModel)]=\"business\" placeholder=\"Nome do seu estabelecimento\"\r\n            maxlength=\"120\" required></div>\r\n        <div class=\"field-row\">\r\n          <div class=\"field\"><label for=\"partner-cnpj\">CNPJ DO ESTABELECIMENTO <span>*</span></label><input\r\n              id=\"partner-cnpj\" name=\"cnpj\" [(ngModel)]=\"cnpj\" inputmode=\"numeric\" placeholder=\"00.000.000/0000-00\"\r\n              maxlength=\"18\" required></div>\r\n          <div class=\"field\"><label for=\"partner-crdd\">REGISTRO / CRDD <span>*</span></label><input id=\"partner-crdd\"\r\n              name=\"crdd\" [(ngModel)]=\"crdd\" placeholder=\"Identifica\u00E7\u00E3o CRDD\" maxlength=\"60\" required></div>\r\n        </div>\r\n        <div class=\"field-row\">\r\n          <div class=\"field\"><label for=\"partner-phone\">WHATSAPP COM DDD <span>*</span></label><input id=\"partner-phone\"\r\n              name=\"phone\" [(ngModel)]=\"phone\" autocomplete=\"tel\" type=\"tel\" inputmode=\"tel\"\r\n              placeholder=\"(91) 99999-9999\" required></div>\r\n          <div class=\"field\"><label for=\"partner-city\">CIDADE / UF <span>*</span></label><input id=\"partner-city\"\r\n              name=\"city\" [(ngModel)]=\"city\" placeholder=\"Ex.: Bel\u00E9m/PA\" maxlength=\"120\" required></div>\r\n        </div>\r\n        <div class=\"field\"><label for=\"partner-email\">E-MAIL DE ACESSO <span>*</span></label><input id=\"partner-email\"\r\n            name=\"email\" [(ngModel)]=\"email\" autocomplete=\"email\" type=\"email\" placeholder=\"seuemail@exemplo.com\"\r\n            required></div>\r\n        <div class=\"field-row\">\r\n          <div class=\"field\"><label for=\"partner-password\">SENHA (M\u00CDN. 12 CARACTERES) <span>*</span></label><input\r\n              id=\"partner-password\" name=\"password\" [(ngModel)]=\"password\" autocomplete=\"new-password\" type=\"password\"\r\n              placeholder=\"Crie uma senha segura\" minlength=\"12\" required></div>\r\n          <div class=\"field\"><label for=\"partner-confirm\">CONFIRMAR SENHA <span>*</span></label><input\r\n              id=\"partner-confirm\" name=\"confirm\" [(ngModel)]=\"confirm\" autocomplete=\"new-password\" type=\"password\"\r\n              placeholder=\"Repita sua senha\" required></div>\r\n        </div>\r\n        <div class=\"consent-row\"><input id=\"partner-consent\" name=\"consent\" [(ngModel)]=\"consent\" type=\"checkbox\"\r\n            required><label for=\"partner-consent\">Concordo com o tratamento dos meus dados para an\u00E1lise do cadastro e\r\n            opera\u00E7\u00E3o da plataforma, conforme a pol\u00EDtica de privacidade aplic\u00E1vel. <span>*</span></label></div>\r\n        <button class=\"submit-button\" type=\"submit\" [disabled]=\"busy() || signupForm.invalid\">{{ busy() ? 'CRIANDO\r\n          ACESSO...' : 'CRIAR CONTA' }} <span aria-hidden=\"true\">\u2197</span></button>\r\n        @if (error()) { <p class=\"feedback error\" role=\"alert\">{{ error() }}</p> }\r\n        @if (success()) { <p class=\"feedback success\" role=\"status\">{{ success() }}</p> }\r\n      </form>\r\n      <div class=\"form-footer\"><span>SEXTA MARCHA</span><span>ACESSO EXCLUSIVO PARA PARCEIROS</span></div>\r\n    </section>\r\n  </div>\r\n</main>", styles: [":host {\r\n  display: block;\r\n  min-height: 100vh;\r\n  background: #090909;\r\n  color: #f6f6f6;\r\n  font-family: inherit;\r\n\r\n  --signup-orange: var(--brand-orange, #ff5a16);\r\n  --signup-orange-dark: #d7470e;\r\n  --signup-orange-border: #71331e;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* ==========================================\r\n   ESTRUTURA GERAL\r\n========================================== */\r\n\r\n.signup-page {\r\n  position: relative;\r\n  min-height: 100vh;\r\n  overflow: hidden;\r\n  background:\r\n    radial-gradient(ellipse at 16% 23%, #22201c 0, transparent 42%), #090909;\r\n}\r\n\r\n.signup-page::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 115px;\r\n  height: 6px;\r\n  background: var(--signup-orange);\r\n  transform: skewX(-30deg);\r\n  transform-origin: left;\r\n}\r\n\r\n.signup-shell {\r\n  position: relative;\r\n  z-index: 1;\r\n  width: 100%;\r\n  max-width: 1280px;\r\n  margin: 0 auto;\r\n  padding: 88px 24px 100px;\r\n\r\n  display: grid;\r\n  grid-template-columns:\r\n    minmax(0, 1fr)\r\n    minmax(480px, 0.97fr);\r\n  gap: clamp(36px, 4vw, 65px);\r\n  align-items: start;\r\n}\r\n\r\n/* ==========================================\r\n   APRESENTA\u00C7\u00C3O / COLUNA ESQUERDA\r\n========================================== */\r\n\r\n.intro {\r\n  position: relative;\r\n  min-height: 720px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  padding: 7px 0 12px;\r\n  isolation: isolate;\r\n}\r\n\r\n.intro-top,\r\n.benefits,\r\n.login-hint {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.brand-mark {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n  margin-bottom: 83px;\r\n  width: max-content;\r\n  letter-spacing: -0.05em;\r\n  font-style: italic;\r\n  font-weight: 950;\r\n  line-height: 0.85;\r\n}\r\n\r\n.brand-six {\r\n  font-size: 64px;\r\n  color: #fff;\r\n}\r\n\r\n.brand-m {\r\n  font-size: 53px;\r\n  color: var(--signup-orange);\r\n  margin-left: -10px;\r\n}\r\n\r\n.brand-word {\r\n  font-size: 24px;\r\n  line-height: 0.84;\r\n  margin-left: 11px;\r\n  letter-spacing: -0.06em;\r\n}\r\n\r\n.eyebrow {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  color: #dedede;\r\n  font-size: 12px;\r\n  letter-spacing: 0.11em;\r\n  font-weight: 800;\r\n}\r\n\r\n.slash {\r\n  display: inline-block;\r\n  width: 5px;\r\n  height: 21px;\r\n  background: var(--signup-orange);\r\n  transform: skewX(-21deg);\r\n}\r\n\r\n/* ==========================================\r\n   T\u00CDTULOS E TEXTOS\r\n========================================== */\r\n\r\nh1 {\r\n  font-size: clamp(45px, 4.8vw, 78px);\r\n  line-height: 1.04;\r\n  letter-spacing: -0.065em;\r\n  font-weight: 950;\r\n  margin: 26px 0 23px;\r\n  white-space: nowrap;\r\n}\r\n\r\nh1 span {\r\n  color: var(--signup-orange);\r\n}\r\n\r\n.intro-copy {\r\n  max-width: 530px;\r\n  color: #bcbcbc;\r\n  font-size: 16px;\r\n  line-height: 1.8;\r\n  margin: 0;\r\n}\r\n\r\n/* ==========================================\r\n   BENEF\u00CDCIOS / \u00CDCONES\r\n========================================== */\r\n\r\n.benefits {\r\n  max-width: 540px;\r\n  margin: 48px 0 30px;\r\n}\r\n\r\n.benefit {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 19px;\r\n  padding: 17px 0;\r\n  border-bottom: 1px solid #333;\r\n}\r\n\r\n.benefit:last-child {\r\n  border-bottom: 0;\r\n}\r\n\r\n.benefit-icon {\r\n  flex: 0 0 57px;\r\n  width: 57px;\r\n  height: 57px;\r\n  border: 1px solid var(--signup-orange-dark);\r\n  border-radius: 10px;\r\n\r\n  display: grid;\r\n  place-items: center;\r\n\r\n  color: var(--signup-orange);\r\n  background: linear-gradient(145deg, #28201a, #101010);\r\n}\r\n\r\n.benefit-icon svg {\r\n  width: 29px;\r\n  height: 29px;\r\n}\r\n\r\n.benefit h3 {\r\n  font-size: 14px;\r\n  letter-spacing: 0.01em;\r\n  margin: 0 0 5px;\r\n  font-weight: 850;\r\n}\r\n\r\n.benefit p {\r\n  font-size: 13px;\r\n  color: #999;\r\n  margin: 0;\r\n  line-height: 1.5;\r\n}\r\n\r\n/* ==========================================\r\n   LINK PARA O PORTAL\r\n========================================== */\r\n\r\n.login-hint {\r\n  font-size: 12px;\r\n  font-weight: 800;\r\n  letter-spacing: 0.04em;\r\n  color: #9c9c9c;\r\n}\r\n\r\n.login-hint a {\r\n  color: var(--signup-orange);\r\n  margin-left: 13px;\r\n  text-decoration: none;\r\n  border-bottom: 1px solid var(--signup-orange-dark);\r\n  padding-bottom: 4px;\r\n  white-space: nowrap;\r\n  transition: color 0.2s;\r\n}\r\n\r\n.login-hint a:hover {\r\n  color: #fff;\r\n}\r\n\r\n/* ==========================================\r\n   ELEMENTO DECORATIVO\r\n========================================== */\r\n\r\n.intro-decor {\r\n  position: absolute;\r\n  right: -30px;\r\n  bottom: 8px;\r\n  z-index: 0;\r\n  opacity: 0.035;\r\n  pointer-events: none;\r\n}\r\n\r\n.intro-decor span {\r\n  font-size: 390px;\r\n  font-weight: 900;\r\n  letter-spacing: -0.12em;\r\n}\r\n\r\n/* ==========================================\r\n   CARD DO FORMUL\u00C1RIO\r\n========================================== */\r\n\r\n.form-card {\r\n  border: 1px solid var(--signup-orange-border);\r\n  border-radius: 24px;\r\n  background: linear-gradient(140deg, #171717, #101010 62%);\r\n  box-shadow: 0 28px 75px #0007;\r\n  padding: clamp(24px, 3vw, 45px);\r\n}\r\n\r\n.form-heading {\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.form-heading h2 {\r\n  font-size: clamp(26px, 2.5vw, 39px);\r\n  letter-spacing: -0.045em;\r\n  line-height: 1.1;\r\n  font-weight: 900;\r\n  margin: 18px 0 10px;\r\n}\r\n\r\n.dot {\r\n  color: var(--signup-orange);\r\n}\r\n\r\n.form-heading p {\r\n  font-size: 13px;\r\n  color: #a4a4a4;\r\n  line-height: 1.6;\r\n  margin: 0;\r\n}\r\n\r\n/* ==========================================\r\n   CAMPOS DO FORMUL\u00C1RIO\r\n========================================== */\r\n\r\n.field-row {\r\n  display: grid;\r\n  grid-template-columns:\r\n    minmax(0, 1fr)\r\n    minmax(0, 1fr);\r\n  gap: 16px;\r\n}\r\n\r\n.field {\r\n  min-width: 0;\r\n  margin-bottom: 17px;\r\n}\r\n\r\n.field label {\r\n  display: block;\r\n  color: #eaeaea;\r\n  font-size: 10px;\r\n  font-weight: 850;\r\n  letter-spacing: 0.045em;\r\n  margin-bottom: 8px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.field label span,\r\n.consent-row label span {\r\n  color: var(--signup-orange);\r\n}\r\n\r\n.field input {\r\n  display: block;\r\n  width: 100%;\r\n  height: 49px;\r\n  padding: 0 14px;\r\n\r\n  border: 1px solid #4a4a4a;\r\n  border-radius: 8px;\r\n  background: #222;\r\n  color: #fff;\r\n\r\n  font: inherit;\r\n  font-size: 13px;\r\n  outline: 0;\r\n\r\n  transition:\r\n    border-color 0.2s,\r\n    box-shadow 0.2s;\r\n}\r\n\r\n.field input::placeholder {\r\n  color: #898989;\r\n}\r\n\r\n.field input:hover {\r\n  border-color: #747474;\r\n}\r\n\r\n.field input:focus {\r\n  border-color: var(--signup-orange);\r\n  box-shadow: 0 0 0 3px rgb(255 90 22 / 13%);\r\n}\r\n\r\n/* ==========================================\r\n   CONSENTIMENTO\r\n========================================== */\r\n\r\n.consent-row {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 12px;\r\n  margin: 6px 0 22px;\r\n}\r\n\r\n.consent-row input {\r\n  width: 18px;\r\n  height: 18px;\r\n  flex: 0 0 18px;\r\n  accent-color: var(--signup-orange);\r\n  margin: 2px 0 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.consent-row label {\r\n  color: #aaa;\r\n  font-size: 12px;\r\n  line-height: 1.6;\r\n  cursor: pointer;\r\n}\r\n\r\n/* ==========================================\r\n   BOT\u00C3O PRINCIPAL\r\n========================================== */\r\n\r\n.submit-button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 12px;\r\n\r\n  width: 100%;\r\n  min-height: 58px;\r\n\r\n  background: var(--signup-orange);\r\n  border: 0;\r\n  border-radius: 9px;\r\n  color: #0b0b0b;\r\n\r\n  font: inherit;\r\n  font-size: 14px;\r\n  font-weight: 950;\r\n  letter-spacing: 0.02em;\r\n\r\n  cursor: pointer;\r\n\r\n  transition:\r\n    transform 0.2s,\r\n    filter 0.2s;\r\n}\r\n\r\n.submit-button:not(:disabled):hover {\r\n  filter: brightness(1.12);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.submit-button:disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.submit-button span {\r\n  font-size: 23px;\r\n  font-weight: 500;\r\n}\r\n\r\n/* ==========================================\r\n   MENSAGENS DE FEEDBACK\r\n========================================== */\r\n\r\n.feedback {\r\n  font-size: 13px;\r\n  line-height: 1.6;\r\n  margin: 17px 0 0;\r\n}\r\n\r\n.error {\r\n  color: #ff9f92;\r\n}\r\n\r\n.success {\r\n  color: #a1e4b4;\r\n}\r\n\r\n/* ==========================================\r\n   RODAP\u00C9 DO FORMUL\u00C1RIO\r\n========================================== */\r\n\r\n.form-footer {\r\n  border-top: 1px solid #303030;\r\n  margin-top: 27px;\r\n  padding-top: 18px;\r\n\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 14px;\r\n\r\n  color: #777;\r\n  font-size: 9px;\r\n  font-weight: 750;\r\n  letter-spacing: 0.11em;\r\n}\r\n\r\n/* ==========================================\r\n   RESPONSIVIDADE / NOTEBOOK\r\n========================================== */\r\n\r\n@media (max-width: 1150px) {\r\n  .signup-shell {\r\n    grid-template-columns:\r\n      minmax(0, 1fr)\r\n      minmax(430px, 1fr);\r\n    gap: 30px;\r\n    padding: 65px 30px 75px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: clamp(38px, 4.6vw, 58px);\r\n  }\r\n\r\n  .brand-mark {\r\n    margin-bottom: 64px;\r\n  }\r\n}\r\n\r\n/* ==========================================\r\n   RESPONSIVIDADE / TABLET\r\n========================================== */\r\n\r\n@media (max-width: 900px) {\r\n  .signup-shell {\r\n    grid-template-columns: 1fr;\r\n    max-width: 740px;\r\n    gap: 36px;\r\n    padding: 52px 22px 70px;\r\n  }\r\n\r\n  .intro {\r\n    min-height: auto;\r\n    gap: 25px;\r\n  }\r\n\r\n  .brand-mark {\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .intro-copy {\r\n    max-width: 650px;\r\n  }\r\n\r\n  .benefits {\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .intro-decor {\r\n    display: none;\r\n  }\r\n\r\n  .form-card {\r\n    padding: 30px;\r\n  }\r\n}\r\n\r\n/* ==========================================\r\n   RESPONSIVIDADE / CELULAR\r\n========================================== */\r\n\r\n@media (max-width: 560px) {\r\n  .signup-shell {\r\n    padding: 35px 16px 55px;\r\n    gap: 30px;\r\n  }\r\n\r\n  .brand-mark {\r\n    margin-bottom: 42px;\r\n  }\r\n\r\n  .brand-six {\r\n    font-size: 50px;\r\n  }\r\n\r\n  .brand-m {\r\n    font-size: 42px;\r\n  }\r\n\r\n  .brand-word {\r\n    font-size: 19px;\r\n  }\r\n\r\n  .eyebrow {\r\n    font-size: 10px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: clamp(36px, 9.1vw, 50px);\r\n    white-space: normal;\r\n  }\r\n\r\n  .intro-copy {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .benefits {\r\n    margin: 2px 0;\r\n  }\r\n\r\n  .benefit-icon {\r\n    flex-basis: 50px;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n\r\n  .form-card {\r\n    padding: 25px 18px;\r\n    border-radius: 17px;\r\n  }\r\n\r\n  .field-row {\r\n    grid-template-columns: 1fr;\r\n    gap: 0;\r\n  }\r\n\r\n  .field {\r\n    margin-bottom: 16px;\r\n  }\r\n\r\n  .form-heading h2 {\r\n    font-size: 29px;\r\n  }\r\n\r\n  .form-footer {\r\n    flex-direction: column;\r\n    gap: 7px;\r\n  }\r\n\r\n  .login-hint {\r\n    font-size: 10px;\r\n  }\r\n\r\n  .login-hint a {\r\n    margin-left: 6px;\r\n  }\r\n}\r\n\r\n/* ==========================================\r\n   ACESSIBILIDADE\r\n========================================== */\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  .field input,\r\n  .submit-button,\r\n  .login-hint a {\r\n    transition: none;\r\n  }\r\n}\r\n\r\n/* ==========================================\r\n   AJUSTE FINAL \u2014 FORMUL\u00C1RIO COMPACTO\r\n========================================== */\r\n\r\n@media (min-width: 901px) {\r\n  /* Aproxima as duas colunas */\r\n  .signup-shell {\r\n    gap: clamp(32px, 3.5vw, 54px);\r\n    align-items: start;\r\n  }\r\n\r\n  /* Compacta o card */\r\n  .form-card {\r\n    padding: 28px 34px 24px;\r\n    border-radius: 20px;\r\n  }\r\n\r\n  /* Cabe\u00E7alho */\r\n  .form-heading {\r\n    margin-bottom: 18px;\r\n  }\r\n\r\n  .form-heading h2 {\r\n    font-size: clamp(26px, 2.3vw, 34px);\r\n    margin: 12px 0 7px;\r\n  }\r\n\r\n  .form-heading p {\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n  }\r\n\r\n  /* Campos mais pr\u00F3ximos */\r\n  .field {\r\n    margin-bottom: 11px;\r\n  }\r\n\r\n  .field label {\r\n    font-size: 10px;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .field input {\r\n    height: 42px;\r\n    padding: 0 12px;\r\n    font-size: 12px;\r\n    border-radius: 7px;\r\n  }\r\n\r\n  .field-row {\r\n    gap: 13px;\r\n  }\r\n\r\n  /* Consentimento */\r\n  .consent-row {\r\n    gap: 10px;\r\n    margin: 3px 0 15px;\r\n  }\r\n\r\n  .consent-row label {\r\n    font-size: 11px;\r\n    line-height: 1.5;\r\n  }\r\n\r\n  .consent-row input {\r\n    width: 16px;\r\n    height: 16px;\r\n    flex-basis: 16px;\r\n  }\r\n\r\n  /* Bot\u00E3o */\r\n  .submit-button {\r\n    min-height: 48px;\r\n    font-size: 13px;\r\n  }\r\n\r\n  /* Rodap\u00E9 */\r\n  .form-footer {\r\n    margin-top: 17px;\r\n    padding-top: 12px;\r\n  }\r\n\r\n  /* Ajusta a distribui\u00E7\u00E3o da esquerda */\r\n  .intro {\r\n    min-height: 690px;\r\n  }\r\n\r\n  .benefits {\r\n    margin: 30px 0 20px;\r\n  }\r\n\r\n  .benefit {\r\n    padding: 13px 0;\r\n  }\r\n\r\n  .benefit-icon {\r\n    flex: 0 0 51px;\r\n    width: 51px;\r\n    height: 51px;\r\n  }\r\n\r\n  .benefit-icon svg {\r\n    width: 25px;\r\n    height: 25px;\r\n  }\r\n}\r\n\r\n/* Notebook com altura de tela menor */\r\n@media (min-width: 901px) and (max-height: 850px) {\r\n  .signup-shell {\r\n    padding-top: 50px;\r\n    padding-bottom: 45px;\r\n  }\r\n\r\n  .form-card {\r\n    padding-top: 24px;\r\n    padding-bottom: 20px;\r\n  }\r\n\r\n  .field {\r\n    margin-bottom: 9px;\r\n  }\r\n\r\n  .field input {\r\n    height: 40px;\r\n  }\r\n\r\n  .intro {\r\n    min-height: 640px;\r\n  }\r\n}\r\n\r\n/* ==========================================\r\n   ESPA\u00C7AMENTO DEFINITIVO DA NAVBAR\r\n========================================== */\r\n\r\n@media (min-width: 901px) {\r\n  .signup-shell {\r\n    padding-top: 90px !important;\r\n    padding-bottom: 60px;\r\n    align-items: start;\r\n  }\r\n\r\n  .intro,\r\n  .form-card {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .intro {\r\n    min-height: 0;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  .benefits {\r\n    margin: 28px 0 18px;\r\n  }\r\n\r\n  .benefit {\r\n    padding: 11px 0;\r\n  }\r\n\r\n  .login-hint {\r\n    margin-top: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .signup-shell {\r\n    padding-top: 95px !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 560px) {\r\n  .signup-shell {\r\n    padding-top: 70px !important;\r\n  }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PartnerSignupComponent, { className: "PartnerSignupComponent", filePath: "src/app/pages/partner-signup.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=partner-signup.component.js.map