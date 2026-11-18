import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { services } from "../data/services";
import * as i0 from "@angular/core";
function ServiceDetailComponent_Conditional_2_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(a_r1);
} }
function ServiceDetailComponent_Conditional_2_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 8);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r1.video, i0.ɵɵsanitizeResourceUrl);
} }
function ServiceDetailComponent_Conditional_2_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, " V\u00CDDEO DE DEMONSTRA\u00C7\u00C3O");
    i0.ɵɵelement(2, "br");
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4, "Aguardando material oficial da solu\u00E7\u00E3o");
    i0.ɵɵelementEnd()();
} }
function ServiceDetailComponent_Conditional_2_Conditional_26_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 12);
} if (rf & 2) {
    const src_r3 = ctx.$implicit;
    i0.ɵɵproperty("src", src_r3, i0.ɵɵsanitizeUrl);
} }
function ServiceDetailComponent_Conditional_2_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵrepeaterCreate(1, ServiceDetailComponent_Conditional_2_Conditional_26_For_2_Template, 1, 1, "img", 12, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.item.screenshots);
} }
function ServiceDetailComponent_Conditional_2_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, " PRINTS DO SISTEMA");
    i0.ɵɵelement(2, "br");
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4, "Adicione imagens aprovadas no cat\u00E1logo");
    i0.ɵɵelementEnd()();
} }
function ServiceDetailComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵtext(1, "\u2190 VOLTAR AO PORTF\u00D3LIO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p", 4);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 5);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 6)(13, "strong");
    i0.ɵɵtext(14, "PARA QUEM");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(15, ServiceDetailComponent_Conditional_2_For_16_Template, 2, 1, "span", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 7)(18, "div")(19, "h2");
    i0.ɵɵtext(20, "VEJA EM A\u00C7\u00C3O");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(21, ServiceDetailComponent_Conditional_2_Conditional_21_Template, 1, 1, "iframe", 8)(22, ServiceDetailComponent_Conditional_2_Conditional_22_Template, 5, 0, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div")(24, "h2");
    i0.ɵɵtext(25, "TELAS DA SOLU\u00C7\u00C3O");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(26, ServiceDetailComponent_Conditional_2_Conditional_26_Template, 3, 0, "div", 10)(27, ServiceDetailComponent_Conditional_2_Conditional_27_Template, 5, 0, "div", 9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "a", 11);
    i0.ɵɵtext(29, "CADASTRAR INTERESSE ");
    i0.ɵɵelementStart(30, "span");
    i0.ɵɵtext(31, "\u2197");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" SOLU\u00C7\u00C3O ", ctx_r1.item.number, " / ", ctx_r1.item.status === "initial" ? "PRIMEIRA FRENTE" : "EM PLANEJAMENTO", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.item.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.item.tagline);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.item.description);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.item.audience);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.video ? 21 : 22);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r1.item.screenshots.length ? 26 : 27);
} }
function ServiceDetailComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h1");
    i0.ɵɵtext(1, "SOLU\u00C7\u00C3O N\u00C3O ENCONTRADA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "a", 13);
    i0.ɵɵtext(3, "Voltar ao in\u00EDcio");
    i0.ɵɵelementEnd();
} }
export class ServiceDetailComponent {
    constructor() {
        this.route = inject(ActivatedRoute);
        this.sanitizer = inject(DomSanitizer);
        this.item = services.find((s) => s.slug === this.route.snapshot.paramMap.get("slug"));
        // Video links must be approved embed URLs, never accept arbitrary user-provided URLs.
        this.video = this.item?.videoUrl
            ? this.sanitizer.bypassSecurityTrustResourceUrl(this.item.videoUrl)
            : null;
    }
    static { this.ɵfac = function ServiceDetailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ServiceDetailComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ServiceDetailComponent, selectors: [["ng-component"]], decls: 4, vars: 1, consts: [[1, "detail-page"], [1, "wrap"], ["routerLink", "/", "fragment", "solucoes", 1, "back-link"], [1, "eyebrow"], [1, "detail-tagline"], [1, "detail-description"], [1, "detail-audience"], [1, "detail-media"], ["title", "Demonstra\u00E7\u00E3o da solu\u00E7\u00E3o", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "strict-origin-when-cross-origin", 3, "src"], [1, "media-placeholder"], [1, "screenshots"], ["routerLink", "/", "fragment", "cadastro", 1, "button-primary"], ["alt", "Captura de tela da solu\u00E7\u00E3o", "loading", "lazy", 3, "src"], ["routerLink", "/"]], template: function ServiceDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "div", 1);
            i0.ɵɵconditionalCreate(2, ServiceDetailComponent_Conditional_2_Template, 32, 7)(3, ServiceDetailComponent_Conditional_3_Template, 4, 0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.item ? 2 : 3);
        } }, dependencies: [RouterLink], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ServiceDetailComponent, [{
        type: Component,
        args: [{ standalone: true, imports: [RouterLink], template: "<main class=\"detail-page\">\r\n  <div class=\"wrap\">\r\n    @if (item) {\r\n    <a routerLink=\"/\" fragment=\"solucoes\" class=\"back-link\">\u2190 VOLTAR AO PORTF\u00D3LIO</a>\r\n    <div class=\"eyebrow\">\r\n      SOLU\u00C7\u00C3O {{ item.number }} /\r\n      {{\r\n      item.status === \"initial\" ? \"PRIMEIRA FRENTE\" : \"EM PLANEJAMENTO\"\r\n      }}\r\n    </div>\r\n    <h1>{{ item.title }}<span>.</span></h1>\r\n    <p class=\"detail-tagline\">{{ item.tagline }}</p>\r\n    <p class=\"detail-description\">{{ item.description }}</p>\r\n    <div class=\"detail-audience\">\r\n      <strong>PARA QUEM</strong>\r\n      @for (a of item.audience; track a) {\r\n      <span>{{ a }}</span>\r\n      }\r\n    </div>\r\n    <div class=\"detail-media\">\r\n      <div>\r\n        <h2>VEJA EM A\u00C7\u00C3O</h2>\r\n        @if (video) {\r\n        <iframe [src]=\"video\" title=\"Demonstra\u00E7\u00E3o da solu\u00E7\u00E3o\" allowfullscreen loading=\"lazy\"\r\n          referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>\r\n        } @else {\r\n        <div class=\"media-placeholder\">\r\n          V\u00CDDEO DE DEMONSTRA\u00C7\u00C3O<br /><small>Aguardando material oficial da solu\u00E7\u00E3o</small>\r\n        </div>\r\n        }\r\n      </div>\r\n      <div>\r\n        <h2>TELAS DA SOLU\u00C7\u00C3O</h2>\r\n        @if (item.screenshots.length) {\r\n        <div class=\"screenshots\">\r\n          @for (src of item.screenshots; track src) {\r\n          <img [src]=\"src\" alt=\"Captura de tela da solu\u00E7\u00E3o\" loading=\"lazy\" />\r\n          }\r\n        </div>\r\n        } @else {\r\n        <div class=\"media-placeholder\">\r\n          PRINTS DO SISTEMA<br /><small>Adicione imagens aprovadas no cat\u00E1logo</small>\r\n        </div>\r\n        }\r\n      </div>\r\n    </div>\r\n    <a routerLink=\"/\" fragment=\"cadastro\" class=\"button-primary\">CADASTRAR INTERESSE <span>\u2197</span></a>\r\n    } @else {\r\n    <h1>SOLU\u00C7\u00C3O N\u00C3O ENCONTRADA</h1>\r\n    <a routerLink=\"/\">Voltar ao in\u00EDcio</a>\r\n    }\r\n  </div>\r\n</main>", styles: ["/* Estilos espec\u00EDficos deste componente. */\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ServiceDetailComponent, { className: "ServiceDetailComponent", filePath: "src/app/pages/service-detail.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=service-detail.component.js.map