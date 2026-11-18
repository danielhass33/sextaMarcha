import { Component, inject, signal } from "@angular/core";
import { Router, RouterLink, RouterOutlet, NavigationEnd, } from "@angular/router";
import { filter } from "rxjs";
import { environment } from "../environments/environment";
import * as i0 from "@angular/core";
function AppComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 0)(1, "div", 2)(2, "a", 3);
    i0.ɵɵelement(3, "img", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 5);
    i0.ɵɵlistener("click", function AppComponent_Conditional_0_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.menuOpen.set(!ctx_r1.menuOpen())); });
    i0.ɵɵelement(5, "span")(6, "span")(7, "span");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "nav", 6)(9, "a", 7);
    i0.ɵɵlistener("click", function AppComponent_Conditional_0_Template_a_click_9_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.menuOpen.set(false)); });
    i0.ɵɵtext(10, " Educa\u00E7\u00E3o no Tr\u00E2nsito ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 8);
    i0.ɵɵlistener("click", function AppComponent_Conditional_0_Template_a_click_11_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.menuOpen.set(false)); });
    i0.ɵɵtext(12, " Portal do despachante ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "a", 9);
    i0.ɵɵlistener("click", function AppComponent_Conditional_0_Template_a_click_13_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.menuOpen.set(false)); });
    i0.ɵɵtext(14, " Seja parceiro ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "a", 10);
    i0.ɵɵlistener("click", function AppComponent_Conditional_0_Template_a_click_15_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.menuOpen.set(false)); });
    i0.ɵɵtext(16, " Sobre ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "a", 11);
    i0.ɵɵlistener("click", function AppComponent_Conditional_0_Template_a_click_17_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.menuOpen.set(false)); });
    i0.ɵɵtext(18, " Solu\u00E7\u00F5es ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "a", 12);
    i0.ɵɵlistener("click", function AppComponent_Conditional_0_Template_a_click_19_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.menuOpen.set(false)); });
    i0.ɵɵtext(20, " Cadastro ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "a", 13);
    i0.ɵɵlistener("click", function AppComponent_Conditional_0_Template_a_click_21_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.menuOpen.set(false)); });
    i0.ɵɵtext(22, " Contato ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵattribute("aria-expanded", ctx_r1.menuOpen())("aria-label", ctx_r1.menuOpen() ? "Fechar menu" : "Abrir menu");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("open", ctx_r1.menuOpen());
} }
function AppComponent_Conditional_2_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", "mailto:" + ctx_r1.email, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.email, " ");
} }
function AppComponent_Conditional_2_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 19);
    i0.ɵɵtext(1, " WhatsApp \u2197 ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", "https://wa.me/" + ctx_r1.whatsapp, i0.ɵɵsanitizeUrl);
} }
function AppComponent_Conditional_2_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, " Canais de contato em configura\u00E7\u00E3o. ");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "footer", 1)(1, "div", 14)(2, "div");
    i0.ɵɵelement(3, "img", 4);
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, " Um hub de solu\u00E7\u00F5es para profissionais automotivos. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "strong");
    i0.ɵɵtext(8, "LINKS R\u00C1PIDOS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 15);
    i0.ɵɵtext(10, " Sobre ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 16);
    i0.ɵɵtext(12, " Solu\u00E7\u00F5es ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "a", 17);
    i0.ɵɵtext(14, " Cadastre seu interesse ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div")(16, "strong");
    i0.ɵɵtext(17, "CONTATO");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(18, AppComponent_Conditional_2_Conditional_18_Template, 2, 2, "a", 18);
    i0.ɵɵconditionalCreate(19, AppComponent_Conditional_2_Conditional_19_Template, 2, 1, "a", 19);
    i0.ɵɵconditionalCreate(20, AppComponent_Conditional_2_Conditional_20_Template, 2, 0, "p");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 20);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(18);
    i0.ɵɵconditional(ctx_r1.email ? 18 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.whatsapp ? 19 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.email && !ctx_r1.whatsapp ? 20 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" \u00A9 ", ctx_r1.year, " Sexta Marcha \u00B7 Acelere seus neg\u00F3cios. ");
} }
export class AppComponent {
    constructor() {
        this.router = inject(Router);
        this.menuOpen = signal(false, ...(ngDevMode ? [{ debugName: "menuOpen" }] : []));
        this.isSystemRoute = signal(false, ...(ngDevMode ? [{ debugName: "isSystemRoute" }] : []));
        this.year = new Date().getFullYear();
        this.email = environment.contactEmail;
        this.whatsapp = environment.contactWhatsApp;
        this.updateSystemRoute();
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
            this.updateSystemRoute();
            this.menuOpen.set(false);
        });
    }
    updateSystemRoute() {
        const path = this.router.url.split("?")[0].split("#")[0];
        this.isSystemRoute.set(path === "/portal" ||
            path.startsWith("/portal/") ||
            path === "/master" ||
            path.startsWith("/master/"));
    }
    static { this.ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[1, "navbar"], ["id", "contato", 1, "footer"], [1, "wrap", "nav-inner"], ["routerLink", "/", "aria-label", "Sexta Marcha - in\u00EDcio", 1, "logo"], ["src", "images/logo-sexta-marcha.png", "alt", "6\u00AA Marcha"], ["type", "button", "aria-controls", "nav-menu", 1, "hamburger", 3, "click"], ["id", "nav-menu", "aria-label", "Menu principal", 1, "nav-dropdown"], ["routerLink", "/educacao-no-transito", 3, "click"], ["routerLink", "/portal", 3, "click"], ["routerLink", "/cadastro-despachante", 3, "click"], ["routerLink", "/", "fragment", "sobre", 3, "click"], ["routerLink", "/", "fragment", "solucoes", 3, "click"], ["routerLink", "/", "fragment", "cadastro", 3, "click"], ["routerLink", "/", "fragment", "contato", 3, "click"], [1, "wrap", "footer-grid"], ["routerLink", "/", "fragment", "sobre"], ["routerLink", "/", "fragment", "solucoes"], ["routerLink", "/", "fragment", "cadastro"], [3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "wrap", "footer-bottom"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, AppComponent_Conditional_0_Template, 23, 4, "header", 0);
            i0.ɵɵelement(1, "router-outlet");
            i0.ɵɵconditionalCreate(2, AppComponent_Conditional_2_Template, 23, 4, "footer", 1);
        } if (rf & 2) {
            i0.ɵɵconditional(!ctx.isSystemRoute() ? 0 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.isSystemRoute() ? 2 : -1);
        } }, dependencies: [RouterLink, RouterOutlet], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: "app-root", standalone: true, imports: [RouterLink, RouterOutlet], template: "@if (!isSystemRoute()) {\r\n<header class=\"navbar\">\r\n  <div class=\"wrap nav-inner\">\r\n    <a routerLink=\"/\" class=\"logo\" aria-label=\"Sexta Marcha - in\u00EDcio\">\r\n      <img src=\"images/logo-sexta-marcha.png\" alt=\"6\u00AA Marcha\" />\r\n    </a>\r\n\r\n    <button class=\"hamburger\" type=\"button\" (click)=\"menuOpen.set(!menuOpen())\" [attr.aria-expanded]=\"menuOpen()\"\r\n      aria-controls=\"nav-menu\" [attr.aria-label]=\"menuOpen() ? 'Fechar menu' : 'Abrir menu'\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </button>\r\n  </div>\r\n\r\n  <nav id=\"nav-menu\" class=\"nav-dropdown\" [class.open]=\"menuOpen()\" aria-label=\"Menu principal\">\r\n    <a routerLink=\"/educacao-no-transito\" (click)=\"menuOpen.set(false)\">\r\n      Educa\u00E7\u00E3o no Tr\u00E2nsito\r\n    </a>\r\n\r\n    <a routerLink=\"/portal\" (click)=\"menuOpen.set(false)\">\r\n      Portal do despachante\r\n    </a>\r\n\r\n    <a routerLink=\"/cadastro-despachante\" (click)=\"menuOpen.set(false)\">\r\n      Seja parceiro\r\n    </a>\r\n\r\n    <a routerLink=\"/\" fragment=\"sobre\" (click)=\"menuOpen.set(false)\">\r\n      Sobre\r\n    </a>\r\n\r\n    <a routerLink=\"/\" fragment=\"solucoes\" (click)=\"menuOpen.set(false)\">\r\n      Solu\u00E7\u00F5es\r\n    </a>\r\n\r\n    <a routerLink=\"/\" fragment=\"cadastro\" (click)=\"menuOpen.set(false)\">\r\n      Cadastro\r\n    </a>\r\n\r\n    <a routerLink=\"/\" fragment=\"contato\" (click)=\"menuOpen.set(false)\">\r\n      Contato\r\n    </a>\r\n  </nav>\r\n</header>\r\n}\r\n\r\n<router-outlet></router-outlet>\r\n\r\n@if (!isSystemRoute()) {\r\n<footer id=\"contato\" class=\"footer\">\r\n  <div class=\"wrap footer-grid\">\r\n\r\n    <div>\r\n      <img src=\"images/logo-sexta-marcha.png\" alt=\"6\u00AA Marcha\" />\r\n      <p>\r\n        Um hub de solu\u00E7\u00F5es para profissionais automotivos.\r\n      </p>\r\n    </div>\r\n\r\n    <div>\r\n      <strong>LINKS R\u00C1PIDOS</strong>\r\n\r\n      <a routerLink=\"/\" fragment=\"sobre\">\r\n        Sobre\r\n      </a>\r\n\r\n      <a routerLink=\"/\" fragment=\"solucoes\">\r\n        Solu\u00E7\u00F5es\r\n      </a>\r\n\r\n      <a routerLink=\"/\" fragment=\"cadastro\">\r\n        Cadastre seu interesse\r\n      </a>\r\n    </div>\r\n\r\n    <div>\r\n      <strong>CONTATO</strong>\r\n\r\n      @if (email) {\r\n      <a [href]=\"'mailto:' + email\">\r\n        {{ email }}\r\n      </a>\r\n      }\r\n\r\n      @if (whatsapp) {\r\n      <a [href]=\"'https://wa.me/' + whatsapp\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n        WhatsApp \u2197\r\n      </a>\r\n      }\r\n\r\n      @if (!email && !whatsapp) {\r\n      <p>\r\n        Canais de contato em configura\u00E7\u00E3o.\r\n      </p>\r\n      }\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"wrap footer-bottom\">\r\n    \u00A9 {{ year }} Sexta Marcha \u00B7 Acelere seus neg\u00F3cios.\r\n  </div>\r\n</footer>\r\n}", styles: ["/* Estilos espec\u00EDficos deste componente. */\r\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=app.component.js.map