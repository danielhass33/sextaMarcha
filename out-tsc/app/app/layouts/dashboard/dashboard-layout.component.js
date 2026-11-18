import { Component, EventEmitter, Input, Output, signal } from "@angular/core";
import * as i0 from "@angular/core";
const _c0 = ["*"];
function DashboardLayoutComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "button", 23);
    i0.ɵɵdomListener("click", function DashboardLayoutComponent_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mobileOpen.set(false)); });
    i0.ɵɵdomElementEnd();
} }
function DashboardLayoutComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "button", 7);
    i0.ɵɵdomListener("click", function DashboardLayoutComponent_Conditional_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigate("partners")); });
    i0.ɵɵdomElementStart(1, "span", 8);
    i0.ɵɵtext(2, "\u2667");
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(3, " Despachantes ");
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", ctx_r1.active === "partners");
} }
function DashboardLayoutComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "button", 7);
    i0.ɵɵdomListener("click", function DashboardLayoutComponent_Conditional_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigate("new-sale")); });
    i0.ɵɵdomElementStart(1, "span", 8);
    i0.ɵɵtext(2, "\uFF0B");
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(3, " Nova venda ");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(4, "button", 7);
    i0.ɵɵdomListener("click", function DashboardLayoutComponent_Conditional_15_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigate("customers")); });
    i0.ɵɵdomElementStart(5, "span", 8);
    i0.ɵɵtext(6, "\u2667");
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(7, " Clientes ");
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", ctx_r1.active === "new-sale");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("selected", ctx_r1.active === "customers");
} }
function DashboardLayoutComponent_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 24);
    i0.ɵɵtext(1, " MINHA CONTA ");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(2, "button", 7);
    i0.ɵɵdomListener("click", function DashboardLayoutComponent_Conditional_28_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigate("business")); });
    i0.ɵɵdomElementStart(3, "span", 8);
    i0.ɵɵtext(4, "\u2699");
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(5, " Meu estabelecimento ");
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("selected", ctx_r1.active === "business");
} }
export class DashboardLayoutComponent {
    constructor() {
        this.mode = "partner";
        this.active = "overview";
        this.name = "";
        this.business = "";
        this.sectionChange = new EventEmitter();
        this.logout = new EventEmitter();
        this.mobileOpen = signal(false, ...(ngDevMode ? [{ debugName: "mobileOpen" }] : []));
    }
    get isMaster() {
        return this.mode === "master";
    }
    navigate(section) {
        this.sectionChange.emit(section);
        this.mobileOpen.set(false);
    }
    signOut() {
        this.logout.emit();
        this.mobileOpen.set(false);
    }
    static { this.ɵfac = function DashboardLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardLayoutComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardLayoutComponent, selectors: [["app-dashboard-layout"]], inputs: { mode: "mode", active: "active", name: "name", business: "business" }, outputs: { sectionChange: "sectionChange", logout: "logout" }, ngContentSelectors: _c0, decls: 57, vars: 22, consts: [[1, "dashboard-layout"], ["type", "button", "aria-label", "Fechar menu", 1, "mobile-backdrop"], [1, "sidebar"], [1, "sidebar-brand"], ["src", "images/logo-sexta-marcha.png", "alt", "Sexta Marcha"], [1, "sidebar-label"], ["aria-label", "Navega\u00E7\u00E3o do sistema", 1, "sidebar-nav"], ["type", "button", 3, "click"], [1, "nav-icon"], ["type", "button", 3, "selected"], [1, "sidebar-bottom"], [1, "account"], [1, "avatar"], [1, "account-info"], ["type", "button", 1, "logout", 3, "click"], [1, "dashboard-main"], [1, "dashboard-topbar"], [1, "topbar-left"], ["type", "button", "aria-label", "Abrir menu", 1, "menu-toggle", 3, "click"], [1, "topbar-overline"], [1, "topbar-right"], [1, "online-dot"], [1, "dashboard-content"], ["type", "button", "aria-label", "Fechar menu", 1, "mobile-backdrop", 3, "click"], [1, "sidebar-label", "secondary-label"]], template: function DashboardLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵdomElementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, DashboardLayoutComponent_Conditional_1_Template, 1, 0, "button", 1);
            i0.ɵɵdomElementStart(2, "aside", 2)(3, "div", 3);
            i0.ɵɵdomElement(4, "img", 4);
            i0.ɵɵdomElementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(7, "div", 5);
            i0.ɵɵtext(8, "MENU PRINCIPAL");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(9, "nav", 6)(10, "button", 7);
            i0.ɵɵdomListener("click", function DashboardLayoutComponent_Template_button_click_10_listener() { return ctx.navigate("overview"); });
            i0.ɵɵdomElementStart(11, "span", 8);
            i0.ɵɵtext(12, "\u25A6");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(13, " Vis\u00E3o geral ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(14, DashboardLayoutComponent_Conditional_14_Template, 4, 2, "button", 9)(15, DashboardLayoutComponent_Conditional_15_Template, 8, 4);
            i0.ɵɵdomElementStart(16, "button", 7);
            i0.ɵɵdomListener("click", function DashboardLayoutComponent_Template_button_click_16_listener() { return ctx.navigate("courses"); });
            i0.ɵɵdomElementStart(17, "span", 8);
            i0.ɵɵtext(18, "\u25A4");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(19, " Cursos de tr\u00E2nsito ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(20, "button", 7);
            i0.ɵɵdomListener("click", function DashboardLayoutComponent_Template_button_click_20_listener() { return ctx.navigate("sales"); });
            i0.ɵɵdomElementStart(21, "span", 8);
            i0.ɵɵtext(22, "\u25A5");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(23);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(24, "button", 7);
            i0.ɵɵdomListener("click", function DashboardLayoutComponent_Template_button_click_24_listener() { return ctx.navigate("commissions"); });
            i0.ɵɵdomElementStart(25, "span", 8);
            i0.ɵɵtext(26, "\u25C8");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(27, " Comiss\u00F5es ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(28, DashboardLayoutComponent_Conditional_28_Template, 6, 2);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(29, "div", 10)(30, "div", 11)(31, "div", 12);
            i0.ɵɵtext(32);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(33, "div", 13)(34, "strong");
            i0.ɵɵtext(35);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(36, "small");
            i0.ɵɵtext(37);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(38, "button", 14);
            i0.ɵɵdomListener("click", function DashboardLayoutComponent_Template_button_click_38_listener() { return ctx.signOut(); });
            i0.ɵɵtext(39, " Sair do sistema ");
            i0.ɵɵdomElementStart(40, "span");
            i0.ɵɵtext(41, "\u2197");
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵdomElementStart(42, "div", 15)(43, "header", 16)(44, "div", 17)(45, "button", 18);
            i0.ɵɵdomListener("click", function DashboardLayoutComponent_Template_button_click_45_listener() { return ctx.mobileOpen.set(!ctx.mobileOpen()); });
            i0.ɵɵtext(46, " \u2630 ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(47, "div")(48, "span", 19);
            i0.ɵɵtext(49);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(50, "strong");
            i0.ɵɵtext(51);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(52, "div", 20);
            i0.ɵɵdomElement(53, "span", 21);
            i0.ɵɵtext(54);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(55, "main", 22);
            i0.ɵɵprojection(56);
            i0.ɵɵdomElementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.mobileOpen() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("open", ctx.mobileOpen());
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.isMaster ? "ADMINISTRA\u00C7\u00C3O" : "PORTAL COMERCIAL", " ");
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("selected", ctx.active === "overview");
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.isMaster ? 14 : 15);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("selected", ctx.active === "courses");
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("selected", ctx.active === "sales");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.isMaster ? "Todas as vendas" : "Minhas vendas", " ");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("selected", ctx.active === "commissions");
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(!ctx.isMaster ? 28 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", (ctx.name || "S").charAt(0).toUpperCase(), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.name || "Sexta Marcha");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.business || "Administra\u00E7\u00E3o");
            i0.ɵɵadvance(8);
            i0.ɵɵattribute("aria-expanded", ctx.mobileOpen());
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" SEXTA MARCHA / ", ctx.isMaster ? "MASTER" : "PARCEIRO", " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.isMaster ? "Central administrativa" : "Central de neg\u00F3cios", " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.isMaster ? "Administrador" : "Parceiro ativo", " ");
        } }, styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  --system-orange: var(--brand-orange, #f47721);\r\n  --system-bg: #f5f6f8;\r\n  --system-text: #1b2028;\r\n  --system-muted: #7c8490;\r\n  font-family: inherit;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.dashboard-layout[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  min-height: 100vh;\r\n  background: var(--system-bg);\r\n  color: var(--system-text);\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  width: 264px;\r\n  flex: 0 0 264px;\r\n  background: #15181d;\r\n  color: #f5f5f5;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  position: sticky;\r\n  top: 0;\r\n  height: 100vh;\r\n  z-index: 40;\r\n  border-right: 1px solid #282c33;\r\n}\r\n\r\n.sidebar-brand[_ngcontent-%COMP%] {\r\n  padding: 30px 25px 32px;\r\n  border-bottom: 1px solid #292c32;\r\n}\r\n\r\n.sidebar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 160px;\r\n  max-height: 65px;\r\n  object-fit: contain;\r\n  object-position: left center;\r\n}\r\n\r\n.sidebar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 12px;\r\n  font-size: 9px;\r\n  letter-spacing: 0.18em;\r\n  color: #9298a2;\r\n  font-weight: 800;\r\n}\r\n\r\n.sidebar-label[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  font-weight: 800;\r\n  letter-spacing: 0.12em;\r\n  color: #777e89;\r\n  padding: 30px 25px 13px;\r\n}\r\n\r\n.secondary-label[_ngcontent-%COMP%] {\r\n  padding-top: 35px;\r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%] {\r\n  padding: 0 12px;\r\n  flex: 1;\r\n  overflow-y: auto;\r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 46px;\r\n  border: 0;\r\n  background: transparent;\r\n  color: #aeb4be;\r\n  text-align: left;\r\n  border-radius: 9px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 13px;\r\n  padding: 11px 13px;\r\n  margin-bottom: 5px;\r\n  font: inherit;\r\n  font-size: 13px;\r\n  font-weight: 650;\r\n  cursor: pointer;\r\n  transition:\r\n    background 0.2s,\r\n    color 0.2s;\r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #242930;\r\n  color: #fff;\r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\r\n  background: color-mix(in srgb, var(--system-orange) 13%, #1c2026);\r\n  color: var(--system-orange);\r\n  box-shadow: inset 3px 0 var(--system-orange);\r\n}\r\n\r\n.nav-icon[_ngcontent-%COMP%] {\r\n  width: 22px;\r\n  text-align: center;\r\n  font-size: 19px;\r\n  line-height: 1;\r\n  font-weight: 500;\r\n}\r\n\r\n.sidebar-bottom[_ngcontent-%COMP%] {\r\n  padding: 18px 16px 22px;\r\n  border-top: 1px solid #292c32;\r\n}\r\n\r\n.account[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 11px;\r\n  padding: 6px 5px 17px;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n  width: 38px;\r\n  height: 38px;\r\n  border-radius: 11px;\r\n  display: grid;\r\n  place-items: center;\r\n  background: var(--system-orange);\r\n  color: #171717;\r\n  font-size: 16px;\r\n  font-weight: 900;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.account-info[_ngcontent-%COMP%] {\r\n  min-width: 0;\r\n}\r\n\r\n.account-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \r\n.account-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  display: block;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.account-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n\r\n.account-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  color: #9298a2;\r\n  font-size: 10px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.logout[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: #22262d;\r\n  border: 1px solid #353a42;\r\n  border-radius: 9px;\r\n  padding: 12px 13px;\r\n  color: #d5d8de;\r\n  font: inherit;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n}\r\n\r\n.logout[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n  border-color: var(--system-orange);\r\n}\r\n\r\n.dashboard-main[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.dashboard-topbar[_ngcontent-%COMP%] {\r\n  height: 84px;\r\n  padding: 0 36px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background: #fff;\r\n  border-bottom: 1px solid #e8eaed;\r\n}\r\n\r\n.topbar-left[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 14px;\r\n}\r\n\r\n.topbar-left[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 5px;\r\n  font-size: 15px;\r\n  font-weight: 850;\r\n}\r\n\r\n.topbar-overline[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 9px;\r\n  letter-spacing: 0.12em;\r\n  font-weight: 800;\r\n  color: #939aa5;\r\n}\r\n\r\n.topbar-right[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 9px;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  color: #606976;\r\n}\r\n\r\n.online-dot[_ngcontent-%COMP%] {\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50%;\r\n  background: #2eb879;\r\n}\r\n\r\n.dashboard-content[_ngcontent-%COMP%] {\r\n  max-width: 1600px;\r\n  margin: 0 auto;\r\n  padding: 36px;\r\n}\r\n\r\n.menu-toggle[_ngcontent-%COMP%], \r\n.mobile-backdrop[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .sidebar[_ngcontent-%COMP%] {\r\n    width: 235px;\r\n    flex-basis: 235px;\r\n  }\r\n\r\n  .dashboard-content[_ngcontent-%COMP%] {\r\n    padding: 26px;\r\n  }\r\n\r\n  .dashboard-topbar[_ngcontent-%COMP%] {\r\n    padding: 0 26px;\r\n  }\r\n}\r\n\r\n@media (max-width: 760px) {\r\n  .sidebar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 275px;\r\n    height: 100dvh;\r\n    transform: translateX(-100%);\r\n    transition: transform 0.25s ease;\r\n  }\r\n\r\n  .sidebar.open[_ngcontent-%COMP%] {\r\n    transform: translateX(0);\r\n  }\r\n\r\n  .mobile-backdrop[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: fixed;\r\n    inset: 0;\r\n    background: #0009;\r\n    border: 0;\r\n    z-index: 35;\r\n  }\r\n\r\n  .menu-toggle[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    place-items: center;\r\n    width: 38px;\r\n    height: 38px;\r\n    background: #f0f1f3;\r\n    border: 1px solid #e2e4e8;\r\n    border-radius: 8px;\r\n    color: #222;\r\n    font-size: 19px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .dashboard-topbar[_ngcontent-%COMP%] {\r\n    height: 72px;\r\n    padding: 0 16px;\r\n  }\r\n\r\n  .dashboard-content[_ngcontent-%COMP%] {\r\n    padding: 22px 16px 45px;\r\n  }\r\n\r\n  .topbar-right[_ngcontent-%COMP%] {\r\n    font-size: 0;\r\n  }\r\n\r\n  .online-dot[_ngcontent-%COMP%] {\r\n    width: 9px;\r\n    height: 9px;\r\n  }\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  .sidebar[_ngcontent-%COMP%], \r\n   .sidebar-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    transition: none;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardLayoutComponent, [{
        type: Component,
        args: [{ selector: "app-dashboard-layout", standalone: true, template: "<div class=\"dashboard-layout\">\r\n\r\n    @if (mobileOpen()) {\r\n    <button class=\"mobile-backdrop\" type=\"button\" aria-label=\"Fechar menu\" (click)=\"mobileOpen.set(false)\">\r\n    </button>\r\n    }\r\n\r\n    <aside class=\"sidebar\" [class.open]=\"mobileOpen()\">\r\n\r\n        <div class=\"sidebar-brand\">\r\n            <img src=\"images/logo-sexta-marcha.png\" alt=\"Sexta Marcha\" />\r\n            <span>\r\n                {{ isMaster ? 'ADMINISTRA\u00C7\u00C3O' : 'PORTAL COMERCIAL' }}\r\n            </span>\r\n        </div>\r\n\r\n        <div class=\"sidebar-label\">MENU PRINCIPAL</div>\r\n\r\n        <nav class=\"sidebar-nav\" aria-label=\"Navega\u00E7\u00E3o do sistema\">\r\n\r\n            <button type=\"button\" [class.selected]=\"active === 'overview'\" (click)=\"navigate('overview')\">\r\n                <span class=\"nav-icon\">\u25A6</span>\r\n                Vis\u00E3o geral\r\n            </button>\r\n\r\n            @if (isMaster) {\r\n\r\n            <button type=\"button\" [class.selected]=\"active === 'partners'\" (click)=\"navigate('partners')\">\r\n                <span class=\"nav-icon\">\u2667</span>\r\n                Despachantes\r\n            </button>\r\n\r\n            } @else {\r\n\r\n            <button type=\"button\" [class.selected]=\"active === 'new-sale'\" (click)=\"navigate('new-sale')\">\r\n                <span class=\"nav-icon\">\uFF0B</span>\r\n                Nova venda\r\n            </button>\r\n\r\n            <button type=\"button\" [class.selected]=\"active === 'customers'\" (click)=\"navigate('customers')\">\r\n                <span class=\"nav-icon\">\u2667</span>\r\n                Clientes\r\n            </button>\r\n\r\n            }\r\n\r\n            <button type=\"button\" [class.selected]=\"active === 'courses'\" (click)=\"navigate('courses')\">\r\n                <span class=\"nav-icon\">\u25A4</span>\r\n                Cursos de tr\u00E2nsito\r\n            </button>\r\n\r\n            <button type=\"button\" [class.selected]=\"active === 'sales'\" (click)=\"navigate('sales')\">\r\n                <span class=\"nav-icon\">\u25A5</span>\r\n                {{ isMaster ? 'Todas as vendas' : 'Minhas vendas' }}\r\n            </button>\r\n\r\n            <button type=\"button\" [class.selected]=\"active === 'commissions'\" (click)=\"navigate('commissions')\">\r\n                <span class=\"nav-icon\">\u25C8</span>\r\n                Comiss\u00F5es\r\n            </button>\r\n\r\n            @if (!isMaster) {\r\n            <div class=\"sidebar-label secondary-label\">\r\n                MINHA CONTA\r\n            </div>\r\n\r\n            <button type=\"button\" [class.selected]=\"active === 'business'\" (click)=\"navigate('business')\">\r\n                <span class=\"nav-icon\">\u2699</span>\r\n                Meu estabelecimento\r\n            </button>\r\n            }\r\n\r\n        </nav>\r\n\r\n        <div class=\"sidebar-bottom\">\r\n            <div class=\"account\">\r\n                <div class=\"avatar\">\r\n                    {{ (name || 'S').charAt(0).toUpperCase() }}\r\n                </div>\r\n                <div class=\"account-info\">\r\n                    <strong>{{ name || 'Sexta Marcha' }}</strong>\r\n                    <small>{{ business || 'Administra\u00E7\u00E3o' }}</small>\r\n                </div>\r\n            </div>\r\n\r\n            <button class=\"logout\" type=\"button\" (click)=\"signOut()\">\r\n                Sair do sistema\r\n                <span>\u2197</span>\r\n            </button>\r\n        </div>\r\n\r\n    </aside>\r\n\r\n    <div class=\"dashboard-main\">\r\n\r\n        <header class=\"dashboard-topbar\">\r\n            <div class=\"topbar-left\">\r\n                <button class=\"menu-toggle\" type=\"button\" aria-label=\"Abrir menu\" [attr.aria-expanded]=\"mobileOpen()\"\r\n                    (click)=\"mobileOpen.set(!mobileOpen())\">\r\n                    \u2630\r\n                </button>\r\n\r\n                <div>\r\n                    <span class=\"topbar-overline\">\r\n                        SEXTA MARCHA / {{ isMaster ? 'MASTER' : 'PARCEIRO' }}\r\n                    </span>\r\n                    <strong>\r\n                        {{ isMaster ? 'Central administrativa' : 'Central de neg\u00F3cios' }}\r\n                    </strong>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"topbar-right\">\r\n                <span class=\"online-dot\"></span>\r\n                {{ isMaster ? 'Administrador' : 'Parceiro ativo' }}\r\n            </div>\r\n        </header>\r\n\r\n        <main class=\"dashboard-content\">\r\n            <ng-content></ng-content>\r\n        </main>\r\n\r\n    </div>\r\n\r\n</div>", styles: [":host {\r\n  display: block;\r\n  --system-orange: var(--brand-orange, #f47721);\r\n  --system-bg: #f5f6f8;\r\n  --system-text: #1b2028;\r\n  --system-muted: #7c8490;\r\n  font-family: inherit;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.dashboard-layout {\r\n  display: flex;\r\n  min-height: 100vh;\r\n  background: var(--system-bg);\r\n  color: var(--system-text);\r\n}\r\n\r\n.sidebar {\r\n  width: 264px;\r\n  flex: 0 0 264px;\r\n  background: #15181d;\r\n  color: #f5f5f5;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  position: sticky;\r\n  top: 0;\r\n  height: 100vh;\r\n  z-index: 40;\r\n  border-right: 1px solid #282c33;\r\n}\r\n\r\n.sidebar-brand {\r\n  padding: 30px 25px 32px;\r\n  border-bottom: 1px solid #292c32;\r\n}\r\n\r\n.sidebar-brand img {\r\n  display: block;\r\n  width: 160px;\r\n  max-height: 65px;\r\n  object-fit: contain;\r\n  object-position: left center;\r\n}\r\n\r\n.sidebar-brand span {\r\n  display: block;\r\n  margin-top: 12px;\r\n  font-size: 9px;\r\n  letter-spacing: 0.18em;\r\n  color: #9298a2;\r\n  font-weight: 800;\r\n}\r\n\r\n.sidebar-label {\r\n  font-size: 10px;\r\n  font-weight: 800;\r\n  letter-spacing: 0.12em;\r\n  color: #777e89;\r\n  padding: 30px 25px 13px;\r\n}\r\n\r\n.secondary-label {\r\n  padding-top: 35px;\r\n}\r\n\r\n.sidebar-nav {\r\n  padding: 0 12px;\r\n  flex: 1;\r\n  overflow-y: auto;\r\n}\r\n\r\n.sidebar-nav button {\r\n  width: 100%;\r\n  min-height: 46px;\r\n  border: 0;\r\n  background: transparent;\r\n  color: #aeb4be;\r\n  text-align: left;\r\n  border-radius: 9px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 13px;\r\n  padding: 11px 13px;\r\n  margin-bottom: 5px;\r\n  font: inherit;\r\n  font-size: 13px;\r\n  font-weight: 650;\r\n  cursor: pointer;\r\n  transition:\r\n    background 0.2s,\r\n    color 0.2s;\r\n}\r\n\r\n.sidebar-nav button:hover {\r\n  background: #242930;\r\n  color: #fff;\r\n}\r\n\r\n.sidebar-nav button.selected {\r\n  background: color-mix(in srgb, var(--system-orange) 13%, #1c2026);\r\n  color: var(--system-orange);\r\n  box-shadow: inset 3px 0 var(--system-orange);\r\n}\r\n\r\n.nav-icon {\r\n  width: 22px;\r\n  text-align: center;\r\n  font-size: 19px;\r\n  line-height: 1;\r\n  font-weight: 500;\r\n}\r\n\r\n.sidebar-bottom {\r\n  padding: 18px 16px 22px;\r\n  border-top: 1px solid #292c32;\r\n}\r\n\r\n.account {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 11px;\r\n  padding: 6px 5px 17px;\r\n}\r\n\r\n.avatar {\r\n  width: 38px;\r\n  height: 38px;\r\n  border-radius: 11px;\r\n  display: grid;\r\n  place-items: center;\r\n  background: var(--system-orange);\r\n  color: #171717;\r\n  font-size: 16px;\r\n  font-weight: 900;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.account-info {\r\n  min-width: 0;\r\n}\r\n\r\n.account-info strong,\r\n.account-info small {\r\n  display: block;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.account-info strong {\r\n  font-size: 12px;\r\n}\r\n\r\n.account-info small {\r\n  color: #9298a2;\r\n  font-size: 10px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.logout {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: #22262d;\r\n  border: 1px solid #353a42;\r\n  border-radius: 9px;\r\n  padding: 12px 13px;\r\n  color: #d5d8de;\r\n  font: inherit;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n}\r\n\r\n.logout:hover {\r\n  color: white;\r\n  border-color: var(--system-orange);\r\n}\r\n\r\n.dashboard-main {\r\n  flex: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.dashboard-topbar {\r\n  height: 84px;\r\n  padding: 0 36px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background: #fff;\r\n  border-bottom: 1px solid #e8eaed;\r\n}\r\n\r\n.topbar-left {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 14px;\r\n}\r\n\r\n.topbar-left strong {\r\n  display: block;\r\n  margin-top: 5px;\r\n  font-size: 15px;\r\n  font-weight: 850;\r\n}\r\n\r\n.topbar-overline {\r\n  display: block;\r\n  font-size: 9px;\r\n  letter-spacing: 0.12em;\r\n  font-weight: 800;\r\n  color: #939aa5;\r\n}\r\n\r\n.topbar-right {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 9px;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  color: #606976;\r\n}\r\n\r\n.online-dot {\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50%;\r\n  background: #2eb879;\r\n}\r\n\r\n.dashboard-content {\r\n  max-width: 1600px;\r\n  margin: 0 auto;\r\n  padding: 36px;\r\n}\r\n\r\n.menu-toggle,\r\n.mobile-backdrop {\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .sidebar {\r\n    width: 235px;\r\n    flex-basis: 235px;\r\n  }\r\n\r\n  .dashboard-content {\r\n    padding: 26px;\r\n  }\r\n\r\n  .dashboard-topbar {\r\n    padding: 0 26px;\r\n  }\r\n}\r\n\r\n@media (max-width: 760px) {\r\n  .sidebar {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 275px;\r\n    height: 100dvh;\r\n    transform: translateX(-100%);\r\n    transition: transform 0.25s ease;\r\n  }\r\n\r\n  .sidebar.open {\r\n    transform: translateX(0);\r\n  }\r\n\r\n  .mobile-backdrop {\r\n    display: block;\r\n    position: fixed;\r\n    inset: 0;\r\n    background: #0009;\r\n    border: 0;\r\n    z-index: 35;\r\n  }\r\n\r\n  .menu-toggle {\r\n    display: grid;\r\n    place-items: center;\r\n    width: 38px;\r\n    height: 38px;\r\n    background: #f0f1f3;\r\n    border: 1px solid #e2e4e8;\r\n    border-radius: 8px;\r\n    color: #222;\r\n    font-size: 19px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .dashboard-topbar {\r\n    height: 72px;\r\n    padding: 0 16px;\r\n  }\r\n\r\n  .dashboard-content {\r\n    padding: 22px 16px 45px;\r\n  }\r\n\r\n  .topbar-right {\r\n    font-size: 0;\r\n  }\r\n\r\n  .online-dot {\r\n    width: 9px;\r\n    height: 9px;\r\n  }\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  .sidebar,\r\n  .sidebar-nav button {\r\n    transition: none;\r\n  }\r\n}\r\n"] }]
    }], null, { mode: [{
            type: Input
        }], active: [{
            type: Input
        }], name: [{
            type: Input
        }], business: [{
            type: Input
        }], sectionChange: [{
            type: Output
        }], logout: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardLayoutComponent, { className: "DashboardLayoutComponent", filePath: "src/app/layouts/dashboard/dashboard-layout.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=dashboard-layout.component.js.map