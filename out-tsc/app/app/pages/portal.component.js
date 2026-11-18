import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CurrencyPipe, DecimalPipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { CommercialService } from "../core/commercial.service";
import { courses } from "../data/courses";
import { DashboardLayoutComponent, } from "../layouts/dashboard/dashboard-layout.component";
import { CourseOrdersService, } from "../core/course-orders.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => ["A", "B", "AB", "C", "D", "E", "AC", "AD", "AE"];
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.number;
function PortalComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "main", 1)(1, "section", 3)(2, "div", 4);
    i0.ɵɵtext(3, "SEXTA MARCHA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Preparando seu acesso...");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Aguarde enquanto verificamos suas credenciais.");
    i0.ɵɵelementEnd()()();
} }
function PortalComponent_Conditional_1_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.error(), " ");
} }
function PortalComponent_Conditional_1_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.notice(), " ");
} }
function PortalComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "main", 1)(1, "section", 3);
    i0.ɵɵelement(2, "img", 5);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵtext(4, "PORTAL COMERCIAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h1");
    i0.ɵɵtext(6, "Bem-vindo de volta");
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10, "Acesse sua conta para gerenciar seus neg\u00F3cios.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "form", 6);
    i0.ɵɵlistener("ngSubmit", function PortalComponent_Conditional_1_Template_form_ngSubmit_11_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.login()); });
    i0.ɵɵelementStart(12, "label");
    i0.ɵɵtext(13, " E-MAIL ");
    i0.ɵɵelementStart(14, "input", 7);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_1_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "label");
    i0.ɵɵtext(16, " SENHA ");
    i0.ɵɵelementStart(17, "input", 8);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_1_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "button", 9);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "button", 10);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_1_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.reset()); });
    i0.ɵɵtext(21, " Esqueci minha senha ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "p", 11);
    i0.ɵɵtext(23, " Ainda n\u00E3o \u00E9 parceiro? ");
    i0.ɵɵelementStart(24, "a", 12);
    i0.ɵɵtext(25, "Cadastre-se");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(26, PortalComponent_Conditional_1_Conditional_26_Template, 2, 1, "p", 13);
    i0.ɵɵconditionalCreate(27, PortalComponent_Conditional_1_Conditional_27_Template, 2, 1, "p", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.email);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.password);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.busy() ? "Entrando..." : "Acessar plataforma \u2192", " ");
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ctx_r1.error() ? 26 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.notice() ? 27 : -1);
} }
function PortalComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "main", 1)(1, "section", 3)(2, "div", 4);
    i0.ɵɵtext(3, "ACESSO ADMINISTRATIVO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Ol\u00E1, administrador");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, "Sua conta possui permiss\u00E3o de gest\u00E3o.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 15);
    i0.ɵɵtext(11, " Abrir painel Master \u2192 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 10);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_2_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(13, " Sair da conta ");
    i0.ɵɵelementEnd()()();
} }
function PortalComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "main", 1)(1, "section", 3)(2, "div", 4);
    i0.ɵɵtext(3, "CADASTRO DE PARCEIRO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Acesso em an\u00E1lise");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 16);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 17);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_3_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.service.reloadProfile()); });
    i0.ɵɵtext(13, " Atualizar situa\u00E7\u00E3o ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 10);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_3_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(15, " Sair da conta ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" Ol\u00E1, ", ((tmp_1_0 = ctx_r1.service.profile()) == null ? null : tmp_1_0.name) || ((tmp_1_0 = ctx_r1.service.user()) == null ? null : tmp_1_0.email), ". Seu cadastro precisa ser aprovado antes de liberar as funcionalidades comerciais. ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Status: ", ((tmp_2_0 = ctx_r1.service.profile()) == null ? null : tmp_2_0.status) || "N\u00E3o localizado", " ");
} }
function PortalComponent_Conditional_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "div")(2, "div", 4);
    i0.ɵɵtext(3, "VIS\u00C3O GERAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Seu neg\u00F3cio em movimento");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, " Acompanhe sua opera\u00E7\u00E3o comercial em um s\u00F3 lugar. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 20);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_1_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.refresh()); });
    i0.ɵɵtext(11, " Atualizar dados \u21BB ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "section", 21)(13, "div")(14, "span", 22);
    i0.ɵɵtext(15, " PARCEIRO SEXTA MARCHA ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "h2");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "p");
    i0.ɵɵtext(19, " Sua central de vendas est\u00E1 pronta. Explore os cursos de tr\u00E2nsito dispon\u00EDveis e amplie suas oportunidades comerciais. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 23);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_1_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectSection("courses")); });
    i0.ɵɵtext(21, " Explorar cursos \u2192 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 24);
    i0.ɵɵtext(23, " 6 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "section", 25)(25, "article", 26)(26, "span");
    i0.ɵɵtext(27, "Vendas confirmadas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "strong");
    i0.ɵɵtext(29);
    i0.ɵɵpipe(30, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "small");
    i0.ɵɵtext(32, "Pagamentos reais confirmados");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "article", 26)(34, "span");
    i0.ɵɵtext(35, "Faturamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "strong");
    i0.ɵɵtext(37);
    i0.ɵɵpipe(38, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "small");
    i0.ɵɵtext(40, "Total das vendas reais pagas");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "article", 26)(42, "span");
    i0.ɵɵtext(43, "Comiss\u00F5es registradas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "strong");
    i0.ɵɵtext(45);
    i0.ɵɵpipe(46, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "small");
    i0.ɵɵtext(48, "Sobre vendas reais confirmadas");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(49, "section", 27)(50, "article", 28)(51, "div", 29)(52, "div")(53, "div", 4);
    i0.ɵɵtext(54, "OPERA\u00C7\u00C3O COMERCIAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "h2");
    i0.ɵɵtext(56, "Comece por aqui");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(57, "div", 30)(58, "div", 31);
    i0.ɵɵtext(59, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "div")(61, "strong");
    i0.ɵɵtext(62, "Conhe\u00E7a o cat\u00E1logo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "p");
    i0.ɵɵtext(64, "Veja os cursos que poder\u00E1 oferecer.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(65, "button", 32);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_1_Template_button_click_65_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectSection("courses")); });
    i0.ɵɵtext(66, " \u2192 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(67, "div", 30)(68, "div", 31);
    i0.ɵɵtext(69, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "div")(71, "strong");
    i0.ɵɵtext(72, "Inicie uma venda");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "p");
    i0.ɵɵtext(74, "Conhe\u00E7a a jornada comercial.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(75, "button", 33);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_1_Template_button_click_75_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startNewSale()); });
    i0.ɵɵtext(76, " \u2192 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(77, "div", 30)(78, "div", 31);
    i0.ɵɵtext(79, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "div")(81, "strong");
    i0.ɵɵtext(82, "Acompanhe resultados");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "p");
    i0.ɵɵtext(84, "Consulte suas vendas registradas.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(85, "button", 34);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_1_Template_button_click_85_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectSection("sales")); });
    i0.ɵɵtext(86, " \u2192 ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(87, "article", 28)(88, "div", 4);
    i0.ɵɵtext(89, "MEU ESTABELECIMENTO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(90, "h2");
    i0.ɵɵtext(91);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "span", 35);
    i0.ɵɵtext(93, " \u25CF Parceiro ativo ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(94, "div", 36)(95, "div")(96, "span");
    i0.ɵɵtext(97, "Respons\u00E1vel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(98, "strong");
    i0.ɵɵtext(99);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(100, "div")(101, "span");
    i0.ɵɵtext(102, "Localiza\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(103, "strong");
    i0.ɵɵtext(104);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(105, "div")(106, "span");
    i0.ɵɵtext(107, "CRDD");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(108, "strong");
    i0.ɵɵtext(109);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(110, "button", 37);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_1_Template_button_click_110_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectSection("business")); });
    i0.ɵɵtext(111, " Ver meu cadastro ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(17);
    i0.ɵɵtextInterpolate1("Ol\u00E1, ", (tmp_2_0 = ctx_r1.service.profile()) == null ? null : tmp_2_0.name, "!");
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(30, 8, ctx_r1.count));
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(38, 10, ctx_r1.revenue, "BRL"));
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(46, 13, ctx_r1.commission, "BRL"));
    i0.ɵɵadvance(46);
    i0.ɵɵtextInterpolate((tmp_6_0 = ctx_r1.service.profile()) == null ? null : tmp_6_0.business);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate((tmp_7_0 = ctx_r1.service.profile()) == null ? null : tmp_7_0.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((tmp_8_0 = ctx_r1.service.profile()) == null ? null : tmp_8_0.city);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((tmp_9_0 = ctx_r1.service.profile()) == null ? null : tmp_9_0.crdd);
} }
function PortalComponent_Conditional_4_Conditional_2_For_29_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_2_For_29_Template_button_click_0_listener() { const category_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.categoryFilter.set(category_r9)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r9 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("is-active", ctx_r1.categoryFilter() === category_r9);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", category_r9, " ");
} }
function PortalComponent_Conditional_4_Conditional_2_For_32_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", course_r11.hours, " horas-aula ");
} }
function PortalComponent_Conditional_4_Conditional_2_For_32_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 47)(1, "div", 49);
    i0.ɵɵelement(2, "img", 50);
    i0.ɵɵelementStart(3, "span", 51);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 52)(6, "div", 53);
    i0.ɵɵconditionalCreate(7, PortalComponent_Conditional_4_Conditional_2_For_32_Conditional_7_Template, 2, 1, "span");
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "h2");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 54)(15, "strong");
    i0.ɵɵtext(16, "INDICADO PARA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "button", 37);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_2_For_32_Template_button_click_19_listener() { const course_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openCourse(course_r11)); });
    i0.ɵɵtext(20, " Conhecer curso \u2192 ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const course_r11 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", course_r11.image, i0.ɵɵsanitizeUrl)("alt", course_r11.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", course_r11.category, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(course_r11.hours ? 7 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", course_r11.offers.length ? "Homologa\u00E7\u00E3o dispon\u00EDvel" : "Em prepara\u00E7\u00E3o", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(course_r11.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(course_r11.description);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(course_r11.audience);
} }
function PortalComponent_Conditional_4_Conditional_2_ForEmpty_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1, " Nenhum curso encontrado. ");
    i0.ɵɵelementEnd();
} }
function PortalComponent_Conditional_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "div")(2, "div", 4);
    i0.ɵɵtext(3, "EDUCA\u00C7\u00C3O NO TR\u00C2NSITO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Cat\u00E1logo de cursos");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, " Explore nossas solu\u00E7\u00F5es de educa\u00E7\u00E3o e encontre novas oportunidades para seus clientes. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "section", 38)(11, "div")(12, "span", 39);
    i0.ɵɵtext(13, " SEXTA MARCHA / EDUCA\u00C7\u00C3O ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "h2");
    i0.ɵɵtext(15, " Mais oportunidades para quem vive o tr\u00E2nsito. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p");
    i0.ɵɵtext(17, " Conhe\u00E7a os cursos, oriente seus clientes e acompanhe suas vendas em uma \u00FAnica plataforma. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 23);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_2_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startNewSale()); });
    i0.ɵɵtext(19, " Como funciona a venda \u2192 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "span", 40);
    i0.ɵɵtext(21, " 6 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 41)(23, "label", 42)(24, "span");
    i0.ɵɵtext(25, "ENCONTRE UM CURSO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "input", 43);
    i0.ɵɵlistener("ngModelChange", function PortalComponent_Conditional_4_Conditional_2_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.courseSearch.set($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 44);
    i0.ɵɵrepeaterCreate(28, PortalComponent_Conditional_4_Conditional_2_For_29_Template, 2, 3, "button", 45, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "section", 46);
    i0.ɵɵrepeaterCreate(31, PortalComponent_Conditional_4_Conditional_2_For_32_Template, 21, 8, "article", 47, _forTrack0, false, PortalComponent_Conditional_4_Conditional_2_ForEmpty_33_Template, 2, 0, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(26);
    i0.ɵɵproperty("ngModel", ctx_r1.courseSearch());
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.categories);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.filteredCourses);
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_12_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60)(1, "div", 62);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const step_r14 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", step_r14.number, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(step_r14.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r14.description);
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 55)(1, "div", 4);
    i0.ɵɵtext(2, "GUIA DO PARCEIRO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Como funciona uma venda?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 58);
    i0.ɵɵtext(6, " Voc\u00EA identifica a necessidade do cliente, registra o pedido e acompanha a opera\u00E7\u00E3o. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 59);
    i0.ɵɵrepeaterCreate(8, PortalComponent_Conditional_4_Conditional_3_Conditional_12_For_9_Template, 8, 3, "div", 60, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 61);
    i0.ɵɵtext(11, " A matr\u00EDcula depende da confirma\u00E7\u00E3o do pagamento e da aceita\u00E7\u00E3o pela institui\u00E7\u00E3o respons\u00E1vel. Durante a homologa\u00E7\u00E3o, os pagamentos s\u00E3o simulados. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 23);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_3_Conditional_12_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openCatalog()); });
    i0.ɵɵtext(13, " Escolher um curso \u2192 ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.saleTimeline);
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "strong");
    i0.ɵɵtext(2, "Carga hor\u00E1ria:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", course_r16.hours, " horas-aula ");
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", course_r16.notes, " ");
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const benefit_r17 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(benefit_r17);
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_For_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const requirement_r18 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(requirement_r18);
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1, "Reciclagem \u2014 Santa Catarina");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "strong", 71);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 58);
    i0.ɵɵtext(6, " Oferta exclusiva de homologa\u00E7\u00E3o. Nenhuma cobran\u00E7a real ser\u00E1 realizada. ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(4, 1, ctx_r1.selectedPrice, "BRL"), " ");
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1, "Oferta em prepara\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 58);
    i0.ɵɵtext(3, " Estamos aguardando a confirma\u00E7\u00E3o de pre\u00E7o, disponibilidade e condi\u00E7\u00F5es comerciais. ");
    i0.ɵɵelementEnd();
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.orderError(), " ");
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 63)(1, "div", 4);
    i0.ɵɵtext(2, " INFORMA\u00C7\u00D5ES DO CURSO ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 64)(4, "div", 65);
    i0.ɵɵelement(5, "img", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div")(7, "span", 67);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p")(14, "strong");
    i0.ɵɵtext(15, "P\u00FAblico-alvo:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(17, PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_Conditional_17_Template, 4, 1, "p");
    i0.ɵɵconditionalCreate(18, PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_Conditional_18_Template, 2, 1, "p", 58);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 68)(20, "div")(21, "h3");
    i0.ɵɵtext(22, "O que o aluno encontrar\u00E1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "ul");
    i0.ɵɵrepeaterCreate(24, PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_For_25_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div")(27, "h3");
    i0.ɵɵtext(28, "Antes de iniciar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "ul");
    i0.ɵɵrepeaterCreate(30, PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_For_31_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "div", 69)(33, "div")(34, "div", 4);
    i0.ɵɵtext(35, " DISPONIBILIDADE COMERCIAL ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(36, PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_Conditional_36_Template, 7, 4)(37, PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_Conditional_37_Template, 4, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "button", 70);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.continueToStudent()); });
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(40, PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_Conditional_40_Template, 2, 1, "p", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r16 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("src", course_r16.image, i0.ɵɵsanitizeUrl)("alt", course_r16.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", course_r16.category, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(course_r16.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(course_r16.description);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", course_r16.audience, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(course_r16.hours ? 17 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(course_r16.notes ? 18 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(course_r16.benefits);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(course_r16.requirements);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.canCreateTestOrder ? 36 : 37);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.canCreateTestOrder);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.canCreateTestOrder ? "Iniciar cadastro \u2192" : "Indispon\u00EDvel para venda", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.orderError() ? 40 : -1);
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, PortalComponent_Conditional_4_Conditional_3_Conditional_13_Conditional_0_Template, 41, 12, "section", 63);
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵconditional((tmp_3_0 = ctx_r1.selectedCourse()) ? 0 : -1, tmp_3_0);
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_14_For_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 83);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r20 = ctx.$implicit;
    i0.ɵɵproperty("value", cat_r20);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", cat_r20, " ");
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Conditional_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.orderError(), " ");
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 72)(1, "span");
    i0.ɵɵtext(2, "ETAPA 01 / CADASTRO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 20);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.backToDetails()); });
    i0.ɵɵtext(4, " \u2190 Voltar ao curso ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "form", 73, 0);
    i0.ɵɵlistener("ngSubmit", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_form_ngSubmit_5_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.continueToReview()); });
    i0.ɵɵelementStart(7, "div", 4);
    i0.ɵɵtext(8, " 01 / IDENTIFICA\u00C7\u00C3O ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2");
    i0.ɵɵtext(10, "Dados do aluno");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 74)(12, "label", 75);
    i0.ɵɵtext(13, " Nome completo ");
    i0.ɵɵelementStart(14, "input", 76);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.fullName, $event) || (ctx_r1.student.fullName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "label");
    i0.ɵɵtext(16, " CPF ");
    i0.ɵɵelementStart(17, "input", 77);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.document, $event) || (ctx_r1.student.document = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "label");
    i0.ɵɵtext(19, " Data de nascimento ");
    i0.ɵɵelementStart(20, "input", 78);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.dateOfBirth, $event) || (ctx_r1.student.dateOfBirth = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "label");
    i0.ɵɵtext(22, " E-mail ");
    i0.ɵɵelementStart(23, "input", 79);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.email, $event) || (ctx_r1.student.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "label");
    i0.ɵɵtext(25, " WhatsApp ");
    i0.ɵɵelementStart(26, "input", 80);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.phone, $event) || (ctx_r1.student.phone = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 4);
    i0.ɵɵtext(28, " 02 / HABILITA\u00C7\u00C3O ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "h2");
    i0.ɵɵtext(30, "Dados da CNH");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 74)(32, "label");
    i0.ɵɵtext(33, " N\u00FAmero de registro da CNH ");
    i0.ɵɵelementStart(34, "input", 81);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_34_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.cnh, $event) || (ctx_r1.student.cnh = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "label");
    i0.ɵɵtext(36, " Categoria ");
    i0.ɵɵelementStart(37, "select", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_select_ngModelChange_37_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.cnhCategory, $event) || (ctx_r1.student.cnhCategory = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(38, PortalComponent_Conditional_4_Conditional_3_Conditional_14_For_39_Template, 2, 2, "option", 83, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(40, "div", 4);
    i0.ɵɵtext(41, " 03 / ENDERE\u00C7O ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "h2");
    i0.ɵɵtext(43, "Endere\u00E7o do aluno");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "div", 74)(45, "label");
    i0.ɵɵtext(46, " CEP ");
    i0.ɵɵelementStart(47, "input", 84);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_47_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.address.zipCode, $event) || (ctx_r1.student.address.zipCode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "label");
    i0.ɵɵtext(49, " Estado (UF) ");
    i0.ɵɵelementStart(50, "input", 85);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_50_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.address.state, $event) || (ctx_r1.student.address.state = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "label", 75);
    i0.ɵɵtext(52, " Logradouro ");
    i0.ɵɵelementStart(53, "input", 86);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_53_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.address.street, $event) || (ctx_r1.student.address.street = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "label");
    i0.ɵɵtext(55, " N\u00FAmero ");
    i0.ɵɵelementStart(56, "input", 87);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_56_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.address.number, $event) || (ctx_r1.student.address.number = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "label");
    i0.ɵɵtext(58, " Complemento ");
    i0.ɵɵelementStart(59, "input", 88);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_59_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.address.complement, $event) || (ctx_r1.student.address.complement = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(60, "label");
    i0.ɵɵtext(61, " Bairro ");
    i0.ɵɵelementStart(62, "input", 89);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_62_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.address.district, $event) || (ctx_r1.student.address.district = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(63, "label");
    i0.ɵɵtext(64, " Cidade ");
    i0.ɵɵelementStart(65, "input", 90);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_65_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.student.address.city, $event) || (ctx_r1.student.address.city = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(66, "label", 91)(67, "input", 92);
    i0.ɵɵtwoWayListener("ngModelChange", function PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template_input_ngModelChange_67_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.orderConsent, $event) || (ctx_r1.orderConsent = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(68, " Confirmo que estou utilizando dados fict\u00EDcios autorizados para homologa\u00E7\u00E3o. ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(69, PortalComponent_Conditional_4_Conditional_3_Conditional_14_Conditional_69_Template, 2, 1, "p", 13);
    i0.ɵɵelementStart(70, "button", 93);
    i0.ɵɵtext(71, " Revisar pedido \u2192 ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const studentForm_r21 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.fullName);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.document);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.dateOfBirth);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.email);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.phone);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.cnh);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.cnhCategory);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(17, _c0));
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.address.zipCode);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.address.state);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.address.street);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.address.number);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.address.complement);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.address.district);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.student.address.city);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.orderConsent);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.orderError() ? 69 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", studentForm_r21.invalid || !ctx_r1.orderConsent);
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_15_Conditional_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.orderError(), " ");
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 56)(1, "div", 4);
    i0.ɵɵtext(2, " ETAPA 02 / REVIS\u00C3O ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Confira antes de confirmar.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 58);
    i0.ɵɵtext(6, " Revise os dados e a oferta selecionada. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 94)(8, "div")(9, "span");
    i0.ɵɵtext(10, "Curso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div")(14, "span");
    i0.ɵɵtext(15, "Oferta");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div")(19, "span");
    i0.ɵɵtext(20, "Valor de homologa\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "strong");
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div")(25, "span");
    i0.ɵɵtext(26, "Aluno");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "strong");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div")(30, "span");
    i0.ɵɵtext(31, "CPF");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "strong");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div")(35, "span");
    i0.ɵɵtext(36, "E-mail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "strong");
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div")(40, "span");
    i0.ɵɵtext(41, "WhatsApp");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "strong");
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div")(45, "span");
    i0.ɵɵtext(46, "CNH");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "strong");
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "div")(50, "span");
    i0.ɵɵtext(51, "Categoria");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "strong");
    i0.ɵɵtext(53);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "div")(55, "span");
    i0.ɵɵtext(56, "Estado da oferta");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "strong");
    i0.ɵɵtext(58, "Santa Catarina");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(59, "div", 61);
    i0.ɵɵtext(60, " Este pedido ser\u00E1 criado no ambiente de testes. N\u00E3o haver\u00E1 cobran\u00E7a real nem envio ao ICETRAN. ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(61, PortalComponent_Conditional_4_Conditional_3_Conditional_15_Conditional_61_Template, 2, 1, "p", 13);
    i0.ɵɵelementStart(62, "div", 95)(63, "button", 96);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_3_Conditional_15_Template_button_click_63_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.backToStudent()); });
    i0.ɵɵtext(64, " \u2190 Corrigir dados ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "button", 70);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_3_Conditional_15_Template_button_click_65_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.submitCourseOrder()); });
    i0.ɵɵtext(66);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate1(" ", (tmp_3_0 = ctx_r1.selectedCourse()) == null ? null : tmp_3_0.title, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selectedOfferId);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(23, 13, ctx_r1.selectedPrice, "BRL"), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.student.fullName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.student.document);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.student.email);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.student.phone);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.student.cnh);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.student.cnhCategory);
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(ctx_r1.orderError() ? 61 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.orderBusy());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.orderBusy());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.orderBusy() ? "Criando pedido..." : "Confirmar pedido de teste \u2192", " ");
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_16_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 98)(1, "label", 99);
    i0.ɵɵtext(2, "LINK DE COMPRA DO CLIENTE");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 100);
    i0.ɵɵelementStart(4, "div", 95)(5, "button", 23);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_3_Conditional_16_Conditional_11_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.shareCheckout()); });
    i0.ɵɵtext(6, "Compartilhar no WhatsApp");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 20);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_3_Conditional_16_Conditional_11_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.copyCheckout()); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", ctx_r1.checkoutUrl());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.checkoutCopied() ? "Copiado!" : "Copiar link");
} }
function PortalComponent_Conditional_4_Conditional_3_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 57)(1, "div", 97);
    i0.ɵɵtext(2, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵtext(4, " PEDIDO REGISTRADO ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6, "Pedido criado com sucesso.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 58);
    i0.ɵɵtext(10, " O despachante concluiu o cadastro. Agora envie o link para o cliente finalizar a compra. A comiss\u00E3o s\u00F3 ser\u00E1 simulada ap\u00F3s a confirma\u00E7\u00E3o do pagamento na p\u00E1gina do cliente. ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(11, PortalComponent_Conditional_4_Conditional_3_Conditional_16_Conditional_11_Template, 9, 2, "div", 98);
    i0.ɵɵelementStart(12, "div", 95)(13, "button", 23);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_3_Conditional_16_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectSection("sales")); });
    i0.ɵɵtext(14, " Acompanhar pedido \u2192 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 20);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_3_Conditional_16_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.startNewSale()); });
    i0.ɵɵtext(16, " Nova venda ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.orderSuccess());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.checkoutUrl() ? 11 : -1);
} }
function PortalComponent_Conditional_4_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "div")(2, "div", 4);
    i0.ɵɵtext(3, "CENTRAL COMERCIAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Nova venda");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, " Uma jornada simples, do curso \u00E0 matr\u00EDcula. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 20);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_3_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openCatalog()); });
    i0.ɵɵtext(11, " Ver cat\u00E1logo ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(12, PortalComponent_Conditional_4_Conditional_3_Conditional_12_Template, 14, 0, "section", 55);
    i0.ɵɵconditionalCreate(13, PortalComponent_Conditional_4_Conditional_3_Conditional_13_Template, 1, 1);
    i0.ɵɵconditionalCreate(14, PortalComponent_Conditional_4_Conditional_3_Conditional_14_Template, 72, 18);
    i0.ɵɵconditionalCreate(15, PortalComponent_Conditional_4_Conditional_3_Conditional_15_Template, 67, 16, "section", 56);
    i0.ɵɵconditionalCreate(16, PortalComponent_Conditional_4_Conditional_3_Conditional_16_Template, 17, 2, "section", 57);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(12);
    i0.ɵɵconditional(ctx_r1.saleStep() === "guide" ? 12 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.saleStep() === "details" ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.saleStep() === "student" ? 14 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.saleStep() === "review" ? 15 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.saleStep() === "success" ? 16 : -1);
} }
function PortalComponent_Conditional_4_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "div")(2, "div", 4);
    i0.ɵɵtext(3, "RELACIONAMENTO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Meus clientes");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, " Acompanhe suas futuras indica\u00E7\u00F5es comerciais. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "section", 101)(11, "div", 102);
    i0.ɵɵtext(12, "\u2667");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "h2");
    i0.ɵɵtext(14, "Gest\u00E3o de clientes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p");
    i0.ɵɵtext(16, " Este m\u00F3dulo ser\u00E1 conectado aos clientes e \u00E0s indica\u00E7\u00F5es atribu\u00EDdas ao seu estabelecimento. ");
    i0.ɵɵelementEnd()();
} }
function PortalComponent_Conditional_4_Conditional_5_For_35_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 105);
    i0.ɵɵtext(1, " Teste \u00B7 pagamento simulado ");
    i0.ɵɵelementEnd();
} }
function PortalComponent_Conditional_4_Conditional_5_For_35_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 105);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sale_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", sale_r26.status, " ");
} }
function PortalComponent_Conditional_4_Conditional_5_For_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵconditionalCreate(10, PortalComponent_Conditional_4_Conditional_5_For_35_Conditional_10_Template, 2, 0, "span", 105)(11, PortalComponent_Conditional_4_Conditional_5_For_35_Conditional_11_Template, 2, 1, "span", 105);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sale_r26 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.courseName(sale_r26.courseId), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 4, sale_r26.amount, "BRL"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(8, 7, sale_r26.commissionAmount, "BRL"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(sale_r26.simulated === true || sale_r26.environment === "sandbox" ? 10 : 11);
} }
function PortalComponent_Conditional_4_Conditional_5_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 104);
    i0.ɵɵtext(1, " Nenhum pagamento registrado at\u00E9 o momento. ");
    i0.ɵɵelementEnd();
} }
function PortalComponent_Conditional_4_Conditional_5_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.orderError(), " ");
} }
function PortalComponent_Conditional_4_Conditional_5_For_67_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 105);
    i0.ɵɵtext(1, " Pago (simulado) ");
    i0.ɵɵelementEnd();
} }
function PortalComponent_Conditional_4_Conditional_5_For_67_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 105);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const order_r28 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", order_r28.paymentStatus, " ");
} }
function PortalComponent_Conditional_4_Conditional_5_For_67_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵconditionalCreate(9, PortalComponent_Conditional_4_Conditional_5_For_67_Conditional_9_Template, 2, 0, "span", 105)(10, PortalComponent_Conditional_4_Conditional_5_For_67_Conditional_10_Template, 2, 1, "span", 105);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td")(14, "button", 20);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_5_For_67_Template_button_click_14_listener() { const order_r28 = i0.ɵɵrestoreView(_r27).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.regenerateCheckout(order_r28.id)); });
    i0.ɵɵtext(15, "Gerar link");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const order_r28 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", order_r28.id.slice(0, 12), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", order_r28.courseTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(7, 5, order_r28.amountCents / 100, "BRL"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(order_r28.environment === "sandbox" && order_r28.paymentStatus === "paid" ? 9 : 10);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", order_r28.enrollmentStatus, " ");
} }
function PortalComponent_Conditional_4_Conditional_5_ForEmpty_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 106);
    i0.ɵɵtext(2, " Nenhum pedido de teste registrado. ");
    i0.ɵɵelementEnd()();
} }
function PortalComponent_Conditional_4_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "div")(2, "div", 4);
    i0.ɵɵtext(3, "HIST\u00D3RICO COMERCIAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Minhas vendas");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, " Consulte os pedidos e acompanhe os pagamentos da sua opera\u00E7\u00E3o. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 20);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_5_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.refresh(); return i0.ɵɵresetView(ctx_r1.refreshCourseOrders()); });
    i0.ɵɵtext(11, " Atualizar \u21BB ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "section", 28)(13, "div", 29)(14, "div")(15, "div", 4);
    i0.ɵɵtext(16, " RESULTADOS FINANCEIROS ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "h2");
    i0.ɵɵtext(18, "Vendas registradas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 58);
    i0.ɵɵtext(20, " Opera\u00E7\u00F5es simuladas s\u00E3o identificadas e n\u00E3o entram nos indicadores reais. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 103)(22, "table")(23, "thead")(24, "tr")(25, "th");
    i0.ɵɵtext(26, "Curso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th");
    i0.ɵɵtext(28, "Valor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "th");
    i0.ɵɵtext(30, "Comiss\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "th");
    i0.ɵɵtext(32, "Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "tbody");
    i0.ɵɵrepeaterCreate(34, PortalComponent_Conditional_4_Conditional_5_For_35_Template, 12, 10, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(36, PortalComponent_Conditional_4_Conditional_5_Conditional_36_Template, 2, 0, "div", 104);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "section", 28)(38, "div", 29)(39, "div")(40, "div", 4);
    i0.ɵɵtext(41, " HOMOLOGA\u00C7\u00C3O ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "h2");
    i0.ɵɵtext(43, "Pedidos de cursos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "p", 58);
    i0.ɵɵtext(45, " Acompanhe o pagamento e a matr\u00EDcula de cada pedido. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "button", 20);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_5_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.refreshCourseOrders()); });
    i0.ɵɵtext(47, " Atualizar pedidos ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(48, PortalComponent_Conditional_4_Conditional_5_Conditional_48_Template, 2, 1, "p", 13);
    i0.ɵɵelementStart(49, "div", 103)(50, "table")(51, "thead")(52, "tr")(53, "th");
    i0.ɵɵtext(54, "Pedido");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "th");
    i0.ɵɵtext(56, "Curso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "th");
    i0.ɵɵtext(58, "Valor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "th");
    i0.ɵɵtext(60, "Pagamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "th");
    i0.ɵɵtext(62, "Matr\u00EDcula");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "th");
    i0.ɵɵtext(64, "Link");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(65, "tbody");
    i0.ɵɵrepeaterCreate(66, PortalComponent_Conditional_4_Conditional_5_For_67_Template, 16, 8, "tr", null, _forTrack0, false, PortalComponent_Conditional_4_Conditional_5_ForEmpty_68_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(34);
    i0.ɵɵrepeater(ctx_r1.service.sales());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.service.sales().length ? 36 : -1);
    i0.ɵɵadvance(12);
    i0.ɵɵconditional(ctx_r1.orderError() ? 48 : -1);
    i0.ɵɵadvance(18);
    i0.ɵɵrepeater(ctx_r1.courseOrders.orders());
} }
function PortalComponent_Conditional_4_Conditional_6_For_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td")(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td")(11, "span", 107);
    i0.ɵɵtext(12, " Simulada ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const sale_r30 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.courseName(sale_r30.courseId), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 3, sale_r30.amount, "BRL"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(9, 6, sale_r30.commissionAmount, "BRL"), " ");
} }
function PortalComponent_Conditional_4_Conditional_6_ForEmpty_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 108);
    i0.ɵɵtext(2, " Nenhuma comiss\u00E3o simulada registrada. ");
    i0.ɵɵelementEnd()();
} }
function PortalComponent_Conditional_4_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "div")(2, "div", 4);
    i0.ɵɵtext(3, "FINANCEIRO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Minhas comiss\u00F5es");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, " Acompanhe suas comiss\u00F5es reais e opera\u00E7\u00F5es de homologa\u00E7\u00E3o. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 20);
    i0.ɵɵlistener("click", function PortalComponent_Conditional_4_Conditional_6_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.refresh()); });
    i0.ɵɵtext(11, " Atualizar \u21BB ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "section", 25)(13, "article", 26)(14, "span");
    i0.ɵɵtext(15, "Comiss\u00F5es reais");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "small");
    i0.ɵɵtext(20, " Somente vendas reais confirmadas ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "article", 26)(22, "span");
    i0.ɵɵtext(23, "Comiss\u00F5es simuladas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "strong");
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "small");
    i0.ɵɵtext(28, " Valores fict\u00EDcios de homologa\u00E7\u00E3o ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "article", 26)(30, "span");
    i0.ɵɵtext(31, "Vendas simuladas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "strong");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "small");
    i0.ɵɵtext(35, " Pagamentos de teste registrados ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "section", 28)(37, "div", 4);
    i0.ɵɵtext(38, " HOMOLOGA\u00C7\u00C3O FINANCEIRA ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "h2");
    i0.ɵɵtext(40, "Detalhamento de comiss\u00F5es");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div", 103)(42, "table")(43, "thead")(44, "tr")(45, "th");
    i0.ɵɵtext(46, "Curso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "th");
    i0.ɵɵtext(48, "Venda");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "th");
    i0.ɵɵtext(50, "Comiss\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "th");
    i0.ɵɵtext(52, "Situa\u00E7\u00E3o");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "tbody");
    i0.ɵɵrepeaterCreate(54, PortalComponent_Conditional_4_Conditional_6_For_55_Template, 13, 9, "tr", null, _forTrack0, false, PortalComponent_Conditional_4_Conditional_6_ForEmpty_56_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(57, "p", 58);
    i0.ɵɵtext(58, " Os valores de homologa\u00E7\u00E3o n\u00E3o representam saldo dispon\u00EDvel e n\u00E3o podem ser sacados ou transferidos. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(17);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(18, 4, ctx_r1.commission, "BRL"), " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(26, 7, ctx_r1.simulatedCommission, "BRL"), " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.simulatedCount);
    i0.ɵɵadvance(21);
    i0.ɵɵrepeater(ctx_r1.simulatedSales);
} }
function PortalComponent_Conditional_4_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "div")(2, "div", 4);
    i0.ɵɵtext(3, "MINHA CONTA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Meu estabelecimento");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, " Informa\u00E7\u00F5es do seu cadastro de parceiro. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "section", 28)(11, "div", 109)(12, "div")(13, "span");
    i0.ɵɵtext(14, "Estabelecimento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div")(18, "span");
    i0.ɵɵtext(19, "Respons\u00E1vel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "span");
    i0.ɵɵtext(24, "CNPJ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "strong");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "span");
    i0.ɵɵtext(29, "CRDD");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "strong");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div")(33, "span");
    i0.ɵɵtext(34, "E-mail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "strong");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div")(38, "span");
    i0.ɵɵtext(39, "WhatsApp");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "strong");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div")(43, "span");
    i0.ɵɵtext(44, "Cidade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "strong");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div")(48, "span");
    i0.ɵɵtext(49, "Situa\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "strong");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(16);
    i0.ɵɵtextInterpolate1(" ", (tmp_2_0 = ctx_r1.service.profile()) == null ? null : tmp_2_0.business, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", (tmp_3_0 = ctx_r1.service.profile()) == null ? null : tmp_3_0.name, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", (tmp_4_0 = ctx_r1.service.profile()) == null ? null : tmp_4_0.cnpj, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", (tmp_5_0 = ctx_r1.service.profile()) == null ? null : tmp_5_0.crdd, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", (tmp_6_0 = ctx_r1.service.profile()) == null ? null : tmp_6_0.email, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", (tmp_7_0 = ctx_r1.service.profile()) == null ? null : tmp_7_0.phone, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", (tmp_8_0 = ctx_r1.service.profile()) == null ? null : tmp_8_0.city, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", (tmp_9_0 = ctx_r1.service.profile()) == null ? null : tmp_9_0.status, " ");
} }
function PortalComponent_Conditional_4_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.error() || ctx_r1.service.error(), " ");
} }
function PortalComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-dashboard-layout", 18);
    i0.ɵɵlistener("sectionChange", function PortalComponent_Conditional_4_Template_app_dashboard_layout_sectionChange_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectSection($event)); })("logout", function PortalComponent_Conditional_4_Template_app_dashboard_layout_logout_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵconditionalCreate(1, PortalComponent_Conditional_4_Conditional_1_Template, 112, 16);
    i0.ɵɵconditionalCreate(2, PortalComponent_Conditional_4_Conditional_2_Template, 34, 2);
    i0.ɵɵconditionalCreate(3, PortalComponent_Conditional_4_Conditional_3_Template, 17, 5);
    i0.ɵɵconditionalCreate(4, PortalComponent_Conditional_4_Conditional_4_Template, 17, 0);
    i0.ɵɵconditionalCreate(5, PortalComponent_Conditional_4_Conditional_5_Template, 69, 3);
    i0.ɵɵconditionalCreate(6, PortalComponent_Conditional_4_Conditional_6_Template, 59, 10);
    i0.ɵɵconditionalCreate(7, PortalComponent_Conditional_4_Conditional_7_Template, 52, 8);
    i0.ɵɵconditionalCreate(8, PortalComponent_Conditional_4_Conditional_8_Template, 2, 1, "p", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("active", ctx_r1.section())("name", ((tmp_2_0 = ctx_r1.service.profile()) == null ? null : tmp_2_0.name) || "")("business", ((tmp_3_0 = ctx_r1.service.profile()) == null ? null : tmp_3_0.business) || "");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "overview" ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "courses" ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "new-sale" ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "customers" ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "sales" ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "commissions" ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "business" ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() || ctx_r1.service.error() ? 8 : -1);
} }
export class PortalComponent {
    constructor() {
        this.router = inject(Router);
        this.route = inject(ActivatedRoute);
        this.checkoutUrl = signal("", ...(ngDevMode ? [{ debugName: "checkoutUrl" }] : []));
        this.checkoutCopied = signal(false, ...(ngDevMode ? [{ debugName: "checkoutCopied" }] : []));
        this.routeMap = { "cursos": "courses", "nova-venda": "new-sale", "clientes": "customers", "vendas": "sales", "comissoes": "commissions", "estabelecimento": "business" };
        this.service = inject(CommercialService);
        this.courseOrders = inject(CourseOrdersService);
        this.catalog = courses;
        this.section = signal("overview", ...(ngDevMode ? [{ debugName: "section" }] : []));
        this.busy = signal(false, ...(ngDevMode ? [{ debugName: "busy" }] : []));
        this.error = signal("", ...(ngDevMode ? [{ debugName: "error" }] : []));
        this.notice = signal("", ...(ngDevMode ? [{ debugName: "notice" }] : []));
        this.orderBusy = signal(false, ...(ngDevMode ? [{ debugName: "orderBusy" }] : []));
        this.orderError = signal("", ...(ngDevMode ? [{ debugName: "orderError" }] : []));
        this.orderSuccess = signal("", ...(ngDevMode ? [{ debugName: "orderSuccess" }] : []));
        this.selectedCourse = signal(null, ...(ngDevMode ? [{ debugName: "selectedCourse" }] : []));
        this.saleStep = signal("guide", ...(ngDevMode ? [{ debugName: "saleStep" }] : []));
        this.categoryFilter = signal("Todos", ...(ngDevMode ? [{ debugName: "categoryFilter" }] : []));
        this.courseSearch = signal("", ...(ngDevMode ? [{ debugName: "courseSearch" }] : []));
        this.categories = [
            "Todos",
            ...new Set(courses.map((course) => course.category)),
        ];
        this.saleTimeline = [
            {
                number: "01",
                title: "Identifique a necessidade",
                description: "Converse com o cliente e confirme qual formação ou atualização ele precisa.",
            },
            {
                number: "02",
                title: "Escolha o curso",
                description: "Confira público-alvo, requisitos, estado e disponibilidade da oferta.",
            },
            {
                number: "03",
                title: "Cadastre o aluno",
                description: "Preencha os dados necessários para registrar o pedido e preparar a matrícula.",
            },
            {
                number: "04",
                title: "Revise e confirme",
                description: "Confira os dados do aluno e as condições da oferta antes de criar o pedido.",
            },
            {
                number: "05",
                title: "Acompanhe o pagamento",
                description: "Após a integração financeira, o cliente poderá pagar pelo checkout da plataforma.",
            },
            {
                number: "06",
                title: "Acompanhe a matrícula",
                description: "Consulte a situação do pedido, da matrícula e da comissão no seu painel.",
            },
        ];
        this.email = "";
        this.password = "";
        this.orderConsent = false;
        this.orderRequestId = null;
        this.student = this.emptyStudent();
        this.testOfferId = "118sc-icetran";
        this.testOfferPriceCents = 12000;
    }
    ngOnInit() {
        this.routeSubscription = this.route.paramMap.subscribe(params => {
            const section = this.routeMap[params.get("section") ?? ""] ?? "overview";
            this.section.set(section);
            if (section === "sales")
                void this.refreshCourseOrders();
        });
    }
    ngOnDestroy() { this.routeSubscription?.unsubscribe(); }
    go(section) {
        const slug = Object.keys(this.routeMap).find(k => this.routeMap[k] === section);
        void this.router.navigate(slug ? ["/portal", slug] : ["/portal"]);
    }
    shareCheckout() {
        const url = this.checkoutUrl();
        if (!url)
            return;
        const message = `Olá! Seu cadastro foi realizado. Acesse seu link para conferir o curso e finalizar a inscrição (ambiente de homologação): ${url}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    }
    async copyCheckout() { if (!this.checkoutUrl())
        return; try {
        await navigator.clipboard.writeText(this.checkoutUrl());
        this.checkoutCopied.set(true);
    }
    catch {
        this.orderError.set("Não foi possível copiar automaticamente. Selecione o link e copie.");
    } }
    async regenerateCheckout(orderId) { try {
        const token = await this.courseOrders.renewLink(orderId);
        this.checkoutUrl.set(`${window.location.origin}/comprar/${token}`);
        this.checkoutCopied.set(false);
        this.orderSuccess.set("Link de compra gerado. Compartilhe com o cliente.");
        this.saleStep.set("success");
        this.go("new-sale");
    }
    catch (e) {
        this.orderError.set(e instanceof Error ? e.message : "Não foi possível gerar o link.");
    } }
    get filteredCourses() {
        const search = this.courseSearch().trim().toLowerCase();
        const category = this.categoryFilter();
        return this.catalog.filter((course) => {
            const matchesCategory = category === "Todos" || course.category === category;
            const content = [
                course.title,
                course.category,
                course.audience,
                course.description,
            ]
                .join(" ")
                .toLowerCase();
            return matchesCategory && (!search || content.includes(search));
        });
    }
    get selectedOfferId() {
        const course = this.selectedCourse();
        if (!course)
            return null;
        return course.offers?.includes(this.testOfferId) ? this.testOfferId : null;
    }
    get canCreateTestOrder() {
        return this.selectedOfferId === this.testOfferId;
    }
    get selectedPrice() {
        return this.canCreateTestOrder ? this.testOfferPriceCents / 100 : null;
    }
    emptyStudent() {
        return {
            fullName: "",
            document: "",
            dateOfBirth: "",
            email: "",
            phone: "",
            cnh: "",
            cnhCategory: "B",
            address: {
                zipCode: "",
                street: "",
                number: "",
                complement: "",
                district: "",
                city: "",
                state: "SC",
            },
        };
    }
    selectSection(section) {
        this.go(section);
        if (section === "sales") {
            void this.refreshCourseOrders();
        }
        if (section === "new-sale" && !this.selectedCourse()) {
            this.saleStep.set("guide");
        }
    }
    openCatalog() {
        this.go("courses");
        this.orderError.set("");
    }
    openCourse(course) {
        this.selectedCourse.set(course);
        this.saleStep.set("details");
        this.go("new-sale");
        this.orderError.set("");
        this.orderSuccess.set("");
    }
    startNewSale() {
        this.selectedCourse.set(null);
        this.saleStep.set("guide");
        this.student = this.emptyStudent();
        this.orderConsent = false;
        this.orderRequestId = null;
        this.orderError.set("");
        this.orderSuccess.set("");
        this.go("new-sale");
    }
    selectCourseForSale(course) {
        this.openCourse(course);
    }
    continueToStudent() {
        if (!this.canCreateTestOrder) {
            this.orderError.set("Esta oferta ainda não está habilitada para homologação.");
            return;
        }
        this.orderError.set("");
        this.saleStep.set("student");
    }
    continueToReview() {
        this.orderError.set("");
        if (!this.canCreateTestOrder) {
            this.orderError.set("Selecione uma oferta habilitada.");
            return;
        }
        if (!this.orderConsent) {
            this.orderError.set("Confirme a autorização antes de continuar.");
            return;
        }
        this.saleStep.set("review");
    }
    backToStudent() {
        this.saleStep.set("student");
        this.orderError.set("");
    }
    backToDetails() {
        this.saleStep.set("details");
        this.orderError.set("");
    }
    async submitCourseOrder() {
        if (this.orderBusy())
            return;
        this.orderBusy.set(true);
        this.orderError.set("");
        this.orderSuccess.set("");
        try {
            if (!this.canCreateTestOrder) {
                throw new Error("A oferta selecionada não está habilitada para teste.");
            }
            if (!this.orderConsent) {
                throw new Error("Confirme a autorização para o cadastro.");
            }
            if (!this.orderRequestId) {
                this.orderRequestId = crypto.randomUUID();
            }
            // Compatibilidade com o CourseOrdersService atual:
            // ele ainda envia a oferta fixa 118sc-icetran.
            const created = await this.courseOrders.create(this.student, this.orderRequestId);
            this.orderSuccess.set(`Cadastro realizado. Pedido: ${created.orderId.slice(0, 12)}. Compartilhe o link para o cliente concluir a compra.`);
            this.checkoutUrl.set(created.checkoutToken ? `${window.location.origin}/comprar/${created.checkoutToken}` : "");
            this.checkoutCopied.set(false);
            this.saleStep.set("success");
            await this.refreshCourseOrders();
            // Limpa os dados pessoais após a confirmação.
            this.student = this.emptyStudent();
            this.orderConsent = false;
            this.orderRequestId = null;
        }
        catch (e) {
            this.orderError.set(e instanceof Error ? e.message : "Não foi possível criar o pedido.");
        }
        finally {
            this.orderBusy.set(false);
        }
    }
    async refreshCourseOrders() {
        try {
            await this.courseOrders.refresh();
        }
        catch {
            this.orderError.set("Falha ao consultar pedidos.");
        }
    }
    async login() {
        this.busy.set(true);
        this.error.set("");
        this.notice.set("");
        try {
            await this.service.login(this.email, this.password);
        }
        catch {
            this.error.set("Não foi possível entrar. Confira e-mail e senha.");
        }
        finally {
            this.busy.set(false);
        }
    }
    async reset() {
        this.error.set("");
        this.notice.set("");
        if (!this.email) {
            this.error.set("Informe seu e-mail para recuperar a senha.");
            return;
        }
        try {
            await this.service.resetPassword(this.email);
            this.notice.set("Se houver uma conta com esse e-mail, você receberá instruções.");
        }
        catch {
            this.error.set("Não foi possível enviar a recuperação.");
        }
    }
    async refresh() {
        this.error.set("");
        try {
            await this.service.refresh();
        }
        catch {
            this.error.set("Não foi possível atualizar os dados.");
        }
    }
    get paid() {
        return this.service
            .sales()
            .filter((sale) => sale.status === "paid" &&
            sale.simulated !== true &&
            sale.environment !== "sandbox");
    }
    get revenue() {
        return this.paid.reduce((total, sale) => total + (Number(sale.amount) || 0), 0);
    }
    get commission() {
        return this.paid.reduce((total, sale) => total + (Number(sale.commissionAmount) || 0), 0);
    }
    get count() {
        return this.paid.length;
    }
    courseName(id) {
        return (this.catalog.find((course) => course.id === id || course.offers?.includes(id))?.title || id);
    }
    get simulatedSales() {
        return this.service
            .sales()
            .filter((sale) => sale.simulated === true || sale.environment === "sandbox");
    }
    get simulatedCommission() {
        return this.simulatedSales.reduce((total, sale) => total + (Number(sale.commissionAmount) || 0), 0);
    }
    get simulatedRevenue() {
        return this.simulatedSales.reduce((total, sale) => total + (Number(sale.amount) || 0), 0);
    }
    get simulatedCount() {
        return this.simulatedSales.length;
    }
    logout() {
        void this.service.logout();
    }
    static { this.ɵfac = function PortalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PortalComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PortalComponent, selectors: [["ng-component"]], decls: 5, vars: 1, consts: [["studentForm", "ngForm"], [1, "auth-page"], ["mode", "partner", 3, "active", "name", "business"], [1, "auth-card"], [1, "eyebrow"], ["src", "images/logo-sexta-marcha.png", "alt", "Sexta Marcha", 1, "auth-logo"], [3, "ngSubmit"], ["name", "email", "type", "email", "autocomplete", "username", "placeholder", "seu@email.com", "required", "", 3, "ngModelChange", "ngModel"], ["name", "password", "type", "password", "autocomplete", "current-password", "placeholder", "Sua senha", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "primary-button", "full", 3, "disabled"], ["type", "button", 1, "link-button", 3, "click"], [1, "auth-bottom"], ["routerLink", "/cadastro-despachante"], ["role", "alert", 1, "feedback-error"], ["role", "status", 1, "feedback-notice"], ["routerLink", "/master", 1, "primary-button", "full"], [1, "pending-status"], ["type", "button", 1, "primary-button", "full", 3, "click"], ["mode", "partner", 3, "sectionChange", "logout", "active", "name", "business"], [1, "page-heading"], ["type", "button", 1, "secondary-button", 3, "click"], [1, "welcome-banner"], [1, "banner-label"], ["type", "button", 1, "primary-button", 3, "click"], ["aria-hidden", "true", 1, "banner-decoration"], [1, "metrics"], [1, "metric-card"], [1, "dashboard-grid"], [1, "content-card"], [1, "card-header"], [1, "quick-action"], [1, "quick-icon"], ["type", "button", "aria-label", "Abrir cat\u00E1logo", 3, "click"], ["type", "button", "aria-label", "Iniciar venda", 3, "click"], ["type", "button", "aria-label", "Consultar vendas", 3, "click"], [1, "active-pill"], [1, "business-details"], ["type", "button", 1, "secondary-button", "full", 3, "click"], [1, "sm-catalog-intro"], [1, "sm-overline"], ["aria-hidden", "true", 1, "sm-catalog-number"], [1, "sm-catalog-tools"], [1, "sm-search"], ["type", "search", "placeholder", "Pesquisar cursos...", 3, "ngModelChange", "ngModel"], [1, "sm-filter-list"], ["type", "button", 1, "sm-filter", 3, "is-active"], [1, "sm-course-grid"], [1, "sm-course-card"], ["type", "button", 1, "sm-filter", 3, "click"], [1, "sm-course-image"], ["loading", "lazy", "onerror", "this.onerror=null;this.src='/images/course-fallback.webp'", 3, "src", "alt"], [1, "sm-course-image-label"], [1, "sm-course-content"], [1, "sm-course-meta"], [1, "sm-course-audience"], [1, "content-card", "sm-guide"], [1, "content-card", "sm-review"], [1, "content-card", "sm-success"], [1, "muted"], [1, "sm-timeline"], [1, "sm-timeline-item"], [1, "sm-guide-notice"], [1, "sm-timeline-marker"], [1, "content-card", "sm-course-detail"], [1, "sm-detail-layout"], [1, "sm-detail-image"], ["onerror", "this.onerror=null;this.src='/images/course-fallback.webp'", 3, "src", "alt"], [1, "sm-detail-category"], [1, "sm-detail-columns"], [1, "sm-offer-box"], ["type", "button", 1, "primary-button", 3, "click", "disabled"], [1, "sm-offer-price"], [1, "sm-step-header"], [1, "content-card", "enrollment-form", 3, "ngSubmit"], [1, "enrollment-grid"], [1, "full-field"], ["name", "fullName", "required", "", "minlength", "3", "autocomplete", "name", 3, "ngModelChange", "ngModel"], ["name", "document", "required", "", "maxlength", "14", "placeholder", "000.000.000-00", 3, "ngModelChange", "ngModel"], ["name", "dateOfBirth", "type", "date", "required", "", 3, "ngModelChange", "ngModel"], ["name", "studentEmail", "type", "email", "required", "", 3, "ngModelChange", "ngModel"], ["name", "phone", "type", "tel", "required", "", 3, "ngModelChange", "ngModel"], ["name", "cnh", "required", "", 3, "ngModelChange", "ngModel"], ["name", "cnhCategory", "required", "", 3, "ngModelChange", "ngModel"], [3, "value"], ["name", "zipCode", "required", "", 3, "ngModelChange", "ngModel"], ["name", "state", "required", "", "maxlength", "2", 3, "ngModelChange", "ngModel"], ["name", "street", "required", "", 3, "ngModelChange", "ngModel"], ["name", "number", "required", "", 3, "ngModelChange", "ngModel"], ["name", "complement", 3, "ngModelChange", "ngModel"], ["name", "district", "required", "", 3, "ngModelChange", "ngModel"], ["name", "city", "required", "", 3, "ngModelChange", "ngModel"], [1, "consent-field"], ["type", "checkbox", "name", "orderConsent", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "primary-button", 3, "disabled"], [1, "sm-review-grid"], [1, "sm-actions"], ["type", "button", 1, "secondary-button", 3, "click", "disabled"], [1, "sm-success-icon"], [1, "sm-checkout-share"], ["for", "checkout-link"], ["id", "checkout-link", "type", "text", "readonly", "", 3, "value"], [1, "content-card", "empty-module"], [1, "module-icon"], [1, "table-scroll"], [1, "table-empty"], [1, "table-status"], ["colspan", "6"], [1, "status-pill", "is-pending"], ["colspan", "4"], [1, "details-grid"]], template: function PortalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, PortalComponent_Conditional_0_Template, 8, 0, "main", 1)(1, PortalComponent_Conditional_1_Template, 28, 6, "main", 1)(2, PortalComponent_Conditional_2_Template, 14, 0, "main", 1)(3, PortalComponent_Conditional_3_Template, 16, 2, "main", 1)(4, PortalComponent_Conditional_4_Template, 9, 11, "app-dashboard-layout", 2);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.service.loading() ? 0 : !ctx.service.user() ? 1 : ctx.service.role() === "master" ? 2 : ctx.service.role() !== "partner" ? 3 : 4);
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinLengthValidator, i1.MaxLengthValidator, i1.CheckboxRequiredValidator, i1.NgModel, i1.NgForm, RouterLink,
            DashboardLayoutComponent,
            CurrencyPipe,
            DecimalPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  --orange: var(--brand-orange, #f47721);\n  color: #20242a;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  color: var(--orange);\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n  margin-bottom: 12px;\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 28px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 3vw, 39px);\n  font-weight: 900;\n  letter-spacing: -0.05em;\n  margin-bottom: 9px;\n  line-height: 1.12;\n}\n\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.auth-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--orange);\n}\n\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.muted[_ngcontent-%COMP%] {\n  color: #818995;\n  font-size: 13px;\n  line-height: 1.7;\n  margin-bottom: 0;\n}\n\n.primary-button[_ngcontent-%COMP%], \n.secondary-button[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 9px;\n  padding: 13px 19px;\n  min-height: 43px;\n  font: inherit;\n  font-size: 12px;\n  font-weight: 850;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.primary-button[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: #171717;\n}\n\n.secondary-button[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dfe2e7;\n  color: #343a44;\n}\n\n.primary-button[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.94);\n}\n\n.secondary-button[_ngcontent-%COMP%]:hover {\n  border-color: var(--orange);\n}\n\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.welcome-banner[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: #1a1d22;\n  border-radius: 16px;\n  color: white;\n  padding: 35px 38px;\n  margin-bottom: 20px;\n}\n\n.welcome-banner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  position: relative;\n  z-index: 1;\n  max-width: 570px;\n}\n\n.banner-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.13em;\n  color: var(--orange);\n}\n\n.welcome-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 3vw, 34px);\n  letter-spacing: -0.04em;\n  margin: 14px 0;\n}\n\n.welcome-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #aeb4bd;\n  line-height: 1.7;\n  font-size: 13px;\n  max-width: 470px;\n  margin-bottom: 22px;\n}\n\n.banner-decoration[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 45px;\n  top: -75px;\n  font-size: 340px;\n  font-weight: 950;\n  line-height: 1;\n  color: #ffffff08;\n  pointer-events: none;\n}\n\n.metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.metric-card[_ngcontent-%COMP%], \n.content-card[_ngcontent-%COMP%], \n.course-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e7e9ed;\n  border-radius: 13px;\n}\n\n.metric-card[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n\n.metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #818995;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #22262d;\n  font-size: clamp(22px, 2.3vw, 31px);\n  letter-spacing: -0.045em;\n  margin: 13px 0;\n  overflow-wrap: anywhere;\n}\n\n.metric-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #a2a8b1;\n  font-size: 11px;\n}\n\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.25fr 1fr;\n  gap: 20px;\n}\n\n.content-card[_ngcontent-%COMP%] {\n  padding: 27px;\n  margin-bottom: 20px;\n}\n\n.content-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 19px;\n  letter-spacing: -0.03em;\n  margin-bottom: 20px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.quick-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  border-top: 1px solid #eef0f2;\n  padding: 17px 0;\n}\n\n.quick-icon[_ngcontent-%COMP%] {\n  width: 41px;\n  height: 41px;\n  flex: 0 0 41px;\n  border-radius: 10px;\n  background: #f3f4f6;\n  display: grid;\n  place-items: center;\n  color: var(--orange);\n  font-size: 12px;\n  font-weight: 900;\n}\n\n.quick-action[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 1;\n  min-width: 0;\n}\n\n.quick-action[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.quick-action[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9299a3;\n  margin: 5px 0 0;\n}\n\n.quick-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: var(--orange);\n  font-size: 22px;\n  cursor: pointer;\n}\n\n.active-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 7px 11px;\n  border-radius: 6px;\n  background: #e7f7ed;\n  color: #248b4d;\n  font-size: 11px;\n  font-weight: 800;\n}\n\n.business-details[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n\n.business-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 13px 0;\n  border-bottom: 1px solid #edf0f2;\n}\n\n.business-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.details-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #8c949f;\n  margin-bottom: 6px;\n}\n\n.business-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.details-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: #292f37;\n  overflow-wrap: anywhere;\n}\n\n.course-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n}\n\n.course-card[_ngcontent-%COMP%] {\n  padding: 27px;\n  display: flex;\n  flex-direction: column;\n  min-height: 270px;\n}\n\n.course-top[_ngcontent-%COMP%], \n.course-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.course-category[_ngcontent-%COMP%] {\n  color: var(--orange);\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 0.1em;\n}\n\n.course-symbol[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #a3a9b1;\n}\n\n.course-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 26px 0 12px;\n  font-size: 21px;\n  letter-spacing: -0.04em;\n}\n\n.course-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8a929c;\n  font-size: 12px;\n  line-height: 1.7;\n  flex: 1;\n}\n\n.course-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid #edf0f2;\n  padding-top: 18px;\n}\n\n.course-bottom[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9aa1aa;\n}\n\n.empty-module[_ngcontent-%COMP%] {\n  min-height: 320px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.module-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  display: grid;\n  place-items: center;\n  background: #fff1e7;\n  color: var(--orange);\n  border-radius: 12px;\n  font-size: 27px;\n  margin-bottom: 20px;\n}\n\n.empty-module[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 530px;\n  color: #828a95;\n  font-size: 13px;\n  line-height: 1.8;\n  margin-bottom: 23px;\n}\n\n.table-scroll[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 520px;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 17px 12px;\n  border-bottom: 1px solid #edf0f2;\n  font-size: 12px;\n}\n\nth[_ngcontent-%COMP%] {\n  color: #89919d;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n\n.table-status[_ngcontent-%COMP%] {\n  padding: 6px 9px;\n  background: #f0f2f5;\n  border-radius: 6px;\n  font-weight: 700;\n}\n\n.table-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9299a3;\n  padding: 45px 10px 25px;\n  font-size: 13px;\n}\n\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 24px;\n}\n\n.details-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-bottom: 17px;\n  border-bottom: 1px solid #edf0f2;\n}\n\n.feedback-error[_ngcontent-%COMP%] {\n  color: #d94444;\n  font-size: 13px;\n}\n\n.feedback-notice[_ngcontent-%COMP%] {\n  color: #328a52;\n  font-size: 13px;\n}\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #101114;\n  display: grid;\n  place-items: center;\n  padding: 35px 16px;\n  color: white;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  background: #1b1d21;\n  border: 1px solid #373b42;\n  border-radius: 18px;\n  padding: 37px;\n}\n\n.auth-logo[_ngcontent-%COMP%] {\n  width: 175px;\n  max-height: 75px;\n  object-fit: contain;\n  object-position: left;\n  display: block;\n  margin-bottom: 38px;\n}\n\n.auth-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 31px;\n  letter-spacing: -0.05em;\n  line-height: 1.1;\n  margin-bottom: 13px;\n}\n\n.auth-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8adb5;\n  font-size: 13px;\n  line-height: 1.7;\n  margin-bottom: 25px;\n}\n\n.auth-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.07em;\n  margin-bottom: 18px;\n}\n\n.auth-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 49px;\n  background: #25282d;\n  border: 1px solid #454a52;\n  border-radius: 8px;\n  padding: 0 14px;\n  color: white;\n  font: inherit;\n  font-size: 13px;\n  margin-top: 9px;\n}\n\n.auth-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--orange);\n  outline-offset: 1px;\n}\n\n.auth-card[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\n\n.link-button[_ngcontent-%COMP%] {\n  display: block;\n  border: 0;\n  background: none;\n  color: var(--orange);\n  font: inherit;\n  font-size: 12px;\n  cursor: pointer;\n  margin: 18px auto;\n}\n\n.auth-card[_ngcontent-%COMP%]   .auth-bottom[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 24px 0 0;\n}\n\n.auth-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--orange);\n}\n\n.pending-status[_ngcontent-%COMP%] {\n  background: #30291e;\n  color: var(--orange);\n  padding: 14px;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n@media (max-width: 1050px) {\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .page-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .course-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .welcome-banner[_ngcontent-%COMP%] {\n    padding: 27px 23px;\n  }\n\n  .banner-decoration[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .content-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 28px 22px;\n  }\n}\n\n.enrollment-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-top: 20px;\n}\n\n.enrollment-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: -12px 0 0;\n}\n\n.enrollment-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n}\n\n.enrollment-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.enrollment-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.enrollment-grid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  padding: 14px;\n  border: 1px solid #dedede;\n  border-radius: 10px;\n  background: #fff;\n  color: #161616;\n  font: inherit;\n  outline: none;\n}\n\n.enrollment-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.enrollment-grid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-orange, #ff6900);\n}\n\n.full-field[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.consent-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n.consent-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n\n@media (max-width: 680px) {\n  .enrollment-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  --sm-orange: var(--brand-orange, #f47721);\n  --sm-ink: #20242a;\n  --sm-muted: #818995;\n  --sm-line: #e7e9ed;\n  --sm-surface: #ffffff;\n  --sm-soft: #f6f7f8;\n}\n\n\n\n\n.page-heading[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.page-heading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.primary-button[_ngcontent-%COMP%], \n.secondary-button[_ngcontent-%COMP%] {\n  transition:\n    background-color 0.2s ease,\n    border-color 0.2s ease,\n    transform 0.2s ease;\n}\n\n.primary-button[_ngcontent-%COMP%]:disabled, \n.secondary-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.primary-button[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #e66d1b;\n  filter: none;\n}\n\n.secondary-button[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #fff8f2;\n}\n\n\n\n\n\n\n.sm-catalog-intro[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  min-height: 260px;\n  padding: clamp(26px, 4vw, 46px);\n  margin-bottom: 26px;\n  border-radius: 16px;\n  background: #1a1d22;\n  color: #ffffff;\n}\n\n.sm-catalog-intro[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 590px;\n}\n\n.sm-overline[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 15px;\n  color: var(--sm-orange);\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n}\n\n.sm-catalog-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 550px;\n  margin: 0 0 14px;\n  color: #ffffff;\n  font-size: clamp(27px, 3vw, 39px);\n  font-weight: 900;\n  line-height: 1.14;\n  letter-spacing: -0.045em;\n}\n\n.sm-catalog-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 450px;\n  margin: 0 0 24px;\n  color: #aeb4bd;\n  font-size: 13px;\n  line-height: 1.75;\n}\n\n.sm-catalog-number[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 35px;\n  top: -70px;\n  color: rgba(255, 255, 255, 0.035);\n  font-size: 340px;\n  font-weight: 950;\n  line-height: 1;\n  pointer-events: none;\n  user-select: none;\n}\n\n\n\n\n\n\n.sm-catalog-tools[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 18px;\n  margin: 0 0 24px;\n}\n\n.sm-search[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  width: min(100%, 340px);\n  min-width: 0;\n}\n\n.sm-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #737c88;\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n}\n\n.sm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  padding: 0 15px;\n  border: 1px solid var(--sm-line);\n  border-radius: 9px;\n  outline: none;\n  background: #ffffff;\n  color: var(--sm-ink);\n  font: inherit;\n  font-size: 13px;\n  transition: border-color 0.2s ease;\n}\n\n.sm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--sm-orange);\n}\n\n.sm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #a1a8b2;\n}\n\n.sm-filter-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n\n.sm-filter[_ngcontent-%COMP%] {\n  min-height: 37px;\n  padding: 8px 13px;\n  border: 1px solid var(--sm-line);\n  border-radius: 7px;\n  background: #ffffff;\n  color: #69717d;\n  font: inherit;\n  font-size: 11px;\n  font-weight: 750;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.sm-filter[_ngcontent-%COMP%]:hover {\n  border-color: var(--sm-orange);\n  color: var(--sm-ink);\n}\n\n.sm-filter.is-active[_ngcontent-%COMP%] {\n  border-color: #20242a;\n  background: #20242a;\n  color: #ffffff;\n}\n\n\n\n\n\n\n.sm-course-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  align-items: stretch;\n  gap: 18px;\n}\n\n.sm-course-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid var(--sm-line);\n  border-radius: 13px;\n  background: #ffffff;\n  transition:\n    border-color 0.2s ease,\n    transform 0.2s ease;\n}\n\n.sm-course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #d3d7dc;\n}\n\n.sm-course-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 175px;\n  overflow: hidden;\n  background: #eef0f2;\n}\n\n.sm-course-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.35s ease;\n}\n\n.sm-course-card[_ngcontent-%COMP%]:hover   .sm-course-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.025);\n}\n\n.sm-course-image[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 45% 0 0;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.22));\n  pointer-events: none;\n}\n\n.sm-course-image-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  bottom: 13px;\n  left: 14px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  background: #ffffff;\n  color: #272b31;\n  font-size: 9px;\n  font-weight: 850;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.sm-course-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 0;\n  padding: 22px;\n}\n\n.sm-course-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 13px;\n  color: var(--sm-orange);\n  font-size: 10px;\n  font-weight: 800;\n  line-height: 1.5;\n}\n\n.sm-course-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 11px;\n  color: var(--sm-ink);\n  font-size: 19px;\n  font-weight: 850;\n  line-height: 1.25;\n  letter-spacing: -0.035em;\n}\n\n.sm-course-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: #818995;\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n.sm-course-audience[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-top: auto;\n  padding: 16px 0;\n  border-top: 1px solid #edf0f2;\n}\n\n.sm-course-audience[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #9ba2ab;\n  font-size: 9px;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n}\n\n.sm-course-audience[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #515963;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.sm-course-content[_ngcontent-%COMP%]    > .secondary-button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n\n\n\n\n\n.sm-guide[_ngcontent-%COMP%], \n.sm-course-detail[_ngcontent-%COMP%], \n.sm-review[_ngcontent-%COMP%], \n.sm-success[_ngcontent-%COMP%] {\n  padding: clamp(24px, 3vw, 34px);\n}\n\n.sm-guide[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], \n.sm-review[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], \n.sm-success[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: var(--sm-ink);\n  font-size: clamp(23px, 2.5vw, 30px);\n  font-weight: 850;\n  letter-spacing: -0.045em;\n}\n\n.sm-timeline[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 27px 20px;\n  margin: 32px 0;\n}\n\n.sm-timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n  min-width: 0;\n}\n\n.sm-timeline-marker[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  flex: 0 0 38px;\n  width: 38px;\n  height: 38px;\n  border-radius: 9px;\n  background: #fff1e7;\n  color: var(--sm-orange);\n  font-size: 11px;\n  font-weight: 900;\n}\n\n.sm-timeline-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  min-width: 0;\n}\n\n.sm-timeline-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 1px 0 7px;\n  color: #292f37;\n  font-size: 13px;\n  font-weight: 850;\n  line-height: 1.4;\n}\n\n.sm-timeline-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #89919d;\n  font-size: 12px;\n  line-height: 1.65;\n}\n\n.sm-guide-notice[_ngcontent-%COMP%] {\n  padding: 17px 19px;\n  margin: 24px 0;\n  border: 1px solid #e8eaee;\n  border-radius: 9px;\n  background: #f8f9fa;\n  color: #707985;\n  font-size: 12px;\n  line-height: 1.75;\n}\n\n\n\n\n\n\n.sm-detail-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);\n  gap: 30px;\n  align-items: start;\n  margin: 23px 0 30px;\n}\n\n.sm-detail-image[_ngcontent-%COMP%] {\n  height: 280px;\n  overflow: hidden;\n  border-radius: 11px;\n  background: #eef0f2;\n}\n\n.sm-detail-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.sm-detail-category[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 12px;\n  color: var(--sm-orange);\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.sm-detail-layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n  color: var(--sm-ink);\n  font-size: clamp(23px, 2.5vw, 31px);\n  font-weight: 900;\n  line-height: 1.2;\n  letter-spacing: -0.04em;\n}\n\n.sm-detail-layout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 13px;\n  color: #737c88;\n  font-size: 13px;\n  line-height: 1.75;\n}\n\n.sm-detail-layout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #30353d;\n}\n\n.sm-detail-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 28px;\n  padding: 25px 0;\n  border-top: 1px solid #edf0f2;\n}\n\n.sm-detail-columns[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #292f37;\n  font-size: 15px;\n  font-weight: 850;\n}\n\n.sm-detail-columns[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n}\n\n.sm-detail-columns[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  margin-bottom: 9px;\n  color: #78818c;\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n.sm-detail-columns[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: var(--sm-orange);\n}\n\n.sm-offer-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 22px;\n  padding: 23px;\n  border: 1px solid #e7e9ed;\n  border-radius: 11px;\n  background: #fafbfc;\n}\n\n.sm-offer-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.sm-offer-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #2a2e35;\n  font-size: 16px;\n  font-weight: 850;\n}\n\n.sm-offer-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n}\n\n.sm-offer-price[_ngcontent-%COMP%] {\n  display: block;\n  color: #20242a;\n  font-size: 27px;\n  font-weight: 900;\n  letter-spacing: -0.045em;\n}\n\n\n\n\n\n\n.sm-step-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 15px;\n  margin-bottom: 18px;\n}\n\n.sm-step-header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--sm-orange);\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n}\n\n.enrollment-form[_ngcontent-%COMP%] {\n  gap: 21px;\n  margin-top: 0;\n}\n\n.enrollment-form[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]:not(:first-child) {\n  padding-top: 22px;\n  border-top: 1px solid #edf0f2;\n}\n\n.enrollment-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: -10px 0 2px;\n  color: #2b3037;\n  font-size: 19px;\n  font-weight: 850;\n}\n\n.enrollment-grid[_ngcontent-%COMP%] {\n  gap: 17px;\n}\n\n.enrollment-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  gap: 8px;\n  color: #59616d;\n  font-size: 12px;\n  font-weight: 750;\n}\n\n.enrollment-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.enrollment-grid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-height: 45px;\n  padding: 11px 13px;\n  border: 1px solid #dfe3e8;\n  border-radius: 8px;\n  background: #fff;\n  color: #252a31;\n  font-size: 13px;\n  transition: border-color 0.2s ease;\n}\n\n.enrollment-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.enrollment-grid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--sm-orange);\n  box-shadow: 0 0 0 3px rgba(244, 119, 33, 0.08);\n}\n\n.consent-field[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 1px solid #e8eaee;\n  border-radius: 8px;\n  background: #fafbfc;\n  color: #68717e;\n  font-size: 12px;\n}\n\n.consent-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--sm-orange);\n}\n\n.sm-review-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0 26px;\n  margin: 26px 0;\n}\n\n.sm-review-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  min-width: 0;\n  padding: 16px 0;\n  border-bottom: 1px solid #edf0f2;\n}\n\n.sm-review-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929aa5;\n  font-size: 11px;\n}\n\n.sm-review-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2b3037;\n  font-size: 13px;\n  font-weight: 800;\n  line-height: 1.5;\n  overflow-wrap: anywhere;\n}\n\n.sm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 23px;\n}\n\n\n\n\n\n\n.sm-success[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sm-success-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 62px;\n  height: 62px;\n  margin: 0 auto 22px;\n  border-radius: 14px;\n  background: #e8f7ee;\n  color: #248b4d;\n  font-size: 28px;\n  font-weight: 900;\n}\n\n.sm-success[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #7d8590;\n  font-size: 13px;\n  line-height: 1.7;\n}\n\n.sm-success[_ngcontent-%COMP%]   .sm-actions[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin-top: 28px;\n}\n\n\n\n\n\n\n@media (max-width: 1200px) {\n  .sm-course-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .sm-timeline[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 800px) {\n  .sm-detail-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 22px;\n  }\n\n  .sm-detail-image[_ngcontent-%COMP%] {\n    height: 260px;\n  }\n\n  .sm-offer-box[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n\n@media (max-width: 680px) {\n  .sm-catalog-intro[_ngcontent-%COMP%] {\n    min-height: 245px;\n    padding: 28px 23px;\n  }\n\n  .sm-catalog-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n\n  .sm-catalog-number[_ngcontent-%COMP%] {\n    right: -12px;\n    top: 0;\n    font-size: 245px;\n  }\n\n  .sm-catalog-tools[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .sm-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .sm-filter-list[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n\n  .sm-filter[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .sm-course-grid[_ngcontent-%COMP%], \n   .sm-timeline[_ngcontent-%COMP%], \n   .sm-detail-columns[_ngcontent-%COMP%], \n   .sm-review-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .sm-course-image[_ngcontent-%COMP%] {\n    height: 195px;\n  }\n\n  .sm-course-content[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .sm-detail-image[_ngcontent-%COMP%] {\n    height: 220px;\n  }\n\n  .sm-detail-columns[_ngcontent-%COMP%] {\n    gap: 24px;\n  }\n\n  .sm-guide[_ngcontent-%COMP%], \n   .sm-course-detail[_ngcontent-%COMP%], \n   .sm-review[_ngcontent-%COMP%], \n   .sm-success[_ngcontent-%COMP%] {\n    padding: 21px;\n  }\n\n  .sm-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .sm-actions[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .sm-course-card[_ngcontent-%COMP%], \n   .sm-course-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .sm-filter[_ngcontent-%COMP%], \n   .primary-button[_ngcontent-%COMP%], \n   .secondary-button[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n\n\n\n.sm-checkout-share[_ngcontent-%COMP%] {margin:24px auto;padding:22px;border:1px solid #e6e8ed;border-radius:12px;background:#fafafa;max-width:680px;text-align:left}\n.sm-checkout-share[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {display:block;font-size:11px;font-weight:800;letter-spacing:.1em;margin-bottom:10px}\n.sm-checkout-share[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {width:100%;padding:13px;border:1px solid #d9dde3;border-radius:8px;background:white;color:#25272b}\n.sm-checkout-share[_ngcontent-%COMP%]   .sm-actions[_ngcontent-%COMP%]{justify-content:flex-start}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PortalComponent, [{
        type: Component,
        args: [{ standalone: true, imports: [
                    FormsModule,
                    CurrencyPipe,
                    DecimalPipe,
                    RouterLink,
                    DashboardLayoutComponent,
                ], template: "@if (service.loading()) {\n<main class=\"auth-page\">\n    <section class=\"auth-card\">\n        <div class=\"eyebrow\">SEXTA MARCHA</div>\n        <h1>Preparando seu acesso...</h1>\n        <p>Aguarde enquanto verificamos suas credenciais.</p>\n    </section>\n</main>\n} @else if (!service.user()) {\n<main class=\"auth-page\">\n    <section class=\"auth-card\">\n        <img class=\"auth-logo\" src=\"images/logo-sexta-marcha.png\" alt=\"Sexta Marcha\" />\n\n        <div class=\"eyebrow\">PORTAL COMERCIAL</div>\n        <h1>Bem-vindo de volta<span>.</span></h1>\n        <p>Acesse sua conta para gerenciar seus neg\u00F3cios.</p>\n\n        <form (ngSubmit)=\"login()\">\n            <label>\n                E-MAIL\n                <input name=\"email\" type=\"email\" autocomplete=\"username\" placeholder=\"seu@email.com\" [(ngModel)]=\"email\"\n                    required />\n            </label>\n\n            <label>\n                SENHA\n                <input name=\"password\" type=\"password\" autocomplete=\"current-password\" placeholder=\"Sua senha\"\n                    [(ngModel)]=\"password\" required />\n            </label>\n\n            <button class=\"primary-button full\" type=\"submit\" [disabled]=\"busy()\">\n                {{ busy() ? 'Entrando...' : 'Acessar plataforma \u2192' }}\n            </button>\n        </form>\n\n        <button class=\"link-button\" type=\"button\" (click)=\"reset()\">\n            Esqueci minha senha\n        </button>\n\n        <p class=\"auth-bottom\">\n            Ainda n\u00E3o \u00E9 parceiro?\n            <a routerLink=\"/cadastro-despachante\">Cadastre-se</a>\n        </p>\n\n        @if (error()) {\n        <p class=\"feedback-error\" role=\"alert\">\n            {{ error() }}\n        </p>\n        }\n\n        @if (notice()) {\n        <p class=\"feedback-notice\" role=\"status\">\n            {{ notice() }}\n        </p>\n        }\n    </section>\n</main>\n} @else if (service.role() === \"master\") {\n<main class=\"auth-page\">\n    <section class=\"auth-card\">\n        <div class=\"eyebrow\">ACESSO ADMINISTRATIVO</div>\n        <h1>Ol\u00E1, administrador<span>.</span></h1>\n        <p>Sua conta possui permiss\u00E3o de gest\u00E3o.</p>\n\n        <a class=\"primary-button full\" routerLink=\"/master\">\n            Abrir painel Master \u2192\n        </a>\n\n        <button class=\"link-button\" type=\"button\" (click)=\"logout()\">\n            Sair da conta\n        </button>\n    </section>\n</main>\n} @else if (service.role() !== \"partner\") {\n<main class=\"auth-page\">\n    <section class=\"auth-card\">\n        <div class=\"eyebrow\">CADASTRO DE PARCEIRO</div>\n        <h1>Acesso em an\u00E1lise<span>.</span></h1>\n\n        <p>\n            Ol\u00E1, {{ service.profile()?.name || service.user()?.email }}.\n            Seu cadastro precisa ser aprovado antes de liberar\n            as funcionalidades comerciais.\n        </p>\n\n        <div class=\"pending-status\">\n            Status:\n            {{ service.profile()?.status || 'N\u00E3o localizado' }}\n        </div>\n\n        <button class=\"primary-button full\" type=\"button\" (click)=\"service.reloadProfile()\">\n            Atualizar situa\u00E7\u00E3o\n        </button>\n\n        <button class=\"link-button\" type=\"button\" (click)=\"logout()\">\n            Sair da conta\n        </button>\n    </section>\n</main>\n} @else {\n<app-dashboard-layout mode=\"partner\" [active]=\"section()\" [name]=\"service.profile()?.name || ''\"\n    [business]=\"service.profile()?.business || ''\" (sectionChange)=\"selectSection($event)\" (logout)=\"logout()\">\n\n    <!-- ========================================= -->\n    <!-- VIS\u00C3O GERAL -->\n    <!-- ========================================= -->\n\n    @if (section() === \"overview\") {\n    <div class=\"page-heading\">\n        <div>\n            <div class=\"eyebrow\">VIS\u00C3O GERAL</div>\n            <h1>Seu neg\u00F3cio em movimento<span>.</span></h1>\n            <p>\n                Acompanhe sua opera\u00E7\u00E3o comercial em um s\u00F3 lugar.\n            </p>\n        </div>\n\n        <button class=\"secondary-button\" type=\"button\" (click)=\"refresh()\">\n            Atualizar dados \u21BB\n        </button>\n    </div>\n\n    <section class=\"welcome-banner\">\n        <div>\n            <span class=\"banner-label\">\n                PARCEIRO SEXTA MARCHA\n            </span>\n\n            <h2>Ol\u00E1, {{ service.profile()?.name }}!</h2>\n\n            <p>\n                Sua central de vendas est\u00E1 pronta.\n                Explore os cursos de tr\u00E2nsito dispon\u00EDveis\n                e amplie suas oportunidades comerciais.\n            </p>\n\n            <button class=\"primary-button\" type=\"button\" (click)=\"selectSection('courses')\">\n                Explorar cursos \u2192\n            </button>\n        </div>\n\n        <div class=\"banner-decoration\" aria-hidden=\"true\">\n            6\n        </div>\n    </section>\n\n    <section class=\"metrics\">\n        <article class=\"metric-card\">\n            <span>Vendas confirmadas</span>\n            <strong>{{ count | number }}</strong>\n            <small>Pagamentos reais confirmados</small>\n        </article>\n\n        <article class=\"metric-card\">\n            <span>Faturamento</span>\n            <strong>{{ revenue | currency:'BRL' }}</strong>\n            <small>Total das vendas reais pagas</small>\n        </article>\n\n        <article class=\"metric-card\">\n            <span>Comiss\u00F5es registradas</span>\n            <strong>{{ commission | currency:'BRL' }}</strong>\n            <small>Sobre vendas reais confirmadas</small>\n        </article>\n    </section>\n\n    <section class=\"dashboard-grid\">\n        <article class=\"content-card\">\n            <div class=\"card-header\">\n                <div>\n                    <div class=\"eyebrow\">OPERA\u00C7\u00C3O COMERCIAL</div>\n                    <h2>Comece por aqui</h2>\n                </div>\n            </div>\n\n            <div class=\"quick-action\">\n                <div class=\"quick-icon\">01</div>\n                <div>\n                    <strong>Conhe\u00E7a o cat\u00E1logo</strong>\n                    <p>Veja os cursos que poder\u00E1 oferecer.</p>\n                </div>\n                <button type=\"button\" (click)=\"selectSection('courses')\" aria-label=\"Abrir cat\u00E1logo\">\n                    \u2192\n                </button>\n            </div>\n\n            <div class=\"quick-action\">\n                <div class=\"quick-icon\">02</div>\n                <div>\n                    <strong>Inicie uma venda</strong>\n                    <p>Conhe\u00E7a a jornada comercial.</p>\n                </div>\n                <button type=\"button\" (click)=\"startNewSale()\" aria-label=\"Iniciar venda\">\n                    \u2192\n                </button>\n            </div>\n\n            <div class=\"quick-action\">\n                <div class=\"quick-icon\">03</div>\n                <div>\n                    <strong>Acompanhe resultados</strong>\n                    <p>Consulte suas vendas registradas.</p>\n                </div>\n                <button type=\"button\" (click)=\"selectSection('sales')\" aria-label=\"Consultar vendas\">\n                    \u2192\n                </button>\n            </div>\n        </article>\n\n        <article class=\"content-card\">\n            <div class=\"eyebrow\">MEU ESTABELECIMENTO</div>\n            <h2>{{ service.profile()?.business }}</h2>\n\n            <span class=\"active-pill\">\n                \u25CF Parceiro ativo\n            </span>\n\n            <div class=\"business-details\">\n                <div>\n                    <span>Respons\u00E1vel</span>\n                    <strong>{{ service.profile()?.name }}</strong>\n                </div>\n\n                <div>\n                    <span>Localiza\u00E7\u00E3o</span>\n                    <strong>{{ service.profile()?.city }}</strong>\n                </div>\n\n                <div>\n                    <span>CRDD</span>\n                    <strong>{{ service.profile()?.crdd }}</strong>\n                </div>\n            </div>\n\n            <button class=\"secondary-button full\" type=\"button\" (click)=\"selectSection('business')\">\n                Ver meu cadastro\n            </button>\n        </article>\n    </section>\n    }\n\n    <!-- ========================================= -->\n    <!-- CAT\u00C1LOGO DE CURSOS -->\n    <!-- ========================================= -->\n\n    @if (section() === \"courses\") {\n    <div class=\"page-heading\">\n        <div>\n            <div class=\"eyebrow\">EDUCA\u00C7\u00C3O NO TR\u00C2NSITO</div>\n            <h1>Cat\u00E1logo de cursos<span>.</span></h1>\n            <p>\n                Explore nossas solu\u00E7\u00F5es de educa\u00E7\u00E3o e encontre\n                novas oportunidades para seus clientes.\n            </p>\n        </div>\n    </div>\n\n    <section class=\"sm-catalog-intro\">\n        <div>\n            <span class=\"sm-overline\">\n                SEXTA MARCHA / EDUCA\u00C7\u00C3O\n            </span>\n\n            <h2>\n                Mais oportunidades para quem vive o tr\u00E2nsito.\n            </h2>\n\n            <p>\n                Conhe\u00E7a os cursos, oriente seus clientes\n                e acompanhe suas vendas em uma \u00FAnica plataforma.\n            </p>\n\n            <button type=\"button\" class=\"primary-button\" (click)=\"startNewSale()\">\n                Como funciona a venda \u2192\n            </button>\n        </div>\n\n        <span class=\"sm-catalog-number\" aria-hidden=\"true\">\n            6\n        </span>\n    </section>\n\n    <div class=\"sm-catalog-tools\">\n        <label class=\"sm-search\">\n            <span>ENCONTRE UM CURSO</span>\n\n            <input type=\"search\" [ngModel]=\"courseSearch()\" (ngModelChange)=\"courseSearch.set($event)\"\n                placeholder=\"Pesquisar cursos...\" />\n        </label>\n\n        <div class=\"sm-filter-list\">\n            @for (category of categories; track category) {\n            <button type=\"button\" class=\"sm-filter\" [class.is-active]=\"categoryFilter() === category\"\n                (click)=\"categoryFilter.set(category)\">\n                {{ category }}\n            </button>\n            }\n        </div>\n    </div>\n\n    <section class=\"sm-course-grid\">\n        @for (course of filteredCourses; track course.id) {\n        <article class=\"sm-course-card\">\n            <div class=\"sm-course-image\">\n                <img [src]=\"course.image\" [alt]=\"course.title\" loading=\"lazy\"\n                    onerror=\"this.onerror=null;this.src='/images/course-fallback.webp'\" />\n\n                <span class=\"sm-course-image-label\">\n                    {{ course.category }}\n                </span>\n            </div>\n\n            <div class=\"sm-course-content\">\n                <div class=\"sm-course-meta\">\n                    @if (course.hours) {\n                    <span>\n                        {{ course.hours }} horas-aula\n                    </span>\n                    }\n\n                    <span>\n                        {{\n                        course.offers.length\n                        ? 'Homologa\u00E7\u00E3o dispon\u00EDvel'\n                        : 'Em prepara\u00E7\u00E3o'\n                        }}\n                    </span>\n                </div>\n\n                <h2>{{ course.title }}</h2>\n\n                <p>{{ course.description }}</p>\n\n                <div class=\"sm-course-audience\">\n                    <strong>INDICADO PARA</strong>\n                    <span>{{ course.audience }}</span>\n                </div>\n\n                <button type=\"button\" class=\"secondary-button full\" (click)=\"openCourse(course)\">\n                    Conhecer curso \u2192\n                </button>\n            </div>\n        </article>\n        } @empty {\n        <div class=\"content-card\">\n            Nenhum curso encontrado.\n        </div>\n        }\n    </section>\n    }\n\n    <!-- ========================================= -->\n    <!-- NOVA VENDA -->\n    <!-- ========================================= -->\n\n    @if (section() === \"new-sale\") {\n    <div class=\"page-heading\">\n        <div>\n            <div class=\"eyebrow\">CENTRAL COMERCIAL</div>\n            <h1>Nova venda<span>.</span></h1>\n            <p>\n                Uma jornada simples, do curso \u00E0 matr\u00EDcula.\n            </p>\n        </div>\n\n        <button type=\"button\" class=\"secondary-button\" (click)=\"openCatalog()\">\n            Ver cat\u00E1logo\n        </button>\n    </div>\n\n    <!-- GUIA DO PARCEIRO -->\n\n    @if (saleStep() === \"guide\") {\n    <section class=\"content-card sm-guide\">\n        <div class=\"eyebrow\">GUIA DO PARCEIRO</div>\n\n        <h2>Como funciona uma venda?</h2>\n\n        <p class=\"muted\">\n            Voc\u00EA identifica a necessidade do cliente,\n            registra o pedido e acompanha a opera\u00E7\u00E3o.\n        </p>\n\n        <div class=\"sm-timeline\">\n            @for (step of saleTimeline; track step.number) {\n            <div class=\"sm-timeline-item\">\n                <div class=\"sm-timeline-marker\">\n                    {{ step.number }}\n                </div>\n\n                <div>\n                    <h3>{{ step.title }}</h3>\n                    <p>{{ step.description }}</p>\n                </div>\n            </div>\n            }\n        </div>\n\n        <div class=\"sm-guide-notice\">\n            A matr\u00EDcula depende da confirma\u00E7\u00E3o do pagamento\n            e da aceita\u00E7\u00E3o pela institui\u00E7\u00E3o respons\u00E1vel.\n            Durante a homologa\u00E7\u00E3o, os pagamentos s\u00E3o simulados.\n        </div>\n\n        <button type=\"button\" class=\"primary-button\" (click)=\"openCatalog()\">\n            Escolher um curso \u2192\n        </button>\n    </section>\n    }\n\n    <!-- DETALHES DO CURSO -->\n\n    @if (saleStep() === \"details\") {\n    @if (selectedCourse(); as course) {\n    <section class=\"content-card sm-course-detail\">\n        <div class=\"eyebrow\">\n            INFORMA\u00C7\u00D5ES DO CURSO\n        </div>\n\n        <div class=\"sm-detail-layout\">\n            <div class=\"sm-detail-image\">\n                <img [src]=\"course.image\" [alt]=\"course.title\"\n                    onerror=\"this.onerror=null;this.src='/images/course-fallback.webp'\" />\n            </div>\n\n            <div>\n                <span class=\"sm-detail-category\">\n                    {{ course.category }}\n                </span>\n\n                <h2>{{ course.title }}</h2>\n\n                <p>{{ course.description }}</p>\n\n                <p>\n                    <strong>P\u00FAblico-alvo:</strong>\n                    {{ course.audience }}\n                </p>\n\n                @if (course.hours) {\n                <p>\n                    <strong>Carga hor\u00E1ria:</strong>\n                    {{ course.hours }} horas-aula\n                </p>\n                }\n\n                @if (course.notes) {\n                <p class=\"muted\">\n                    {{ course.notes }}\n                </p>\n                }\n            </div>\n        </div>\n\n        <div class=\"sm-detail-columns\">\n            <div>\n                <h3>O que o aluno encontrar\u00E1</h3>\n\n                <ul>\n                    @for (benefit of course.benefits; track benefit) {\n                    <li>{{ benefit }}</li>\n                    }\n                </ul>\n            </div>\n\n            <div>\n                <h3>Antes de iniciar</h3>\n\n                <ul>\n                    @for (requirement of course.requirements; track requirement) {\n                    <li>{{ requirement }}</li>\n                    }\n                </ul>\n            </div>\n        </div>\n\n        <div class=\"sm-offer-box\">\n            <div>\n                <div class=\"eyebrow\">\n                    DISPONIBILIDADE COMERCIAL\n                </div>\n\n                @if (canCreateTestOrder) {\n                <h3>Reciclagem \u2014 Santa Catarina</h3>\n\n                <strong class=\"sm-offer-price\">\n                    {{ selectedPrice | currency:'BRL' }}\n                </strong>\n\n                <p class=\"muted\">\n                    Oferta exclusiva de homologa\u00E7\u00E3o.\n                    Nenhuma cobran\u00E7a real ser\u00E1 realizada.\n                </p>\n                } @else {\n                <h3>Oferta em prepara\u00E7\u00E3o</h3>\n\n                <p class=\"muted\">\n                    Estamos aguardando a confirma\u00E7\u00E3o de pre\u00E7o,\n                    disponibilidade e condi\u00E7\u00F5es comerciais.\n                </p>\n                }\n            </div>\n\n            <button type=\"button\" class=\"primary-button\" [disabled]=\"!canCreateTestOrder\" (click)=\"continueToStudent()\">\n                {{\n                canCreateTestOrder\n                ? 'Iniciar cadastro \u2192'\n                : 'Indispon\u00EDvel para venda'\n                }}\n            </button>\n        </div>\n\n        @if (orderError()) {\n        <p class=\"feedback-error\" role=\"alert\">\n            {{ orderError() }}\n        </p>\n        }\n    </section>\n    }\n    }\n\n    <!-- CADASTRO DO ALUNO -->\n\n    @if (saleStep() === \"student\") {\n    <div class=\"sm-step-header\">\n        <span>ETAPA 01 / CADASTRO</span>\n\n        <button type=\"button\" class=\"secondary-button\" (click)=\"backToDetails()\">\n            \u2190 Voltar ao curso\n        </button>\n    </div>\n\n    <form #studentForm=\"ngForm\" class=\"content-card enrollment-form\" (ngSubmit)=\"continueToReview()\">\n        <div class=\"eyebrow\">\n            01 / IDENTIFICA\u00C7\u00C3O\n        </div>\n\n        <h2>Dados do aluno</h2>\n\n        <div class=\"enrollment-grid\">\n            <label class=\"full-field\">\n                Nome completo\n\n                <input name=\"fullName\" [(ngModel)]=\"student.fullName\" required minlength=\"3\" autocomplete=\"name\" />\n            </label>\n\n            <label>\n                CPF\n\n                <input name=\"document\" [(ngModel)]=\"student.document\" required maxlength=\"14\"\n                    placeholder=\"000.000.000-00\" />\n            </label>\n\n            <label>\n                Data de nascimento\n\n                <input name=\"dateOfBirth\" type=\"date\" [(ngModel)]=\"student.dateOfBirth\" required />\n            </label>\n\n            <label>\n                E-mail\n\n                <input name=\"studentEmail\" type=\"email\" [(ngModel)]=\"student.email\" required />\n            </label>\n\n            <label>\n                WhatsApp\n\n                <input name=\"phone\" type=\"tel\" [(ngModel)]=\"student.phone\" required />\n            </label>\n        </div>\n\n        <div class=\"eyebrow\">\n            02 / HABILITA\u00C7\u00C3O\n        </div>\n\n        <h2>Dados da CNH</h2>\n\n        <div class=\"enrollment-grid\">\n            <label>\n                N\u00FAmero de registro da CNH\n\n                <input name=\"cnh\" [(ngModel)]=\"student.cnh\" required />\n            </label>\n\n            <label>\n                Categoria\n\n                <select name=\"cnhCategory\" [(ngModel)]=\"student.cnhCategory\" required>\n                    @for (\n                    cat of ['A', 'B', 'AB', 'C', 'D', 'E', 'AC', 'AD', 'AE'];\n                    track cat\n                    ) {\n                    <option [value]=\"cat\">\n                        {{ cat }}\n                    </option>\n                    }\n                </select>\n            </label>\n        </div>\n\n        <div class=\"eyebrow\">\n            03 / ENDERE\u00C7O\n        </div>\n\n        <h2>Endere\u00E7o do aluno</h2>\n\n        <div class=\"enrollment-grid\">\n            <label>\n                CEP\n\n                <input name=\"zipCode\" [(ngModel)]=\"student.address.zipCode\" required />\n            </label>\n\n            <label>\n                Estado (UF)\n\n                <input name=\"state\" [(ngModel)]=\"student.address.state\" required maxlength=\"2\" />\n            </label>\n\n            <label class=\"full-field\">\n                Logradouro\n\n                <input name=\"street\" [(ngModel)]=\"student.address.street\" required />\n            </label>\n\n            <label>\n                N\u00FAmero\n\n                <input name=\"number\" [(ngModel)]=\"student.address.number\" required />\n            </label>\n\n            <label>\n                Complemento\n\n                <input name=\"complement\" [(ngModel)]=\"student.address.complement\" />\n            </label>\n\n            <label>\n                Bairro\n\n                <input name=\"district\" [(ngModel)]=\"student.address.district\" required />\n            </label>\n\n            <label>\n                Cidade\n\n                <input name=\"city\" [(ngModel)]=\"student.address.city\" required />\n            </label>\n        </div>\n\n        <label class=\"consent-field\">\n            <input type=\"checkbox\" name=\"orderConsent\" [(ngModel)]=\"orderConsent\" required />\n\n            Confirmo que estou utilizando dados fict\u00EDcios\n            autorizados para homologa\u00E7\u00E3o.\n        </label>\n\n        @if (orderError()) {\n        <p class=\"feedback-error\" role=\"alert\">\n            {{ orderError() }}\n        </p>\n        }\n\n        <button type=\"submit\" class=\"primary-button\" [disabled]=\"studentForm.invalid || !orderConsent\">\n            Revisar pedido \u2192\n        </button>\n    </form>\n    }\n\n    <!-- REVIS\u00C3O DO PEDIDO -->\n\n    @if (saleStep() === \"review\") {\n    <section class=\"content-card sm-review\">\n        <div class=\"eyebrow\">\n            ETAPA 02 / REVIS\u00C3O\n        </div>\n\n        <h2>Confira antes de confirmar.</h2>\n\n        <p class=\"muted\">\n            Revise os dados e a oferta selecionada.\n        </p>\n\n        <div class=\"sm-review-grid\">\n            <div>\n                <span>Curso</span>\n                <strong>\n                    {{ selectedCourse()?.title }}\n                </strong>\n            </div>\n\n            <div>\n                <span>Oferta</span>\n                <strong>{{ selectedOfferId }}</strong>\n            </div>\n\n            <div>\n                <span>Valor de homologa\u00E7\u00E3o</span>\n                <strong>\n                    {{ selectedPrice | currency:'BRL' }}\n                </strong>\n            </div>\n\n            <div>\n                <span>Aluno</span>\n                <strong>{{ student.fullName }}</strong>\n            </div>\n\n            <div>\n                <span>CPF</span>\n                <strong>{{ student.document }}</strong>\n            </div>\n\n            <div>\n                <span>E-mail</span>\n                <strong>{{ student.email }}</strong>\n            </div>\n\n            <div>\n                <span>WhatsApp</span>\n                <strong>{{ student.phone }}</strong>\n            </div>\n\n            <div>\n                <span>CNH</span>\n                <strong>{{ student.cnh }}</strong>\n            </div>\n\n            <div>\n                <span>Categoria</span>\n                <strong>{{ student.cnhCategory }}</strong>\n            </div>\n\n            <div>\n                <span>Estado da oferta</span>\n                <strong>Santa Catarina</strong>\n            </div>\n        </div>\n\n        <div class=\"sm-guide-notice\">\n            Este pedido ser\u00E1 criado no ambiente de testes.\n            N\u00E3o haver\u00E1 cobran\u00E7a real nem envio ao ICETRAN.\n        </div>\n\n        @if (orderError()) {\n        <p class=\"feedback-error\" role=\"alert\">\n            {{ orderError() }}\n        </p>\n        }\n\n        <div class=\"sm-actions\">\n            <button type=\"button\" class=\"secondary-button\" [disabled]=\"orderBusy()\" (click)=\"backToStudent()\">\n                \u2190 Corrigir dados\n            </button>\n\n            <button type=\"button\" class=\"primary-button\" [disabled]=\"orderBusy()\" (click)=\"submitCourseOrder()\">\n                {{\n                orderBusy()\n                ? 'Criando pedido...'\n                : 'Confirmar pedido de teste \u2192'\n                }}\n            </button>\n        </div>\n    </section>\n    }\n\n    <!-- PEDIDO CRIADO -->\n\n    @if (saleStep() === \"success\") {\n    <section class=\"content-card sm-success\">\n        <div class=\"sm-success-icon\">\u2713</div>\n\n        <div class=\"eyebrow\">\n            PEDIDO REGISTRADO\n        </div>\n\n        <h2>Pedido criado com sucesso.</h2>\n\n        <p>{{ orderSuccess() }}</p>\n\n        <p class=\"muted\">\n            O despachante concluiu o cadastro. Agora envie o link para o cliente finalizar a compra. A comiss\u00E3o s\u00F3 ser\u00E1 simulada ap\u00F3s a confirma\u00E7\u00E3o do pagamento na p\u00E1gina do cliente.\n        </p>\n\n        @if (checkoutUrl()) {\n          <div class=\"sm-checkout-share\">\n            <label for=\"checkout-link\">LINK DE COMPRA DO CLIENTE</label>\n            <input id=\"checkout-link\" type=\"text\" [value]=\"checkoutUrl()\" readonly />\n            <div class=\"sm-actions\">\n              <button type=\"button\" class=\"primary-button\" (click)=\"shareCheckout()\">Compartilhar no WhatsApp</button>\n              <button type=\"button\" class=\"secondary-button\" (click)=\"copyCheckout()\">{{checkoutCopied() ? 'Copiado!' : 'Copiar link'}}</button>\n            </div>\n          </div>\n        }\n        <div class=\"sm-actions\">\n            <button type=\"button\" class=\"primary-button\" (click)=\"selectSection('sales')\">\n                Acompanhar pedido \u2192\n            </button>\n\n            <button type=\"button\" class=\"secondary-button\" (click)=\"startNewSale()\">\n                Nova venda\n            </button>\n        </div>\n    </section>\n    }\n    }\n\n    <!-- ========================================= -->\n    <!-- CLIENTES -->\n    <!-- ========================================= -->\n\n    @if (section() === \"customers\") {\n    <div class=\"page-heading\">\n        <div>\n            <div class=\"eyebrow\">RELACIONAMENTO</div>\n            <h1>Meus clientes<span>.</span></h1>\n            <p>\n                Acompanhe suas futuras indica\u00E7\u00F5es comerciais.\n            </p>\n        </div>\n    </div>\n\n    <section class=\"content-card empty-module\">\n        <div class=\"module-icon\">\u2667</div>\n\n        <h2>Gest\u00E3o de clientes</h2>\n\n        <p>\n            Este m\u00F3dulo ser\u00E1 conectado aos clientes\n            e \u00E0s indica\u00E7\u00F5es atribu\u00EDdas ao seu estabelecimento.\n        </p>\n    </section>\n    }\n\n    <!-- ========================================= -->\n    <!-- MINHAS VENDAS -->\n    <!-- ========================================= -->\n\n    @if (section() === \"sales\") {\n    <div class=\"page-heading\">\n        <div>\n            <div class=\"eyebrow\">HIST\u00D3RICO COMERCIAL</div>\n            <h1>Minhas vendas<span>.</span></h1>\n\n            <p>\n                Consulte os pedidos e acompanhe os pagamentos\n                da sua opera\u00E7\u00E3o.\n            </p>\n        </div>\n\n        <button class=\"secondary-button\" type=\"button\" (click)=\"refresh(); refreshCourseOrders()\">\n            Atualizar \u21BB\n        </button>\n    </div>\n\n    <section class=\"content-card\">\n        <div class=\"card-header\">\n            <div>\n                <div class=\"eyebrow\">\n                    RESULTADOS FINANCEIROS\n                </div>\n\n                <h2>Vendas registradas</h2>\n\n                <p class=\"muted\">\n                    Opera\u00E7\u00F5es simuladas s\u00E3o identificadas\n                    e n\u00E3o entram nos indicadores reais.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"table-scroll\">\n            <table>\n                <thead>\n                    <tr>\n                        <th>Curso</th>\n                        <th>Valor</th>\n                        <th>Comiss\u00E3o</th>\n                        <th>Status</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    @for (sale of service.sales(); track sale.id) {\n                    <tr>\n                        <td>\n                            {{ courseName(sale.courseId) }}\n                        </td>\n\n                        <td>\n                            {{ sale.amount | currency:'BRL' }}\n                        </td>\n\n                        <td>\n                            {{ sale.commissionAmount | currency:'BRL' }}\n                        </td>\n\n                        <td>\n                            @if (\n                            sale.simulated === true ||\n                            sale.environment === 'sandbox'\n                            ) {\n                            <span class=\"table-status\">\n                                Teste \u00B7 pagamento simulado\n                            </span>\n                            } @else {\n                            <span class=\"table-status\">\n                                {{ sale.status }}\n                            </span>\n                            }\n                        </td>\n                    </tr>\n                    }\n                </tbody>\n            </table>\n        </div>\n\n        @if (!service.sales().length) {\n        <div class=\"table-empty\">\n            Nenhum pagamento registrado at\u00E9 o momento.\n        </div>\n        }\n    </section>\n\n    <!-- PEDIDOS DE CURSOS -->\n\n    <section class=\"content-card\">\n        <div class=\"card-header\">\n            <div>\n                <div class=\"eyebrow\">\n                    HOMOLOGA\u00C7\u00C3O\n                </div>\n\n                <h2>Pedidos de cursos</h2>\n\n                <p class=\"muted\">\n                    Acompanhe o pagamento e a matr\u00EDcula\n                    de cada pedido.\n                </p>\n            </div>\n\n            <button class=\"secondary-button\" type=\"button\" (click)=\"refreshCourseOrders()\">\n                Atualizar pedidos\n            </button>\n        </div>\n\n        @if (orderError()) {\n        <p class=\"feedback-error\" role=\"alert\">\n            {{ orderError() }}\n        </p>\n        }\n\n        <div class=\"table-scroll\">\n            <table>\n                <thead>\n                    <tr>\n                        <th>Pedido</th>\n                        <th>Curso</th>\n                        <th>Valor</th>\n                        <th>Pagamento</th>\n                        <th>Matr\u00EDcula</th><th>Link</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    @for (\n                    order of courseOrders.orders();\n                    track order.id\n                    ) {\n                    <tr>\n                        <td>\n                            {{ order.id.slice(0, 12) }}\n                        </td>\n\n                        <td>\n                            {{ order.courseTitle }}\n                        </td>\n\n                        <td>\n                            {{\n                            order.amountCents / 100\n                            | currency:'BRL'\n                            }}\n                        </td>\n\n                        <td>\n                            @if (\n                            order.environment === 'sandbox' &&\n                            order.paymentStatus === 'paid'\n                            ) {\n                            <span class=\"table-status\">\n                                Pago (simulado)\n                            </span>\n                            } @else {\n                            <span class=\"table-status\">\n                                {{ order.paymentStatus }}\n                            </span>\n                            }\n                        </td>\n\n                        <td>\n                            {{ order.enrollmentStatus }}\n                        </td><td><button type=\"button\" class=\"secondary-button\" (click)=\"regenerateCheckout(order.id)\">Gerar link</button></td>\n                    </tr>\n                    } @empty {\n                    <tr>\n                        <td colspan=\"6\">\n                            Nenhum pedido de teste registrado.\n                        </td>\n                    </tr>\n                    }\n                </tbody>\n            </table>\n        </div>\n    </section>\n    }\n\n    <!-- ========================================= -->\n    <!-- COMISS\u00D5ES -->\n    <!-- ========================================= -->\n\n    @if (section() === \"commissions\") {\n    <div class=\"page-heading\">\n        <div>\n            <div class=\"eyebrow\">FINANCEIRO</div>\n            <h1>Minhas comiss\u00F5es<span>.</span></h1>\n\n            <p>\n                Acompanhe suas comiss\u00F5es reais\n                e opera\u00E7\u00F5es de homologa\u00E7\u00E3o.\n            </p>\n        </div>\n\n        <button class=\"secondary-button\" type=\"button\" (click)=\"refresh()\">\n            Atualizar \u21BB\n        </button>\n    </div>\n\n    <section class=\"metrics\">\n        <article class=\"metric-card\">\n            <span>Comiss\u00F5es reais</span>\n\n            <strong>\n                {{ commission | currency:'BRL' }}\n            </strong>\n\n            <small>\n                Somente vendas reais confirmadas\n            </small>\n        </article>\n\n        <article class=\"metric-card\">\n            <span>Comiss\u00F5es simuladas</span>\n\n            <strong>\n                {{ simulatedCommission | currency:'BRL' }}\n            </strong>\n\n            <small>\n                Valores fict\u00EDcios de homologa\u00E7\u00E3o\n            </small>\n        </article>\n\n        <article class=\"metric-card\">\n            <span>Vendas simuladas</span>\n\n            <strong>{{ simulatedCount }}</strong>\n\n            <small>\n                Pagamentos de teste registrados\n            </small>\n        </article>\n    </section>\n\n    <section class=\"content-card\">\n        <div class=\"eyebrow\">\n            HOMOLOGA\u00C7\u00C3O FINANCEIRA\n        </div>\n\n        <h2>Detalhamento de comiss\u00F5es</h2>\n\n        <div class=\"table-scroll\">\n            <table>\n                <thead>\n                    <tr>\n                        <th>Curso</th>\n                        <th>Venda</th>\n                        <th>Comiss\u00E3o</th>\n                        <th>Situa\u00E7\u00E3o</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    @for (\n                    sale of simulatedSales;\n                    track sale.id\n                    ) {\n                    <tr>\n                        <td>\n                            {{ courseName(sale.courseId) }}\n                        </td>\n\n                        <td>\n                            {{ sale.amount | currency:'BRL' }}\n                        </td>\n\n                        <td>\n                            <strong>\n                                {{\n                                sale.commissionAmount\n                                | currency:'BRL'\n                                }}\n                            </strong>\n                        </td>\n\n                        <td>\n                            <span class=\"status-pill is-pending\">\n                                Simulada\n                            </span>\n                        </td>\n                    </tr>\n                    } @empty {\n                    <tr>\n                        <td colspan=\"4\">\n                            Nenhuma comiss\u00E3o simulada registrada.\n                        </td>\n                    </tr>\n                    }\n                </tbody>\n            </table>\n        </div>\n\n        <p class=\"muted\">\n            Os valores de homologa\u00E7\u00E3o n\u00E3o representam\n            saldo dispon\u00EDvel e n\u00E3o podem ser sacados\n            ou transferidos.\n        </p>\n    </section>\n    }\n\n    <!-- ========================================= -->\n    <!-- MEU ESTABELECIMENTO -->\n    <!-- ========================================= -->\n\n    @if (section() === \"business\") {\n    <div class=\"page-heading\">\n        <div>\n            <div class=\"eyebrow\">MINHA CONTA</div>\n            <h1>Meu estabelecimento<span>.</span></h1>\n\n            <p>\n                Informa\u00E7\u00F5es do seu cadastro de parceiro.\n            </p>\n        </div>\n    </div>\n\n    <section class=\"content-card\">\n        <div class=\"details-grid\">\n            <div>\n                <span>Estabelecimento</span>\n                <strong>\n                    {{ service.profile()?.business }}\n                </strong>\n            </div>\n\n            <div>\n                <span>Respons\u00E1vel</span>\n                <strong>\n                    {{ service.profile()?.name }}\n                </strong>\n            </div>\n\n            <div>\n                <span>CNPJ</span>\n                <strong>\n                    {{ service.profile()?.cnpj }}\n                </strong>\n            </div>\n\n            <div>\n                <span>CRDD</span>\n                <strong>\n                    {{ service.profile()?.crdd }}\n                </strong>\n            </div>\n\n            <div>\n                <span>E-mail</span>\n                <strong>\n                    {{ service.profile()?.email }}\n                </strong>\n            </div>\n\n            <div>\n                <span>WhatsApp</span>\n                <strong>\n                    {{ service.profile()?.phone }}\n                </strong>\n            </div>\n\n            <div>\n                <span>Cidade</span>\n                <strong>\n                    {{ service.profile()?.city }}\n                </strong>\n            </div>\n\n            <div>\n                <span>Situa\u00E7\u00E3o</span>\n                <strong>\n                    {{ service.profile()?.status }}\n                </strong>\n            </div>\n        </div>\n    </section>\n    }\n\n    <!-- ========================================= -->\n    <!-- MENSAGENS GERAIS -->\n    <!-- ========================================= -->\n\n    @if (error() || service.error()) {\n    <p class=\"feedback-error\" role=\"alert\">\n        {{ error() || service.error() }}\n    </p>\n    }\n\n</app-dashboard-layout>\n}", styles: [":host {\n  display: block;\n  --orange: var(--brand-orange, #f47721);\n  color: #20242a;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\np {\n  margin-top: 0;\n}\n\n.eyebrow {\n  color: var(--orange);\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n  margin-bottom: 12px;\n}\n\n.page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 28px;\n}\n\n.page-heading h1 {\n  font-size: clamp(28px, 3vw, 39px);\n  font-weight: 900;\n  letter-spacing: -0.05em;\n  margin-bottom: 9px;\n  line-height: 1.12;\n}\n\n.page-heading h1 span,\n.auth-card h1 span {\n  color: var(--orange);\n}\n\n.page-heading p,\n.muted {\n  color: #818995;\n  font-size: 13px;\n  line-height: 1.7;\n  margin-bottom: 0;\n}\n\n.primary-button,\n.secondary-button {\n  border: 0;\n  border-radius: 9px;\n  padding: 13px 19px;\n  min-height: 43px;\n  font: inherit;\n  font-size: 12px;\n  font-weight: 850;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.primary-button {\n  background: var(--orange);\n  color: #171717;\n}\n\n.secondary-button {\n  background: #fff;\n  border: 1px solid #dfe2e7;\n  color: #343a44;\n}\n\n.primary-button:hover {\n  filter: brightness(0.94);\n}\n\n.secondary-button:hover {\n  border-color: var(--orange);\n}\n\n.full {\n  width: 100%;\n}\n\n.welcome-banner {\n  position: relative;\n  overflow: hidden;\n  background: #1a1d22;\n  border-radius: 16px;\n  color: white;\n  padding: 35px 38px;\n  margin-bottom: 20px;\n}\n\n.welcome-banner > div:first-child {\n  position: relative;\n  z-index: 1;\n  max-width: 570px;\n}\n\n.banner-label {\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.13em;\n  color: var(--orange);\n}\n\n.welcome-banner h2 {\n  font-size: clamp(24px, 3vw, 34px);\n  letter-spacing: -0.04em;\n  margin: 14px 0;\n}\n\n.welcome-banner p {\n  color: #aeb4bd;\n  line-height: 1.7;\n  font-size: 13px;\n  max-width: 470px;\n  margin-bottom: 22px;\n}\n\n.banner-decoration {\n  position: absolute;\n  right: 45px;\n  top: -75px;\n  font-size: 340px;\n  font-weight: 950;\n  line-height: 1;\n  color: #ffffff08;\n  pointer-events: none;\n}\n\n.metrics {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.metric-card,\n.content-card,\n.course-card {\n  background: white;\n  border: 1px solid #e7e9ed;\n  border-radius: 13px;\n}\n\n.metric-card {\n  padding: 25px;\n}\n\n.metric-card span {\n  color: #818995;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.metric-card strong {\n  display: block;\n  color: #22262d;\n  font-size: clamp(22px, 2.3vw, 31px);\n  letter-spacing: -0.045em;\n  margin: 13px 0;\n  overflow-wrap: anywhere;\n}\n\n.metric-card small {\n  color: #a2a8b1;\n  font-size: 11px;\n}\n\n.dashboard-grid {\n  display: grid;\n  grid-template-columns: 1.25fr 1fr;\n  gap: 20px;\n}\n\n.content-card {\n  padding: 27px;\n  margin-bottom: 20px;\n}\n\n.content-card h2 {\n  font-size: 19px;\n  letter-spacing: -0.03em;\n  margin-bottom: 20px;\n}\n\n.card-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.quick-action {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  border-top: 1px solid #eef0f2;\n  padding: 17px 0;\n}\n\n.quick-icon {\n  width: 41px;\n  height: 41px;\n  flex: 0 0 41px;\n  border-radius: 10px;\n  background: #f3f4f6;\n  display: grid;\n  place-items: center;\n  color: var(--orange);\n  font-size: 12px;\n  font-weight: 900;\n}\n\n.quick-action > div:nth-child(2) {\n  flex: 1;\n  min-width: 0;\n}\n\n.quick-action strong {\n  font-size: 13px;\n}\n\n.quick-action p {\n  font-size: 11px;\n  color: #9299a3;\n  margin: 5px 0 0;\n}\n\n.quick-action button {\n  background: transparent;\n  border: 0;\n  color: var(--orange);\n  font-size: 22px;\n  cursor: pointer;\n}\n\n.active-pill {\n  display: inline-block;\n  padding: 7px 11px;\n  border-radius: 6px;\n  background: #e7f7ed;\n  color: #248b4d;\n  font-size: 11px;\n  font-weight: 800;\n}\n\n.business-details {\n  margin: 24px 0;\n}\n\n.business-details > div {\n  padding: 13px 0;\n  border-bottom: 1px solid #edf0f2;\n}\n\n.business-details span,\n.details-grid span {\n  display: block;\n  font-size: 11px;\n  color: #8c949f;\n  margin-bottom: 6px;\n}\n\n.business-details strong,\n.details-grid strong {\n  display: block;\n  font-size: 13px;\n  color: #292f37;\n  overflow-wrap: anywhere;\n}\n\n.course-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n}\n\n.course-card {\n  padding: 27px;\n  display: flex;\n  flex-direction: column;\n  min-height: 270px;\n}\n\n.course-top,\n.course-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.course-category {\n  color: var(--orange);\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 0.1em;\n}\n\n.course-symbol {\n  font-size: 25px;\n  color: #a3a9b1;\n}\n\n.course-card h2 {\n  margin: 26px 0 12px;\n  font-size: 21px;\n  letter-spacing: -0.04em;\n}\n\n.course-card p {\n  color: #8a929c;\n  font-size: 12px;\n  line-height: 1.7;\n  flex: 1;\n}\n\n.course-bottom {\n  border-top: 1px solid #edf0f2;\n  padding-top: 18px;\n}\n\n.course-bottom > span {\n  font-size: 11px;\n  color: #9aa1aa;\n}\n\n.empty-module {\n  min-height: 320px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.module-icon {\n  width: 56px;\n  height: 56px;\n  display: grid;\n  place-items: center;\n  background: #fff1e7;\n  color: var(--orange);\n  border-radius: 12px;\n  font-size: 27px;\n  margin-bottom: 20px;\n}\n\n.empty-module p {\n  max-width: 530px;\n  color: #828a95;\n  font-size: 13px;\n  line-height: 1.8;\n  margin-bottom: 23px;\n}\n\n.table-scroll {\n  width: 100%;\n  overflow-x: auto;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 520px;\n}\n\nth,\ntd {\n  text-align: left;\n  padding: 17px 12px;\n  border-bottom: 1px solid #edf0f2;\n  font-size: 12px;\n}\n\nth {\n  color: #89919d;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n\n.table-status {\n  padding: 6px 9px;\n  background: #f0f2f5;\n  border-radius: 6px;\n  font-weight: 700;\n}\n\n.table-empty {\n  text-align: center;\n  color: #9299a3;\n  padding: 45px 10px 25px;\n  font-size: 13px;\n}\n\n.details-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 24px;\n}\n\n.details-grid > div {\n  padding-bottom: 17px;\n  border-bottom: 1px solid #edf0f2;\n}\n\n.feedback-error {\n  color: #d94444;\n  font-size: 13px;\n}\n\n.feedback-notice {\n  color: #328a52;\n  font-size: 13px;\n}\n\n.auth-page {\n  min-height: 100vh;\n  background: #101114;\n  display: grid;\n  place-items: center;\n  padding: 35px 16px;\n  color: white;\n}\n\n.auth-card {\n  width: 100%;\n  max-width: 450px;\n  background: #1b1d21;\n  border: 1px solid #373b42;\n  border-radius: 18px;\n  padding: 37px;\n}\n\n.auth-logo {\n  width: 175px;\n  max-height: 75px;\n  object-fit: contain;\n  object-position: left;\n  display: block;\n  margin-bottom: 38px;\n}\n\n.auth-card h1 {\n  font-size: 31px;\n  letter-spacing: -0.05em;\n  line-height: 1.1;\n  margin-bottom: 13px;\n}\n\n.auth-card p {\n  color: #a8adb5;\n  font-size: 13px;\n  line-height: 1.7;\n  margin-bottom: 25px;\n}\n\n.auth-card label {\n  display: block;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.07em;\n  margin-bottom: 18px;\n}\n\n.auth-card input {\n  display: block;\n  width: 100%;\n  height: 49px;\n  background: #25282d;\n  border: 1px solid #454a52;\n  border-radius: 8px;\n  padding: 0 14px;\n  color: white;\n  font: inherit;\n  font-size: 13px;\n  margin-top: 9px;\n}\n\n.auth-card input:focus {\n  outline: 2px solid var(--orange);\n  outline-offset: 1px;\n}\n\n.auth-card .primary-button {\n  margin-top: 7px;\n}\n\n.link-button {\n  display: block;\n  border: 0;\n  background: none;\n  color: var(--orange);\n  font: inherit;\n  font-size: 12px;\n  cursor: pointer;\n  margin: 18px auto;\n}\n\n.auth-card .auth-bottom {\n  text-align: center;\n  margin: 24px 0 0;\n}\n\n.auth-bottom a {\n  color: var(--orange);\n}\n\n.pending-status {\n  background: #30291e;\n  color: var(--orange);\n  padding: 14px;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n@media (max-width: 1050px) {\n  .dashboard-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .page-heading {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .metrics {\n    grid-template-columns: 1fr;\n  }\n\n  .course-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .welcome-banner {\n    padding: 27px 23px;\n  }\n\n  .banner-decoration {\n    display: none;\n  }\n\n  .details-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .content-card {\n    padding: 20px;\n  }\n\n  .auth-card {\n    padding: 28px 22px;\n  }\n}\n\n.enrollment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-top: 20px;\n}\n\n.enrollment-form h2 {\n  margin: -12px 0 0;\n}\n\n.enrollment-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n}\n\n.enrollment-grid label {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.enrollment-grid input,\n.enrollment-grid select {\n  width: 100%;\n  min-width: 0;\n  padding: 14px;\n  border: 1px solid #dedede;\n  border-radius: 10px;\n  background: #fff;\n  color: #161616;\n  font: inherit;\n  outline: none;\n}\n\n.enrollment-grid input:focus,\n.enrollment-grid select:focus {\n  border-color: var(--brand-orange, #ff6900);\n}\n\n.full-field {\n  grid-column: 1 / -1;\n}\n\n.consent-field {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n.consent-field input {\n  margin-top: 4px;\n}\n\n@media (max-width: 680px) {\n  .enrollment-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* ==========================================================\n   SEXTA MARCHA\n   CAT\u00C1LOGO + JORNADA COMERCIAL\n   ========================================================== */\n\n:host {\n  --sm-orange: var(--brand-orange, #f47721);\n  --sm-ink: #20242a;\n  --sm-muted: #818995;\n  --sm-line: #e7e9ed;\n  --sm-surface: #ffffff;\n  --sm-soft: #f6f7f8;\n}\n\n/* T\u00CDTULOS E BOT\u00D5ES */\n\n.page-heading {\n  flex-wrap: wrap;\n}\n\n.page-heading > div {\n  min-width: 0;\n}\n\n.primary-button,\n.secondary-button {\n  transition:\n    background-color 0.2s ease,\n    border-color 0.2s ease,\n    transform 0.2s ease;\n}\n\n.primary-button:disabled,\n.secondary-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.primary-button:not(:disabled):hover {\n  background: #e66d1b;\n  filter: none;\n}\n\n.secondary-button:not(:disabled):hover {\n  background: #fff8f2;\n}\n\n/* ==========================================================\n   BANNER DO CAT\u00C1LOGO\n   ========================================================== */\n\n.sm-catalog-intro {\n  position: relative;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  min-height: 260px;\n  padding: clamp(26px, 4vw, 46px);\n  margin-bottom: 26px;\n  border-radius: 16px;\n  background: #1a1d22;\n  color: #ffffff;\n}\n\n.sm-catalog-intro > div {\n  position: relative;\n  z-index: 2;\n  max-width: 590px;\n}\n\n.sm-overline {\n  display: block;\n  margin-bottom: 15px;\n  color: var(--sm-orange);\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n}\n\n.sm-catalog-intro h2 {\n  max-width: 550px;\n  margin: 0 0 14px;\n  color: #ffffff;\n  font-size: clamp(27px, 3vw, 39px);\n  font-weight: 900;\n  line-height: 1.14;\n  letter-spacing: -0.045em;\n}\n\n.sm-catalog-intro p {\n  max-width: 450px;\n  margin: 0 0 24px;\n  color: #aeb4bd;\n  font-size: 13px;\n  line-height: 1.75;\n}\n\n.sm-catalog-number {\n  position: absolute;\n  right: 35px;\n  top: -70px;\n  color: rgba(255, 255, 255, 0.035);\n  font-size: 340px;\n  font-weight: 950;\n  line-height: 1;\n  pointer-events: none;\n  user-select: none;\n}\n\n/* ==========================================================\n   BUSCA E FILTROS\n   ========================================================== */\n\n.sm-catalog-tools {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 18px;\n  margin: 0 0 24px;\n}\n\n.sm-search {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  width: min(100%, 340px);\n  min-width: 0;\n}\n\n.sm-search span {\n  color: #737c88;\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n}\n\n.sm-search input {\n  width: 100%;\n  height: 45px;\n  padding: 0 15px;\n  border: 1px solid var(--sm-line);\n  border-radius: 9px;\n  outline: none;\n  background: #ffffff;\n  color: var(--sm-ink);\n  font: inherit;\n  font-size: 13px;\n  transition: border-color 0.2s ease;\n}\n\n.sm-search input:focus {\n  border-color: var(--sm-orange);\n}\n\n.sm-search input::placeholder {\n  color: #a1a8b2;\n}\n\n.sm-filter-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n\n.sm-filter {\n  min-height: 37px;\n  padding: 8px 13px;\n  border: 1px solid var(--sm-line);\n  border-radius: 7px;\n  background: #ffffff;\n  color: #69717d;\n  font: inherit;\n  font-size: 11px;\n  font-weight: 750;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.sm-filter:hover {\n  border-color: var(--sm-orange);\n  color: var(--sm-ink);\n}\n\n.sm-filter.is-active {\n  border-color: #20242a;\n  background: #20242a;\n  color: #ffffff;\n}\n\n/* ==========================================================\n   GRID DE CURSOS\n   ========================================================== */\n\n.sm-course-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  align-items: stretch;\n  gap: 18px;\n}\n\n.sm-course-card {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid var(--sm-line);\n  border-radius: 13px;\n  background: #ffffff;\n  transition:\n    border-color 0.2s ease,\n    transform 0.2s ease;\n}\n\n.sm-course-card:hover {\n  transform: translateY(-2px);\n  border-color: #d3d7dc;\n}\n\n.sm-course-image {\n  position: relative;\n  height: 175px;\n  overflow: hidden;\n  background: #eef0f2;\n}\n\n.sm-course-image img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.35s ease;\n}\n\n.sm-course-card:hover .sm-course-image img {\n  transform: scale(1.025);\n}\n\n.sm-course-image::after {\n  content: \"\";\n  position: absolute;\n  inset: 45% 0 0;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.22));\n  pointer-events: none;\n}\n\n.sm-course-image-label {\n  position: absolute;\n  z-index: 1;\n  bottom: 13px;\n  left: 14px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  background: #ffffff;\n  color: #272b31;\n  font-size: 9px;\n  font-weight: 850;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.sm-course-content {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 0;\n  padding: 22px;\n}\n\n.sm-course-meta {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 13px;\n  color: var(--sm-orange);\n  font-size: 10px;\n  font-weight: 800;\n  line-height: 1.5;\n}\n\n.sm-course-content h2 {\n  margin: 0 0 11px;\n  color: var(--sm-ink);\n  font-size: 19px;\n  font-weight: 850;\n  line-height: 1.25;\n  letter-spacing: -0.035em;\n}\n\n.sm-course-content > p {\n  margin: 0 0 20px;\n  color: #818995;\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n.sm-course-audience {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-top: auto;\n  padding: 16px 0;\n  border-top: 1px solid #edf0f2;\n}\n\n.sm-course-audience strong {\n  color: #9ba2ab;\n  font-size: 9px;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n}\n\n.sm-course-audience span {\n  color: #515963;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.sm-course-content > .secondary-button {\n  margin-top: 8px;\n}\n\n/* ==========================================================\n   GUIA E TIMELINE DE VENDAS\n   ========================================================== */\n\n.sm-guide,\n.sm-course-detail,\n.sm-review,\n.sm-success {\n  padding: clamp(24px, 3vw, 34px);\n}\n\n.sm-guide > h2,\n.sm-review > h2,\n.sm-success > h2 {\n  margin: 0 0 12px;\n  color: var(--sm-ink);\n  font-size: clamp(23px, 2.5vw, 30px);\n  font-weight: 850;\n  letter-spacing: -0.045em;\n}\n\n.sm-timeline {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 27px 20px;\n  margin: 32px 0;\n}\n\n.sm-timeline-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n  min-width: 0;\n}\n\n.sm-timeline-marker {\n  display: grid;\n  place-items: center;\n  flex: 0 0 38px;\n  width: 38px;\n  height: 38px;\n  border-radius: 9px;\n  background: #fff1e7;\n  color: var(--sm-orange);\n  font-size: 11px;\n  font-weight: 900;\n}\n\n.sm-timeline-item > div:last-child {\n  min-width: 0;\n}\n\n.sm-timeline-item h3 {\n  margin: 1px 0 7px;\n  color: #292f37;\n  font-size: 13px;\n  font-weight: 850;\n  line-height: 1.4;\n}\n\n.sm-timeline-item p {\n  margin: 0;\n  color: #89919d;\n  font-size: 12px;\n  line-height: 1.65;\n}\n\n.sm-guide-notice {\n  padding: 17px 19px;\n  margin: 24px 0;\n  border: 1px solid #e8eaee;\n  border-radius: 9px;\n  background: #f8f9fa;\n  color: #707985;\n  font-size: 12px;\n  line-height: 1.75;\n}\n\n/* ==========================================================\n   DETALHES DO CURSO\n   ========================================================== */\n\n.sm-detail-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);\n  gap: 30px;\n  align-items: start;\n  margin: 23px 0 30px;\n}\n\n.sm-detail-image {\n  height: 280px;\n  overflow: hidden;\n  border-radius: 11px;\n  background: #eef0f2;\n}\n\n.sm-detail-image img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.sm-detail-category {\n  display: inline-block;\n  margin-bottom: 12px;\n  color: var(--sm-orange);\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.sm-detail-layout h2 {\n  margin: 0 0 15px;\n  color: var(--sm-ink);\n  font-size: clamp(23px, 2.5vw, 31px);\n  font-weight: 900;\n  line-height: 1.2;\n  letter-spacing: -0.04em;\n}\n\n.sm-detail-layout p {\n  margin: 0 0 13px;\n  color: #737c88;\n  font-size: 13px;\n  line-height: 1.75;\n}\n\n.sm-detail-layout p strong {\n  color: #30353d;\n}\n\n.sm-detail-columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 28px;\n  padding: 25px 0;\n  border-top: 1px solid #edf0f2;\n}\n\n.sm-detail-columns h3 {\n  margin: 0 0 14px;\n  color: #292f37;\n  font-size: 15px;\n  font-weight: 850;\n}\n\n.sm-detail-columns ul {\n  margin: 0;\n  padding-left: 18px;\n}\n\n.sm-detail-columns li {\n  padding-left: 4px;\n  margin-bottom: 9px;\n  color: #78818c;\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n.sm-detail-columns li::marker {\n  color: var(--sm-orange);\n}\n\n.sm-offer-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 22px;\n  padding: 23px;\n  border: 1px solid #e7e9ed;\n  border-radius: 11px;\n  background: #fafbfc;\n}\n\n.sm-offer-box > div {\n  min-width: 0;\n}\n\n.sm-offer-box h3 {\n  margin: 0 0 8px;\n  color: #2a2e35;\n  font-size: 16px;\n  font-weight: 850;\n}\n\n.sm-offer-box p {\n  margin: 8px 0 0;\n}\n\n.sm-offer-price {\n  display: block;\n  color: #20242a;\n  font-size: 27px;\n  font-weight: 900;\n  letter-spacing: -0.045em;\n}\n\n/* ==========================================================\n   ETAPAS DE CADASTRO E REVIS\u00C3O\n   ========================================================== */\n\n.sm-step-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 15px;\n  margin-bottom: 18px;\n}\n\n.sm-step-header > span {\n  color: var(--sm-orange);\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n}\n\n.enrollment-form {\n  gap: 21px;\n  margin-top: 0;\n}\n\n.enrollment-form .eyebrow:not(:first-child) {\n  padding-top: 22px;\n  border-top: 1px solid #edf0f2;\n}\n\n.enrollment-form h2 {\n  margin: -10px 0 2px;\n  color: #2b3037;\n  font-size: 19px;\n  font-weight: 850;\n}\n\n.enrollment-grid {\n  gap: 17px;\n}\n\n.enrollment-grid label {\n  gap: 8px;\n  color: #59616d;\n  font-size: 12px;\n  font-weight: 750;\n}\n\n.enrollment-grid input,\n.enrollment-grid select {\n  min-height: 45px;\n  padding: 11px 13px;\n  border: 1px solid #dfe3e8;\n  border-radius: 8px;\n  background: #fff;\n  color: #252a31;\n  font-size: 13px;\n  transition: border-color 0.2s ease;\n}\n\n.enrollment-grid input:focus,\n.enrollment-grid select:focus {\n  border-color: var(--sm-orange);\n  box-shadow: 0 0 0 3px rgba(244, 119, 33, 0.08);\n}\n\n.consent-field {\n  padding: 16px;\n  border: 1px solid #e8eaee;\n  border-radius: 8px;\n  background: #fafbfc;\n  color: #68717e;\n  font-size: 12px;\n}\n\n.consent-field input {\n  accent-color: var(--sm-orange);\n}\n\n.sm-review-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0 26px;\n  margin: 26px 0;\n}\n\n.sm-review-grid > div {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  min-width: 0;\n  padding: 16px 0;\n  border-bottom: 1px solid #edf0f2;\n}\n\n.sm-review-grid span {\n  color: #929aa5;\n  font-size: 11px;\n}\n\n.sm-review-grid strong {\n  color: #2b3037;\n  font-size: 13px;\n  font-weight: 800;\n  line-height: 1.5;\n  overflow-wrap: anywhere;\n}\n\n.sm-actions {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 23px;\n}\n\n/* ==========================================================\n   CONFIRMA\u00C7\u00C3O\n   ========================================================== */\n\n.sm-success {\n  text-align: center;\n}\n\n.sm-success-icon {\n  display: grid;\n  place-items: center;\n  width: 62px;\n  height: 62px;\n  margin: 0 auto 22px;\n  border-radius: 14px;\n  background: #e8f7ee;\n  color: #248b4d;\n  font-size: 28px;\n  font-weight: 900;\n}\n\n.sm-success > p {\n  color: #7d8590;\n  font-size: 13px;\n  line-height: 1.7;\n}\n\n.sm-success .sm-actions {\n  justify-content: center;\n  margin-top: 28px;\n}\n\n/* ==========================================================\n   RESPONSIVIDADE\n   ========================================================== */\n\n@media (max-width: 1200px) {\n  .sm-course-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .sm-timeline {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 800px) {\n  .sm-detail-layout {\n    grid-template-columns: 1fr;\n    gap: 22px;\n  }\n\n  .sm-detail-image {\n    height: 260px;\n  }\n\n  .sm-offer-box {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n\n@media (max-width: 680px) {\n  .sm-catalog-intro {\n    min-height: 245px;\n    padding: 28px 23px;\n  }\n\n  .sm-catalog-intro h2 {\n    font-size: 28px;\n  }\n\n  .sm-catalog-number {\n    right: -12px;\n    top: 0;\n    font-size: 245px;\n  }\n\n  .sm-catalog-tools {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .sm-search {\n    width: 100%;\n  }\n\n  .sm-filter-list {\n    gap: 6px;\n  }\n\n  .sm-filter {\n    font-size: 10px;\n  }\n\n  .sm-course-grid,\n  .sm-timeline,\n  .sm-detail-columns,\n  .sm-review-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .sm-course-image {\n    height: 195px;\n  }\n\n  .sm-course-content {\n    padding: 20px;\n  }\n\n  .sm-detail-image {\n    height: 220px;\n  }\n\n  .sm-detail-columns {\n    gap: 24px;\n  }\n\n  .sm-guide,\n  .sm-course-detail,\n  .sm-review,\n  .sm-success {\n    padding: 21px;\n  }\n\n  .sm-actions {\n    flex-direction: column;\n  }\n\n  .sm-actions > button {\n    width: 100%;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .sm-course-card,\n  .sm-course-image img,\n  .sm-filter,\n  .primary-button,\n  .secondary-button {\n    transition: none;\n  }\n}\n\n/* Link para o aluno */\n.sm-checkout-share {margin:24px auto;padding:22px;border:1px solid #e6e8ed;border-radius:12px;background:#fafafa;max-width:680px;text-align:left}\n.sm-checkout-share label {display:block;font-size:11px;font-weight:800;letter-spacing:.1em;margin-bottom:10px}\n.sm-checkout-share input {width:100%;padding:13px;border:1px solid #d9dde3;border-radius:8px;background:white;color:#25272b}\n.sm-checkout-share .sm-actions{justify-content:flex-start}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PortalComponent, { className: "PortalComponent", filePath: "src/app/pages/portal.component.ts", lineNumber: 33 }); })();
//# sourceMappingURL=portal.component.js.map