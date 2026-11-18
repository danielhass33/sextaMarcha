import { Component, inject, signal } from "@angular/core";
import { CurrencyPipe, DecimalPipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { CommercialService } from "../core/commercial.service";
import { courses } from "../data/courses";
import { DashboardLayoutComponent, } from "../layouts/dashboard/dashboard-layout.component";
import { CourseOrdersService } from "../core/course-orders.service";
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.uid;
const _forTrack1 = ($index, $item) => $item.id;
function MasterComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "main", 0)(1, "section", 2)(2, "h1");
    i0.ɵɵtext(3, "Verificando credenciais...");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Estamos preparando seu ambiente administrativo.");
    i0.ɵɵelementEnd()()();
} }
function MasterComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "main", 0)(1, "section", 2)(2, "div", 3);
    i0.ɵɵtext(3, "ACESSO RESTRITO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "\u00C1rea administrativa.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, " Este ambiente \u00E9 exclusivo de administradores Master ativos da Sexta Marcha. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 4);
    i0.ɵɵtext(9, " Voltar ao portal \u2192 ");
    i0.ɵɵelementEnd()()();
} }
function MasterComponent_Conditional_2_Conditional_1_For_60_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 18);
    i0.ɵɵlistener("click", function MasterComponent_Conditional_2_Conditional_1_For_60_Conditional_0_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r4); const p_r5 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.changeStatus(p_r5, "active")); });
    i0.ɵɵtext(7, " Aprovar ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r5.business);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", p_r5.name, " \u00B7 ", p_r5.city);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.busy());
} }
function MasterComponent_Conditional_2_Conditional_1_For_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, MasterComponent_Conditional_2_Conditional_1_For_60_Conditional_0_Template, 8, 4, "div", 17);
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    i0.ɵɵconditional(p_r5.status === "pending" ? 0 : -1);
} }
function MasterComponent_Conditional_2_Conditional_1_Conditional_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1, " Nenhum cadastro aguardando aprova\u00E7\u00E3o. ");
    i0.ɵɵelementEnd();
} }
function MasterComponent_Conditional_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div")(2, "div", 3);
    i0.ɵɵtext(3, "ADMINISTRA\u00C7\u00C3O GERAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Vis\u00E3o geral");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, " Acompanhe a rede de parceiros e os resultados comerciais da plataforma. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 8);
    i0.ɵɵlistener("click", function MasterComponent_Conditional_2_Conditional_1_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.reload()); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "section", 9)(13, "article", 10)(14, "span");
    i0.ɵɵtext(15, "Despachantes cadastrados");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "small");
    i0.ɵɵtext(20, "Total de parceiros");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "article", 10)(22, "span");
    i0.ɵɵtext(23, "Parceiros ativos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "strong");
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "small");
    i0.ɵɵtext(28, "Habilitados para operar");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "article", 10)(30, "span");
    i0.ɵɵtext(31, "Aguardando aprova\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "strong");
    i0.ɵɵtext(33);
    i0.ɵɵpipe(34, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "small");
    i0.ɵɵtext(36, "Cadastros pendentes");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "article", 10)(38, "span");
    i0.ɵɵtext(39, "Faturamento confirmado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "strong");
    i0.ɵɵtext(41);
    i0.ɵɵpipe(42, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "small");
    i0.ɵɵtext(44, "Somente pagamentos reais confirmados");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "article", 10)(46, "span");
    i0.ɵɵtext(47, "Comiss\u00F5es registradas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "strong");
    i0.ɵɵtext(49);
    i0.ɵɵpipe(50, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "small");
    i0.ɵɵtext(52, "Sobre vendas confirmadas");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "section", 11)(54, "article", 12)(55, "div", 3);
    i0.ɵɵtext(56, "GEST\u00C3O DE PARCEIROS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "h2");
    i0.ɵɵtext(58, "Cadastros pendentes");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(59, MasterComponent_Conditional_2_Conditional_1_For_60_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵconditionalCreate(61, MasterComponent_Conditional_2_Conditional_1_Conditional_61_Template, 2, 0, "div", 13);
    i0.ɵɵelementStart(62, "button", 14);
    i0.ɵɵlistener("click", function MasterComponent_Conditional_2_Conditional_1_Template_button_click_62_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectSection("partners")); });
    i0.ɵɵtext(63, " Gerenciar despachantes \u2192 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "article", 15)(65, "div", 3);
    i0.ɵɵtext(66, "OPERA\u00C7\u00C3O COMERCIAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "h2");
    i0.ɵɵtext(68, "Gest\u00E3o centralizada");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "p");
    i0.ɵɵtext(70, " Consulte os cursos, acompanhe as vendas e administre a evolu\u00E7\u00E3o da rede comercial. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "button", 16);
    i0.ɵɵlistener("click", function MasterComponent_Conditional_2_Conditional_1_Template_button_click_71_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectSection("sales")); });
    i0.ɵɵtext(72, " Ver vendas \u2192 ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.busy() ? "Atualizando..." : "Atualizar \u21BB", " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(18, 8, ctx_r1.partnerProfiles.length));
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(26, 10, ctx_r1.activeCount));
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(34, 12, ctx_r1.pendingCount));
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(42, 14, ctx_r1.revenue, "BRL"));
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(50, 17, ctx_r1.commission, "BRL"));
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r1.partnerProfiles);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.pendingCount ? 61 : -1);
} }
function MasterComponent_Conditional_2_Conditional_2_For_44_Conditional_0_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function MasterComponent_Conditional_2_Conditional_2_For_44_Conditional_0_Conditional_23_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const p_r8 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.changeStatus(p_r8, "active")); });
    i0.ɵɵtext(1, " Aprovar ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
} }
function MasterComponent_Conditional_2_Conditional_2_For_44_Conditional_0_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 32);
    i0.ɵɵlistener("click", function MasterComponent_Conditional_2_Conditional_2_For_44_Conditional_0_Conditional_24_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const p_r8 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.changeStatus(p_r8, "suspended")); });
    i0.ɵɵtext(1, " Suspender ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
} }
function MasterComponent_Conditional_2_Conditional_2_For_44_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementStart(12, "small");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td")(15, "span", 28);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td");
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "td");
    i0.ɵɵconditionalCreate(23, MasterComponent_Conditional_2_Conditional_2_For_44_Conditional_0_Conditional_23_Template, 2, 1, "button", 29)(24, MasterComponent_Conditional_2_Conditional_2_For_44_Conditional_0_Conditional_24_Template, 2, 1, "button", 30);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r8.business);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r8.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", p_r8.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r8.city);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", p_r8.cnpj, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("CRDD: ", p_r8.crdd);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-active", p_r8.status === "active")("is-pending", p_r8.status === "pending");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", p_r8.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.count(p_r8.uid));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(21, 14, ctx_r1.total(p_r8.uid), "BRL"));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(p_r8.status !== "active" ? 23 : 24);
} }
function MasterComponent_Conditional_2_Conditional_2_For_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, MasterComponent_Conditional_2_Conditional_2_For_44_Conditional_0_Template, 25, 17, "tr");
} if (rf & 2) {
    const p_r8 = ctx.$implicit;
    i0.ɵɵconditional(p_r8.role !== "master" ? 0 : -1);
} }
function MasterComponent_Conditional_2_Conditional_2_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1, " Nenhum parceiro corresponde aos filtros. ");
    i0.ɵɵelementEnd();
} }
function MasterComponent_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div")(2, "div", 3);
    i0.ɵɵtext(3, "GEST\u00C3O COMERCIAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Despachantes");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, " Gerencie os cadastros e as permiss\u00F5es dos parceiros. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 8);
    i0.ɵɵlistener("click", function MasterComponent_Conditional_2_Conditional_2_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.reload()); });
    i0.ɵɵtext(11, " Atualizar \u21BB ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "section", 12)(13, "div", 19)(14, "input", 20);
    i0.ɵɵlistener("input", function MasterComponent_Conditional_2_Conditional_2_Template_input_input_14_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.filter.set($event.target.value)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "select", 21);
    i0.ɵɵlistener("change", function MasterComponent_Conditional_2_Conditional_2_Template_select_change_15_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.status.set($event.target.value)); });
    i0.ɵɵelementStart(16, "option", 22);
    i0.ɵɵtext(17, "Todos os status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "option", 23);
    i0.ɵɵtext(19, "Pendentes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "option", 24);
    i0.ɵɵtext(21, "Ativos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "option", 25);
    i0.ɵɵtext(23, "Suspensos");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 26)(25, "table", 27)(26, "thead")(27, "tr")(28, "th");
    i0.ɵɵtext(29, "Estabelecimento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "th");
    i0.ɵɵtext(31, "Respons\u00E1vel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "th");
    i0.ɵɵtext(33, "CNPJ / CRDD");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "th");
    i0.ɵɵtext(35, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "th");
    i0.ɵɵtext(37, "Vendas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "th");
    i0.ɵɵtext(39, "Faturamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "th");
    i0.ɵɵtext(41, "A\u00E7\u00F5es");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "tbody");
    i0.ɵɵrepeaterCreate(43, MasterComponent_Conditional_2_Conditional_2_For_44_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(45, MasterComponent_Conditional_2_Conditional_2_Conditional_45_Template, 2, 0, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.filter());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.status());
    i0.ɵɵadvance(28);
    i0.ɵɵrepeater(ctx_r1.partners);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.partners.length ? 45 : -1);
} }
function MasterComponent_Conditional_2_Conditional_3_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 12)(1, "div", 3);
    i0.ɵɵtext(2, "EDUCA\u00C7\u00C3O NO TR\u00C2NSITO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 34);
    i0.ɵɵtext(6, " Curso dispon\u00EDvel no cat\u00E1logo local da plataforma. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 35);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const course_r10 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(course_r10.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("ID: ", course_r10.id);
} }
function MasterComponent_Conditional_2_Conditional_3_ForEmpty_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1, " Nenhum curso encontrado. ");
    i0.ɵɵelementEnd();
} }
function MasterComponent_Conditional_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div")(2, "div", 3);
    i0.ɵɵtext(3, "PRODUTOS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Cat\u00E1logo de cursos");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, " Visualize os cursos cadastrados na aplica\u00E7\u00E3o. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "section", 33);
    i0.ɵɵrepeaterCreate(11, MasterComponent_Conditional_2_Conditional_3_For_12_Template, 9, 2, "article", 12, _forTrack1, false, MasterComponent_Conditional_2_Conditional_3_ForEmpty_13_Template, 2, 0, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵrepeater(ctx_r1.catalog);
} }
function MasterComponent_Conditional_2_Conditional_4_For_37_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1, "Teste \u00B7 pagamento simulado");
    i0.ɵɵelementEnd();
} }
function MasterComponent_Conditional_2_Conditional_4_For_37_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("is-active", s_r12.status === "paid");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r12.status);
} }
function MasterComponent_Conditional_2_Conditional_4_For_37_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵconditionalCreate(12, MasterComponent_Conditional_2_Conditional_4_For_37_Conditional_12_Template, 2, 0, "span", 39)(13, MasterComponent_Conditional_2_Conditional_4_For_37_Conditional_13_Template, 2, 3, "span", 40);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.partnerName(s_r12.partnerId));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.courseName(s_r12.courseId));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 5, s_r12.amount, "BRL"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 8, s_r12.commissionAmount, "BRL"));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(s_r12.simulated || s_r12.environment === "sandbox" ? 12 : 13);
} }
function MasterComponent_Conditional_2_Conditional_4_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1, "Nenhum pagamento registrado at\u00E9 o momento.");
    i0.ɵɵelementEnd();
} }
function MasterComponent_Conditional_2_Conditional_4_For_70_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1, "Pago (simulado)");
    i0.ɵɵelementEnd();
} }
function MasterComponent_Conditional_2_Conditional_4_For_70_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const order_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(order_r13.paymentStatus);
} }
function MasterComponent_Conditional_2_Conditional_4_For_70_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1, "Teste confirmado pelo cliente");
    i0.ɵɵelementEnd();
} }
function MasterComponent_Conditional_2_Conditional_4_For_70_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1, "Aguardando cliente");
    i0.ɵɵelementEnd();
} }
function MasterComponent_Conditional_2_Conditional_4_For_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵconditionalCreate(11, MasterComponent_Conditional_2_Conditional_4_For_70_Conditional_11_Template, 2, 0, "span", 41)(12, MasterComponent_Conditional_2_Conditional_4_For_70_Conditional_12_Template, 2, 1, "span", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵconditionalCreate(16, MasterComponent_Conditional_2_Conditional_4_For_70_Conditional_16_Template, 2, 0, "span", 41)(17, MasterComponent_Conditional_2_Conditional_4_For_70_Conditional_17_Template, 2, 0, "span", 28);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const order_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(order_r13.id.slice(0, 12));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.partnerName(order_r13.partnerId));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(order_r13.courseTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 7, order_r13.amountCents / 100, "BRL"));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(order_r13.environment === "sandbox" && order_r13.paymentStatus === "paid" ? 11 : 12);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(order_r13.enrollmentStatus);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(order_r13.paymentStatus === "paid" && order_r13.environment === "sandbox" ? 16 : 17);
} }
function MasterComponent_Conditional_2_Conditional_4_ForEmpty_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 42);
    i0.ɵɵtext(2, "Nenhum pedido de homologa\u00E7\u00E3o encontrado.");
    i0.ɵɵelementEnd()();
} }
function MasterComponent_Conditional_2_Conditional_4_Conditional_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paymentNotice());
} }
function MasterComponent_Conditional_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div")(2, "div", 3);
    i0.ɵɵtext(3, "OPERA\u00C7\u00C3O COMERCIAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Vendas registradas");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, "Gerencie os pedidos, acompanhe os pagamentos e valide a homologa\u00E7\u00E3o.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 8);
    i0.ɵɵlistener("click", function MasterComponent_Conditional_2_Conditional_4_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.reload(); return i0.ɵɵresetView(ctx_r1.refreshCourseOrders()); });
    i0.ɵɵtext(11, " Atualizar \u21BB ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "section", 12)(13, "div", 36)(14, "div")(15, "div", 3);
    i0.ɵɵtext(16, "HIST\u00D3RICO FINANCEIRO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "h2");
    i0.ɵɵtext(18, "Vendas registradas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 34);
    i0.ɵɵtext(20, "Pagamentos simulados n\u00E3o comp\u00F5em o faturamento real.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 26)(22, "table")(23, "thead")(24, "tr")(25, "th");
    i0.ɵɵtext(26, "Despachante");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th");
    i0.ɵɵtext(28, "Curso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "th");
    i0.ɵɵtext(30, "Valor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "th");
    i0.ɵɵtext(32, "Comiss\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "th");
    i0.ɵɵtext(34, "Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "tbody");
    i0.ɵɵrepeaterCreate(36, MasterComponent_Conditional_2_Conditional_4_For_37_Template, 14, 11, "tr", null, _forTrack1);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(38, MasterComponent_Conditional_2_Conditional_4_Conditional_38_Template, 2, 0, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "section", 12)(40, "div", 36)(41, "div")(42, "div", 3);
    i0.ɵɵtext(43, "PEDIDOS DE HOMOLOGA\u00C7\u00C3O");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "h2");
    i0.ɵɵtext(45, "Fluxo de matr\u00EDculas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "p", 34);
    i0.ɵɵtext(47, "Simule o pagamento de pedidos pendentes e acompanhe a matr\u00EDcula.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "button", 37);
    i0.ɵɵlistener("click", function MasterComponent_Conditional_2_Conditional_4_Template_button_click_48_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.refreshCourseOrders()); });
    i0.ɵɵtext(49, "Atualizar pedidos");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "div", 26)(51, "table")(52, "thead")(53, "tr")(54, "th");
    i0.ɵɵtext(55, "Pedido");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "th");
    i0.ɵɵtext(57, "Despachante");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "th");
    i0.ɵɵtext(59, "Curso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "th");
    i0.ɵɵtext(61, "Valor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "th");
    i0.ɵɵtext(63, "Pagamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "th");
    i0.ɵɵtext(65, "Matr\u00EDcula");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "th");
    i0.ɵɵtext(67, "A\u00E7\u00F5es");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(68, "tbody");
    i0.ɵɵrepeaterCreate(69, MasterComponent_Conditional_2_Conditional_4_For_70_Template, 18, 10, "tr", null, _forTrack1, false, MasterComponent_Conditional_2_Conditional_4_ForEmpty_71_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(72, MasterComponent_Conditional_2_Conditional_4_Conditional_72_Template, 2, 1, "p", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵadvance(26);
    i0.ɵɵrepeater(ctx_r1.service.sales());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.service.sales().length ? 38 : -1);
    i0.ɵɵadvance(31);
    i0.ɵɵrepeater(ctx_r1.courseOrders.orders());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.paymentNotice() ? 72 : -1);
} }
function MasterComponent_Conditional_2_Conditional_5_For_58_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵelementStart(8, "td")(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td")(13, "span", 39);
    i0.ɵɵtext(14, " Homologa\u00E7\u00E3o ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const sale_r15 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.partnerName(sale_r15.partnerId));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.courseName(sale_r15.courseId));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(7, 4, sale_r15.amount, "BRL"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(11, 7, sale_r15.commissionAmount, "BRL"), " ");
} }
function MasterComponent_Conditional_2_Conditional_5_ForEmpty_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 43);
    i0.ɵɵtext(2, " Nenhuma comiss\u00E3o simulada registrada. ");
    i0.ɵɵelementEnd()();
} }
function MasterComponent_Conditional_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div")(2, "div", 3);
    i0.ɵɵtext(3, "FINANCEIRO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Comiss\u00F5es");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, "Controle financeiro das comiss\u00F5es da rede comercial.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 8);
    i0.ɵɵlistener("click", function MasterComponent_Conditional_2_Conditional_5_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.reload()); });
    i0.ɵɵtext(11, " Atualizar \u21BB ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "section", 9)(13, "article", 10)(14, "span");
    i0.ɵɵtext(15, "Comiss\u00F5es reais");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "small");
    i0.ɵɵtext(20, "Vendas reais confirmadas");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "article", 10)(22, "span");
    i0.ɵɵtext(23, "Comiss\u00F5es simuladas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "strong");
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "small");
    i0.ɵɵtext(28, "Homologa\u00E7\u00E3o financeira");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "article", 10)(30, "span");
    i0.ɵɵtext(31, "Vendas simuladas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "strong");
    i0.ɵɵtext(33);
    i0.ɵɵpipe(34, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "small");
    i0.ɵɵtext(36, "Opera\u00E7\u00F5es fict\u00EDcias confirmadas");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "section", 12)(38, "div", 3);
    i0.ɵɵtext(39, "COMISS\u00D5ES DOS DESPACHANTES");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "h2");
    i0.ɵɵtext(41, "Detalhamento financeiro");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div", 26)(43, "table")(44, "thead")(45, "tr")(46, "th");
    i0.ɵɵtext(47, "Despachante");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "th");
    i0.ɵɵtext(49, "Curso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "th");
    i0.ɵɵtext(51, "Valor da venda");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "th");
    i0.ɵɵtext(53, "Comiss\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "th");
    i0.ɵɵtext(55, "Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(56, "tbody");
    i0.ɵɵrepeaterCreate(57, MasterComponent_Conditional_2_Conditional_5_For_58_Template, 15, 10, "tr", null, _forTrack1, false, MasterComponent_Conditional_2_Conditional_5_ForEmpty_59_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(60, "p", 34);
    i0.ɵɵtext(61, " As comiss\u00F5es simuladas n\u00E3o geram obriga\u00E7\u00F5es financeiras ou repasses banc\u00E1rios. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(18, 5, ctx_r1.commission, "BRL"));
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(26, 8, ctx_r1.simulatedCommission, "BRL"), " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(34, 11, ctx_r1.simulatedCount));
    i0.ɵɵadvance(24);
    i0.ɵɵrepeater(ctx_r1.simulatedSales);
} }
function MasterComponent_Conditional_2_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.error() || ctx_r1.service.error(), " ");
} }
function MasterComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-dashboard-layout", 5);
    i0.ɵɵlistener("sectionChange", function MasterComponent_Conditional_2_Template_app_dashboard_layout_sectionChange_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectSection($event)); })("logout", function MasterComponent_Conditional_2_Template_app_dashboard_layout_logout_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵconditionalCreate(1, MasterComponent_Conditional_2_Conditional_1_Template, 73, 20);
    i0.ɵɵconditionalCreate(2, MasterComponent_Conditional_2_Conditional_2_Template, 46, 4);
    i0.ɵɵconditionalCreate(3, MasterComponent_Conditional_2_Conditional_3_Template, 14, 1);
    i0.ɵɵconditionalCreate(4, MasterComponent_Conditional_2_Conditional_4_Template, 73, 4);
    i0.ɵɵconditionalCreate(5, MasterComponent_Conditional_2_Conditional_5_Template, 62, 13);
    i0.ɵɵconditionalCreate(6, MasterComponent_Conditional_2_Conditional_6_Template, 2, 1, "p", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("active", ctx_r1.section())("name", ((tmp_2_0 = ctx_r1.service.profile()) == null ? null : tmp_2_0.name) || "Administrador");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "overview" ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "partners" ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "courses" ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "sales" ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "commissions" ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() || ctx_r1.service.error() ? 6 : -1);
} }
export class MasterComponent {
    constructor() {
        this.service = inject(CommercialService);
        this.section = signal("overview", ...(ngDevMode ? [{ debugName: "section" }] : []));
        this.filter = signal("", ...(ngDevMode ? [{ debugName: "filter" }] : []));
        this.status = signal("all", ...(ngDevMode ? [{ debugName: "status" }] : []));
        this.busy = signal(false, ...(ngDevMode ? [{ debugName: "busy" }] : []));
        this.error = signal("", ...(ngDevMode ? [{ debugName: "error" }] : []));
        this.catalog = courses;
        this.courseOrders = inject(CourseOrdersService);
        this.paymentBusy = signal(null, ...(ngDevMode ? [{ debugName: "paymentBusy" }] : []));
        this.paymentNotice = signal("", ...(ngDevMode ? [{ debugName: "paymentNotice" }] : []));
    }
    async confirmTestPayment(orderId) {
        if (this.paymentBusy())
            return;
        const confirmed = confirm("Confirmar pagamento FICTÍCIO deste pedido? " +
            "Serão criados registros simulados de venda, " +
            "comissão e matrícula. Nenhum dinheiro será movimentado.");
        if (!confirmed)
            return;
        this.paymentBusy.set(orderId);
        this.paymentNotice.set("");
        this.error.set("");
        try {
            const result = await this.courseOrders.simulatePayment(orderId);
            await this.service.refresh();
            this.paymentNotice.set(result.alreadyProcessed
                ? "Este pagamento já havia sido simulado."
                : "Pagamento simulado e registros financeiros criados.");
        }
        catch (e) {
            console.error(e);
            this.error.set("Não foi possível confirmar o pagamento simulado.");
        }
        finally {
            this.paymentBusy.set(null);
        }
    }
    async refreshCourseOrders() {
        try {
            await this.courseOrders.refresh();
        }
        catch {
            this.error.set("Não foi possível carregar os pedidos.");
        }
    }
    selectSection(section) {
        this.section.set(section);
        if (section === "sales") {
            void this.refreshCourseOrders();
        }
    }
    get partners() {
        return this.service
            .partners()
            .filter((p) => (this.status() === "all" || p.status === this.status()) &&
            `${p.name} ${p.business} ${p.email} ${p.cnpj} ${p.crdd}`
                .toLowerCase()
                .includes(this.filter().toLowerCase()));
    }
    get partnerProfiles() {
        return this.service.partners().filter((p) => p.role !== "master");
    }
    get activeCount() {
        return this.partnerProfiles.filter((p) => p.status === "active").length;
    }
    get pendingCount() {
        return this.partnerProfiles.filter((p) => p.status === "pending").length;
    }
    get paid() {
        return this.service
            .sales()
            .filter((sale) => sale.status === "paid" &&
            sale.simulated !== true &&
            sale.environment !== "sandbox");
    }
    get revenue() {
        return this.paid.reduce((total, s) => total + (Number(s.amount) || 0), 0);
    }
    get commission() {
        return this.paid.reduce((total, s) => total + (Number(s.commissionAmount) || 0), 0);
    }
    count(uid) {
        return this.paid.filter((s) => s.partnerId === uid).length;
    }
    total(uid) {
        return this.paid
            .filter((s) => s.partnerId === uid)
            .reduce((total, s) => total + (Number(s.amount) || 0), 0);
    }
    courseName(id) {
        return courses.find((c) => c.id === id)?.title || id;
    }
    partnerName(uid) {
        return this.service.partners().find((p) => p.uid === uid)?.business || uid;
    }
    async reload() {
        this.busy.set(true);
        this.error.set("");
        try {
            await this.service.refresh();
        }
        catch {
            this.error.set("Falha ao atualizar os dados.");
        }
        finally {
            this.busy.set(false);
        }
    }
    async changeStatus(partner, status) {
        if (!confirm(`Confirmar alteração de ${partner.business} para ${status}?`))
            return;
        this.busy.set(true);
        this.error.set("");
        try {
            const { httpsCallable } = await import("firebase/functions");
            const { functions } = await import("../core/firebase");
            if (!functions) {
                throw Error("Firebase não configurado");
            }
            await httpsCallable(functions, "setPartnerStatus")({
                partnerId: partner.uid,
                status,
            });
            await this.service.refresh();
        }
        catch {
            this.error.set("Não foi possível atualizar o parceiro. Confira as permissões e a Cloud Function.");
        }
        finally {
            this.busy.set(false);
        }
    }
    logout() {
        this.service.logout();
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
    static { this.ɵfac = function MasterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MasterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MasterComponent, selectors: [["ng-component"]], decls: 3, vars: 1, consts: [[1, "access-page"], ["mode", "master", "business", "Sexta Marcha", 3, "active", "name"], [1, "access-card"], [1, "eyebrow"], ["routerLink", "/portal", 1, "primary-button"], ["mode", "master", "business", "Sexta Marcha", 3, "sectionChange", "logout", "active", "name"], ["role", "alert", 1, "feedback-error"], [1, "page-heading"], [1, "secondary-button", 3, "click", "disabled"], [1, "metrics"], [1, "metric-card"], [1, "master-columns"], [1, "content-card"], [1, "empty-message"], [1, "secondary-button", "full", 3, "click"], [1, "content-card", "dark-card"], [1, "primary-button", 3, "click"], [1, "pending-partner"], [1, "primary-button", 3, "click", "disabled"], [1, "filters"], ["aria-label", "Buscar parceiros", "placeholder", "Buscar por nome, CNPJ, CRDD ou e-mail", 3, "input", "value"], ["aria-label", "Filtrar status", 3, "change", "value"], ["value", "all"], ["value", "pending"], ["value", "active"], ["value", "suspended"], [1, "table-scroll"], [1, "partners-table"], [1, "status-pill"], [1, "small-button", "approve", 3, "disabled"], [1, "small-button", "suspend", 3, "disabled"], [1, "small-button", "approve", 3, "click", "disabled"], [1, "small-button", "suspend", 3, "click", "disabled"], [1, "course-grid"], [1, "muted"], [1, "course-id"], [1, "card-header"], [1, "secondary-button", 3, "click"], ["role", "status", 1, "feedback-notice"], [1, "status-pill", "is-pending"], [1, "status-pill", 3, "is-active"], [1, "status-pill", "is-active"], ["colspan", "7"], ["colspan", "5"]], template: function MasterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, MasterComponent_Conditional_0_Template, 6, 0, "main", 0)(1, MasterComponent_Conditional_1_Template, 10, 0, "main", 0)(2, MasterComponent_Conditional_2_Template, 7, 8, "app-dashboard-layout", 1);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.service.loading() ? 0 : ctx.service.role() !== "master" ? 1 : 2);
        } }, dependencies: [RouterLink, DashboardLayoutComponent, CurrencyPipe, DecimalPipe], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  --orange: var(--brand-orange, #f47721);\r\n  color: #20242a;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], \r\nh2[_ngcontent-%COMP%], \r\np[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\r\n\r\n.eyebrow[_ngcontent-%COMP%] {\r\n  color: var(--orange);\r\n  font-size: 10px;\r\n  font-weight: 850;\r\n  letter-spacing: 0.14em;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.page-heading[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: clamp(28px, 3vw, 39px);\r\n  font-weight: 900;\r\n  letter-spacing: -0.05em;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: var(--orange);\r\n}\r\n\r\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \r\n.muted[_ngcontent-%COMP%] {\r\n  color: #838b97;\r\n  font-size: 13px;\r\n  line-height: 1.7;\r\n}\r\n\r\n.primary-button[_ngcontent-%COMP%], \r\n.secondary-button[_ngcontent-%COMP%], \r\n.small-button[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  border-radius: 9px;\r\n  padding: 12px 18px;\r\n  min-height: 42px;\r\n  font: inherit;\r\n  font-size: 12px;\r\n  font-weight: 850;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.primary-button[_ngcontent-%COMP%] {\r\n  background: var(--orange);\r\n  color: #161616;\r\n}\r\n\r\n.secondary-button[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  color: #303741;\r\n  border: 1px solid #dfe3e8;\r\n}\r\n\r\n.secondary-button[_ngcontent-%COMP%]:hover {\r\n  border-color: var(--orange);\r\n}\r\n\r\n.full[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.55;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.metrics[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r\n  gap: 15px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.metric-card[_ngcontent-%COMP%], \r\n.content-card[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border: 1px solid #e6e9ed;\r\n  border-radius: 13px;\r\n}\r\n\r\n.metric-card[_ngcontent-%COMP%] {\r\n  padding: 23px;\r\n}\r\n\r\n.metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: #838b96;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n}\r\n\r\n.metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: clamp(22px, 2vw, 30px);\r\n  letter-spacing: -0.045em;\r\n  margin: 14px 0;\r\n  overflow-wrap: anywhere;\r\n}\r\n\r\n.metric-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  color: #a0a7b0;\r\n  font-size: 10px;\r\n}\r\n\r\n.master-columns[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1.3fr 1fr;\r\n  gap: 20px;\r\n}\r\n\r\n.content-card[_ngcontent-%COMP%] {\r\n  padding: 27px;\r\n  margin-bottom: 20px;\r\n  min-width: 0;\r\n}\r\n\r\n.content-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  letter-spacing: -0.035em;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.pending-partner[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 15px;\r\n  padding: 17px 0;\r\n  border-top: 1px solid #edf0f2;\r\n}\r\n\r\n.pending-partner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \r\n.pending-partner[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.pending-partner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n}\r\n\r\n.pending-partner[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  color: #8c949e;\r\n  font-size: 11px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.empty-message[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: #929aa5;\r\n  font-size: 13px;\r\n  padding: 35px 10px;\r\n}\r\n\r\n.dark-card[_ngcontent-%COMP%] {\r\n  background: #1b1e24;\r\n  border-color: #1b1e24;\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n}\r\n\r\n.dark-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 26px;\r\n}\r\n\r\n.dark-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  color: #aab0b9;\r\n  line-height: 1.8;\r\n  max-width: 360px;\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 12px;\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \r\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  min-height: 46px;\r\n  border: 1px solid #e0e4e9;\r\n  border-radius: 8px;\r\n  background: #fafbfc;\r\n  color: #2a3038;\r\n  padding: 0 13px;\r\n  font: inherit;\r\n  font-size: 12px;\r\n  outline: 0;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \r\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\r\n  border-color: var(--orange);\r\n}\r\n\r\n.table-scroll[_ngcontent-%COMP%] {\r\n  overflow-x: auto;\r\n  width: 100%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-width: 650px;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.partners-table[_ngcontent-%COMP%] {\r\n  min-width: 930px;\r\n}\r\n\r\nth[_ngcontent-%COMP%], \r\ntd[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  padding: 17px 12px;\r\n  border-bottom: 1px solid #edf0f2;\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  font-weight: 850;\r\n  color: #89919d;\r\n  letter-spacing: 0.06em;\r\n  text-transform: uppercase;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \r\ntd[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  color: #9199a4;\r\n  margin-top: 6px;\r\n}\r\n\r\n.status-pill[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 7px 10px;\r\n  background: #f0f2f5;\r\n  color: #646c78;\r\n  border-radius: 6px;\r\n  font-size: 10px;\r\n  font-weight: 850;\r\n}\r\n\r\n.status-pill.is-active[_ngcontent-%COMP%] {\r\n  background: #e5f7ed;\r\n  color: #218b4b;\r\n}\r\n\r\n.status-pill.is-pending[_ngcontent-%COMP%] {\r\n  background: #fff2dd;\r\n  color: #a76a16;\r\n}\r\n\r\n.small-button[_ngcontent-%COMP%] {\r\n  min-height: 33px;\r\n  padding: 8px 11px;\r\n  font-size: 10px;\r\n}\r\n\r\n.small-button.approve[_ngcontent-%COMP%] {\r\n  background: var(--orange);\r\n  color: #171717;\r\n}\r\n\r\n.small-button.suspend[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border: 1px solid #e2e5e9;\r\n  color: #626a75;\r\n}\r\n\r\n.course-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 18px;\r\n}\r\n\r\n.course-id[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  font-weight: 750;\r\n  color: var(--orange);\r\n}\r\n\r\n.feedback-error[_ngcontent-%COMP%] {\r\n  color: #d34242;\r\n  font-size: 13px;\r\n}\r\n\r\n.access-page[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  background: #101216;\r\n  color: white;\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 25px;\r\n}\r\n\r\n.access-card[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 460px;\r\n  background: #1c1f25;\r\n  border: 1px solid #363a43;\r\n  padding: 36px;\r\n  border-radius: 15px;\r\n}\r\n\r\n.access-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  letter-spacing: -0.05em;\r\n}\r\n\r\n.access-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #a7aeb8;\r\n  font-size: 13px;\r\n  line-height: 1.8;\r\n  margin: 20px 0;\r\n}\r\n\r\n@media (max-width: 1050px) {\r\n  .master-columns[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n@media (max-width: 760px) {\r\n  .page-heading[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .metrics[_ngcontent-%COMP%], \r\n   .course-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .content-card[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n\r\n  .filters[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .pending-partner[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MasterComponent, [{
        type: Component,
        args: [{ standalone: true, imports: [CurrencyPipe, DecimalPipe, RouterLink, DashboardLayoutComponent], template: "@if (service.loading()) {\n<main class=\"access-page\">\n    <section class=\"access-card\">\n        <h1>Verificando credenciais...</h1>\n        <p>Estamos preparando seu ambiente administrativo.</p>\n    </section>\n</main>\n}\n\n@else if (service.role() !== \"master\") {\n<main class=\"access-page\">\n    <section class=\"access-card\">\n        <div class=\"eyebrow\">ACESSO RESTRITO</div>\n        <h1>\u00C1rea administrativa.</h1>\n        <p>\n            Este ambiente \u00E9 exclusivo de administradores\n            Master ativos da Sexta Marcha.\n        </p>\n        <a routerLink=\"/portal\" class=\"primary-button\">\n            Voltar ao portal \u2192\n        </a>\n    </section>\n</main>\n}\n\n@else {\n<app-dashboard-layout mode=\"master\" [active]=\"section()\" [name]=\"service.profile()?.name || 'Administrador'\"\n    business=\"Sexta Marcha\" (sectionChange)=\"selectSection($event)\" (logout)=\"logout()\">\n\n    @if (section() === \"overview\") {\n    <div class=\"page-heading\">\n        <div>\n            <div class=\"eyebrow\">ADMINISTRA\u00C7\u00C3O GERAL</div>\n            <h1>Vis\u00E3o geral<span>.</span></h1>\n            <p>\n                Acompanhe a rede de parceiros e os resultados\n                comerciais da plataforma.\n            </p>\n        </div>\n        <button class=\"secondary-button\" [disabled]=\"busy()\" (click)=\"reload()\">\n            {{ busy() ? 'Atualizando...' : 'Atualizar \u21BB' }}\n        </button>\n    </div>\n\n    <section class=\"metrics\">\n        <article class=\"metric-card\">\n            <span>Despachantes cadastrados</span>\n            <strong>{{ partnerProfiles.length | number }}</strong>\n            <small>Total de parceiros</small>\n        </article>\n\n        <article class=\"metric-card\">\n            <span>Parceiros ativos</span>\n            <strong>{{ activeCount | number }}</strong>\n            <small>Habilitados para operar</small>\n        </article>\n\n        <article class=\"metric-card\">\n            <span>Aguardando aprova\u00E7\u00E3o</span>\n            <strong>{{ pendingCount | number }}</strong>\n            <small>Cadastros pendentes</small>\n        </article>\n\n        <article class=\"metric-card\">\n            <span>Faturamento confirmado</span>\n            <strong>{{ revenue | currency:'BRL' }}</strong>\n            <small>Somente pagamentos reais confirmados</small>\n        </article>\n\n        <article class=\"metric-card\">\n            <span>Comiss\u00F5es registradas</span>\n            <strong>{{ commission | currency:'BRL' }}</strong>\n            <small>Sobre vendas confirmadas</small>\n        </article>\n    </section>\n\n    <section class=\"master-columns\">\n        <article class=\"content-card\">\n            <div class=\"eyebrow\">GEST\u00C3O DE PARCEIROS</div>\n            <h2>Cadastros pendentes</h2>\n\n            @for (p of partnerProfiles; track p.uid) {\n            @if (p.status === \"pending\") {\n            <div class=\"pending-partner\">\n                <div>\n                    <strong>{{ p.business }}</strong>\n                    <small>{{ p.name }} \u00B7 {{ p.city }}</small>\n                </div>\n                <button class=\"primary-button\" [disabled]=\"busy()\" (click)=\"changeStatus(p, 'active')\">\n                    Aprovar\n                </button>\n            </div>\n            }\n            }\n\n            @if (!pendingCount) {\n            <div class=\"empty-message\">\n                Nenhum cadastro aguardando aprova\u00E7\u00E3o.\n            </div>\n            }\n\n            <button class=\"secondary-button full\" (click)=\"selectSection('partners')\">\n                Gerenciar despachantes \u2192\n            </button>\n        </article>\n\n        <article class=\"content-card dark-card\">\n            <div class=\"eyebrow\">OPERA\u00C7\u00C3O COMERCIAL</div>\n            <h2>Gest\u00E3o centralizada</h2>\n            <p>\n                Consulte os cursos, acompanhe as vendas e\n                administre a evolu\u00E7\u00E3o da rede comercial.\n            </p>\n\n            <button class=\"primary-button\" (click)=\"selectSection('sales')\">\n                Ver vendas \u2192\n            </button>\n        </article>\n    </section>\n    }\n\n    @if (section() === \"partners\") {\n    <div class=\"page-heading\">\n        <div>\n            <div class=\"eyebrow\">GEST\u00C3O COMERCIAL</div>\n            <h1>Despachantes<span>.</span></h1>\n            <p>\n                Gerencie os cadastros e as permiss\u00F5es dos parceiros.\n            </p>\n        </div>\n\n        <button class=\"secondary-button\" [disabled]=\"busy()\" (click)=\"reload()\">\n            Atualizar \u21BB\n        </button>\n    </div>\n\n    <section class=\"content-card\">\n        <div class=\"filters\">\n            <input aria-label=\"Buscar parceiros\" placeholder=\"Buscar por nome, CNPJ, CRDD ou e-mail\" [value]=\"filter()\"\n                (input)=\"filter.set($any($event.target).value)\" />\n\n            <select aria-label=\"Filtrar status\" [value]=\"status()\" (change)=\"status.set($any($event.target).value)\">\n                <option value=\"all\">Todos os status</option>\n                <option value=\"pending\">Pendentes</option>\n                <option value=\"active\">Ativos</option>\n                <option value=\"suspended\">Suspensos</option>\n            </select>\n        </div>\n\n        <div class=\"table-scroll\">\n            <table class=\"partners-table\">\n                <thead>\n                    <tr>\n                        <th>Estabelecimento</th>\n                        <th>Respons\u00E1vel</th>\n                        <th>CNPJ / CRDD</th>\n                        <th>Status</th>\n                        <th>Vendas</th>\n                        <th>Faturamento</th>\n                        <th>A\u00E7\u00F5es</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    @for (p of partners; track p.uid) {\n                    @if (p.role !== \"master\") {\n                    <tr>\n                        <td>\n                            <strong>{{ p.business }}</strong>\n                            <small>{{ p.email }}</small>\n                        </td>\n\n                        <td>\n                            {{ p.name }}\n                            <small>{{ p.city }}</small>\n                        </td>\n\n                        <td>\n                            {{ p.cnpj }}\n                            <small>CRDD: {{ p.crdd }}</small>\n                        </td>\n\n                        <td>\n                            <span class=\"status-pill\" [class.is-active]=\"p.status === 'active'\"\n                                [class.is-pending]=\"p.status === 'pending'\">\n                                {{ p.status }}\n                            </span>\n                        </td>\n\n                        <td>{{ count(p.uid) }}</td>\n                        <td>{{ total(p.uid) | currency:'BRL' }}</td>\n\n                        <td>\n                            @if (p.status !== \"active\") {\n                            <button class=\"small-button approve\" [disabled]=\"busy()\"\n                                (click)=\"changeStatus(p, 'active')\">\n                                Aprovar\n                            </button>\n                            } @else {\n                            <button class=\"small-button suspend\" [disabled]=\"busy()\"\n                                (click)=\"changeStatus(p, 'suspended')\">\n                                Suspender\n                            </button>\n                            }\n                        </td>\n                    </tr>\n                    }\n                    }\n                </tbody>\n            </table>\n        </div>\n\n        @if (!partners.length) {\n        <div class=\"empty-message\">\n            Nenhum parceiro corresponde aos filtros.\n        </div>\n        }\n    </section>\n    }\n\n    @if (section() === \"courses\") {\n    <div class=\"page-heading\">\n        <div>\n            <div class=\"eyebrow\">PRODUTOS</div>\n            <h1>Cat\u00E1logo de cursos<span>.</span></h1>\n            <p>\n                Visualize os cursos cadastrados na aplica\u00E7\u00E3o.\n            </p>\n        </div>\n    </div>\n\n    <section class=\"course-grid\">\n        @for (course of catalog; track course.id) {\n        <article class=\"content-card\">\n            <div class=\"eyebrow\">EDUCA\u00C7\u00C3O NO TR\u00C2NSITO</div>\n            <h2>{{ course.title }}</h2>\n            <p class=\"muted\">\n                Curso dispon\u00EDvel no cat\u00E1logo local da plataforma.\n            </p>\n            <div class=\"course-id\">ID: {{ course.id }}</div>\n        </article>\n        } @empty {\n        <div class=\"content-card\">\n            Nenhum curso encontrado.\n        </div>\n        }\n    </section>\n    }\n\n    @if (section() === \"sales\") {\n    <div class=\"page-heading\">\n        <div>\n            <div class=\"eyebrow\">OPERA\u00C7\u00C3O COMERCIAL</div>\n            <h1>Vendas registradas<span>.</span></h1>\n            <p>Gerencie os pedidos, acompanhe os pagamentos e valide a homologa\u00E7\u00E3o.</p>\n        </div>\n        <button class=\"secondary-button\" [disabled]=\"busy()\" (click)=\"reload(); refreshCourseOrders()\">\n            Atualizar \u21BB\n        </button>\n    </div>\n\n    <section class=\"content-card\">\n        <div class=\"card-header\">\n            <div>\n                <div class=\"eyebrow\">HIST\u00D3RICO FINANCEIRO</div>\n                <h2>Vendas registradas</h2>\n                <p class=\"muted\">Pagamentos simulados n\u00E3o comp\u00F5em o faturamento real.</p>\n            </div>\n        </div>\n        <div class=\"table-scroll\">\n            <table>\n                <thead>\n                    <tr>\n                        <th>Despachante</th>\n                        <th>Curso</th>\n                        <th>Valor</th>\n                        <th>Comiss\u00E3o</th>\n                        <th>Status</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    @for (s of service.sales(); track s.id) {\n                    <tr>\n                        <td>{{ partnerName(s.partnerId) }}</td>\n                        <td>{{ courseName(s.courseId) }}</td>\n                        <td>{{ s.amount | currency:'BRL' }}</td>\n                        <td>{{ s.commissionAmount | currency:'BRL' }}</td>\n                        <td>\n                            @if (s.simulated || s.environment === 'sandbox') {\n                            <span class=\"status-pill is-pending\">Teste \u00B7 pagamento simulado</span>\n                            } @else {\n                            <span class=\"status-pill\" [class.is-active]=\"s.status === 'paid'\">{{ s.status }}</span>\n                            }\n                        </td>\n                    </tr>\n                    }\n                </tbody>\n            </table>\n        </div>\n        @if (!service.sales().length) {\n        <div class=\"empty-message\">Nenhum pagamento registrado at\u00E9 o momento.</div>\n        }\n    </section>\n\n    <section class=\"content-card\">\n        <div class=\"card-header\">\n            <div>\n                <div class=\"eyebrow\">PEDIDOS DE HOMOLOGA\u00C7\u00C3O</div>\n                <h2>Fluxo de matr\u00EDculas</h2>\n                <p class=\"muted\">Simule o pagamento de pedidos pendentes e acompanhe a matr\u00EDcula.</p>\n            </div>\n            <button class=\"secondary-button\" (click)=\"refreshCourseOrders()\">Atualizar pedidos</button>\n        </div>\n        <div class=\"table-scroll\">\n            <table>\n                <thead>\n                    <tr>\n                        <th>Pedido</th>\n                        <th>Despachante</th>\n                        <th>Curso</th>\n                        <th>Valor</th>\n                        <th>Pagamento</th>\n                        <th>Matr\u00EDcula</th>\n                        <th>A\u00E7\u00F5es</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    @for (order of courseOrders.orders(); track order.id) {\n                    <tr>\n                        <td>{{ order.id.slice(0, 12) }}</td>\n                        <td>{{ partnerName(order.partnerId) }}</td>\n                        <td>{{ order.courseTitle }}</td>\n                        <td>{{ order.amountCents / 100 | currency:'BRL' }}</td>\n                        <td>\n                            @if (order.environment === 'sandbox' && order.paymentStatus === 'paid') {\n                            <span class=\"status-pill is-active\">Pago (simulado)</span>\n                            } @else {\n                            <span class=\"status-pill\">{{ order.paymentStatus }}</span>\n                            }\n                        </td>\n                        <td>{{ order.enrollmentStatus }}</td>\n                        <td>\n                            @if (order.paymentStatus === 'paid' && order.environment === 'sandbox') {\n                              <span class=\"status-pill is-active\">Teste confirmado pelo cliente</span>\n                            } @else {\n                              <span class=\"status-pill\">Aguardando cliente</span>\n                            }\n                        </td>\n                    </tr>\n                    } @empty {\n                    <tr>\n                        <td colspan=\"7\">Nenhum pedido de homologa\u00E7\u00E3o encontrado.</td>\n                    </tr>\n                    }\n                </tbody>\n            </table>\n        </div>\n        @if (paymentNotice()) {\n        <p class=\"feedback-notice\" role=\"status\">{{ paymentNotice() }}</p>\n        }\n    </section>\n    }\n\n\n    @if (section() === \"commissions\") {\n    <div class=\"page-heading\">\n        <div>\n            <div class=\"eyebrow\">FINANCEIRO</div>\n            <h1>Comiss\u00F5es<span>.</span></h1>\n            <p>Controle financeiro das comiss\u00F5es da rede comercial.</p>\n        </div>\n\n        <button class=\"secondary-button\" [disabled]=\"busy()\" (click)=\"reload()\">\n            Atualizar \u21BB\n        </button>\n    </div>\n\n    <section class=\"metrics\">\n        <article class=\"metric-card\">\n            <span>Comiss\u00F5es reais</span>\n            <strong>{{ commission | currency:'BRL' }}</strong>\n            <small>Vendas reais confirmadas</small>\n        </article>\n\n        <article class=\"metric-card\">\n            <span>Comiss\u00F5es simuladas</span>\n            <strong>\n                {{ simulatedCommission | currency:'BRL' }}\n            </strong>\n            <small>Homologa\u00E7\u00E3o financeira</small>\n        </article>\n\n        <article class=\"metric-card\">\n            <span>Vendas simuladas</span>\n            <strong>{{ simulatedCount | number }}</strong>\n            <small>Opera\u00E7\u00F5es fict\u00EDcias confirmadas</small>\n        </article>\n    </section>\n\n    <section class=\"content-card\">\n        <div class=\"eyebrow\">COMISS\u00D5ES DOS DESPACHANTES</div>\n        <h2>Detalhamento financeiro</h2>\n\n        <div class=\"table-scroll\">\n            <table>\n                <thead>\n                    <tr>\n                        <th>Despachante</th>\n                        <th>Curso</th>\n                        <th>Valor da venda</th>\n                        <th>Comiss\u00E3o</th>\n                        <th>Status</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    @for (sale of simulatedSales; track sale.id) {\n                    <tr>\n                        <td>{{ partnerName(sale.partnerId) }}</td>\n                        <td>{{ courseName(sale.courseId) }}</td>\n                        <td>\n                            {{ sale.amount | currency:'BRL' }}\n                        </td>\n                        <td>\n                            <strong>\n                                {{ sale.commissionAmount | currency:'BRL' }}\n                            </strong>\n                        </td>\n                        <td>\n                            <span class=\"status-pill is-pending\">\n                                Homologa\u00E7\u00E3o\n                            </span>\n                        </td>\n                    </tr>\n                    } @empty {\n                    <tr>\n                        <td colspan=\"5\">\n                            Nenhuma comiss\u00E3o simulada registrada.\n                        </td>\n                    </tr>\n                    }\n                </tbody>\n            </table>\n        </div>\n\n        <p class=\"muted\">\n            As comiss\u00F5es simuladas n\u00E3o geram obriga\u00E7\u00F5es\n            financeiras ou repasses banc\u00E1rios.\n        </p>\n    </section>\n    }\n\n\n    @if (error() || service.error()) {\n    <p class=\"feedback-error\" role=\"alert\">\n        {{ error() || service.error() }}\n    </p>\n    }\n\n</app-dashboard-layout>\n}", styles: [":host {\r\n  display: block;\r\n  --orange: var(--brand-orange, #f47721);\r\n  color: #20242a;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1,\r\nh2,\r\np {\r\n  margin-top: 0;\r\n}\r\n\r\n.eyebrow {\r\n  color: var(--orange);\r\n  font-size: 10px;\r\n  font-weight: 850;\r\n  letter-spacing: 0.14em;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.page-heading {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.page-heading h1 {\r\n  font-size: clamp(28px, 3vw, 39px);\r\n  font-weight: 900;\r\n  letter-spacing: -0.05em;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.page-heading h1 span {\r\n  color: var(--orange);\r\n}\r\n\r\n.page-heading p,\r\n.muted {\r\n  color: #838b97;\r\n  font-size: 13px;\r\n  line-height: 1.7;\r\n}\r\n\r\n.primary-button,\r\n.secondary-button,\r\n.small-button {\r\n  border: 0;\r\n  border-radius: 9px;\r\n  padding: 12px 18px;\r\n  min-height: 42px;\r\n  font: inherit;\r\n  font-size: 12px;\r\n  font-weight: 850;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.primary-button {\r\n  background: var(--orange);\r\n  color: #161616;\r\n}\r\n\r\n.secondary-button {\r\n  background: #fff;\r\n  color: #303741;\r\n  border: 1px solid #dfe3e8;\r\n}\r\n\r\n.secondary-button:hover {\r\n  border-color: var(--orange);\r\n}\r\n\r\n.full {\r\n  width: 100%;\r\n}\r\n\r\nbutton:disabled {\r\n  opacity: 0.55;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.metrics {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r\n  gap: 15px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.metric-card,\r\n.content-card {\r\n  background: #fff;\r\n  border: 1px solid #e6e9ed;\r\n  border-radius: 13px;\r\n}\r\n\r\n.metric-card {\r\n  padding: 23px;\r\n}\r\n\r\n.metric-card span {\r\n  display: block;\r\n  color: #838b96;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n}\r\n\r\n.metric-card strong {\r\n  display: block;\r\n  font-size: clamp(22px, 2vw, 30px);\r\n  letter-spacing: -0.045em;\r\n  margin: 14px 0;\r\n  overflow-wrap: anywhere;\r\n}\r\n\r\n.metric-card small {\r\n  color: #a0a7b0;\r\n  font-size: 10px;\r\n}\r\n\r\n.master-columns {\r\n  display: grid;\r\n  grid-template-columns: 1.3fr 1fr;\r\n  gap: 20px;\r\n}\r\n\r\n.content-card {\r\n  padding: 27px;\r\n  margin-bottom: 20px;\r\n  min-width: 0;\r\n}\r\n\r\n.content-card h2 {\r\n  font-size: 20px;\r\n  letter-spacing: -0.035em;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.pending-partner {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 15px;\r\n  padding: 17px 0;\r\n  border-top: 1px solid #edf0f2;\r\n}\r\n\r\n.pending-partner strong,\r\n.pending-partner small {\r\n  display: block;\r\n}\r\n\r\n.pending-partner strong {\r\n  font-size: 13px;\r\n}\r\n\r\n.pending-partner small {\r\n  color: #8c949e;\r\n  font-size: 11px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.empty-message {\r\n  text-align: center;\r\n  color: #929aa5;\r\n  font-size: 13px;\r\n  padding: 35px 10px;\r\n}\r\n\r\n.dark-card {\r\n  background: #1b1e24;\r\n  border-color: #1b1e24;\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n}\r\n\r\n.dark-card h2 {\r\n  font-size: 26px;\r\n}\r\n\r\n.dark-card p {\r\n  font-size: 13px;\r\n  color: #aab0b9;\r\n  line-height: 1.8;\r\n  max-width: 360px;\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.filters {\r\n  display: flex;\r\n  gap: 12px;\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.filters input,\r\n.filters select {\r\n  min-height: 46px;\r\n  border: 1px solid #e0e4e9;\r\n  border-radius: 8px;\r\n  background: #fafbfc;\r\n  color: #2a3038;\r\n  padding: 0 13px;\r\n  font: inherit;\r\n  font-size: 12px;\r\n  outline: 0;\r\n}\r\n\r\n.filters input {\r\n  flex: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.filters input:focus,\r\n.filters select:focus {\r\n  border-color: var(--orange);\r\n}\r\n\r\n.table-scroll {\r\n  overflow-x: auto;\r\n  width: 100%;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  min-width: 650px;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.partners-table {\r\n  min-width: 930px;\r\n}\r\n\r\nth,\r\ntd {\r\n  text-align: left;\r\n  padding: 17px 12px;\r\n  border-bottom: 1px solid #edf0f2;\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\nth {\r\n  font-size: 10px;\r\n  font-weight: 850;\r\n  color: #89919d;\r\n  letter-spacing: 0.06em;\r\n  text-transform: uppercase;\r\n}\r\n\r\ntd strong,\r\ntd small {\r\n  display: block;\r\n}\r\n\r\ntd small {\r\n  font-size: 10px;\r\n  color: #9199a4;\r\n  margin-top: 6px;\r\n}\r\n\r\n.status-pill {\r\n  display: inline-block;\r\n  padding: 7px 10px;\r\n  background: #f0f2f5;\r\n  color: #646c78;\r\n  border-radius: 6px;\r\n  font-size: 10px;\r\n  font-weight: 850;\r\n}\r\n\r\n.status-pill.is-active {\r\n  background: #e5f7ed;\r\n  color: #218b4b;\r\n}\r\n\r\n.status-pill.is-pending {\r\n  background: #fff2dd;\r\n  color: #a76a16;\r\n}\r\n\r\n.small-button {\r\n  min-height: 33px;\r\n  padding: 8px 11px;\r\n  font-size: 10px;\r\n}\r\n\r\n.small-button.approve {\r\n  background: var(--orange);\r\n  color: #171717;\r\n}\r\n\r\n.small-button.suspend {\r\n  background: #fff;\r\n  border: 1px solid #e2e5e9;\r\n  color: #626a75;\r\n}\r\n\r\n.course-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 18px;\r\n}\r\n\r\n.course-id {\r\n  font-size: 11px;\r\n  font-weight: 750;\r\n  color: var(--orange);\r\n}\r\n\r\n.feedback-error {\r\n  color: #d34242;\r\n  font-size: 13px;\r\n}\r\n\r\n.access-page {\r\n  min-height: 100vh;\r\n  background: #101216;\r\n  color: white;\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 25px;\r\n}\r\n\r\n.access-card {\r\n  width: 100%;\r\n  max-width: 460px;\r\n  background: #1c1f25;\r\n  border: 1px solid #363a43;\r\n  padding: 36px;\r\n  border-radius: 15px;\r\n}\r\n\r\n.access-card h1 {\r\n  font-size: 30px;\r\n  letter-spacing: -0.05em;\r\n}\r\n\r\n.access-card p {\r\n  color: #a7aeb8;\r\n  font-size: 13px;\r\n  line-height: 1.8;\r\n  margin: 20px 0;\r\n}\r\n\r\n@media (max-width: 1050px) {\r\n  .master-columns {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n@media (max-width: 760px) {\r\n  .page-heading {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .metrics,\r\n  .course-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .content-card {\r\n    padding: 20px;\r\n  }\r\n\r\n  .filters {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .pending-partner {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n  }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MasterComponent, { className: "MasterComponent", filePath: "src/app/pages/master.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=master.component.js.map