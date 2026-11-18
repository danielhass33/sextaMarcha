import { Component, inject, signal, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { FormsModule } from "@angular/forms";
import { CurrencyPipe, DecimalPipe } from "@angular/common";
import { RouterLink } from "@angular/router";

import { CommercialService } from "../core/commercial.service";
import { Course, courses } from "../data/courses";
import {
  DashboardLayoutComponent,
  DashboardSection,
} from "../layouts/dashboard/dashboard-layout.component";
import {
  CourseOrdersService,
  StudentOrderInput,
  CourseOrderSummary,
} from "../core/course-orders.service";

type SaleStep = "guide" | "details" | "student" | "review" | "success";

@Component({
  standalone: true,
  imports: [
    FormsModule,
    CurrencyPipe,
    DecimalPipe,
    RouterLink,
    DashboardLayoutComponent,
  ],
  templateUrl: "./portal.component.html",
  styleUrl: "./portal.component.css",
})
export class PortalComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private routeSubscription?: Subscription;
  readonly checkoutUrl = signal("");
  readonly checkoutCopied = signal(false);
  private readonly routeMap: Record<string, DashboardSection> = {
    cursos: "courses",
    "nova-venda": "new-sale",
    clientes: "customers",
    vendas: "sales",
    comissoes: "commissions",
    estabelecimento: "business",
  };
  ngOnInit() {
    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      const section = this.routeMap[params.get("section") ?? ""] ?? "overview";
      this.section.set(section);
      if (["sales", "customers", "overview", "commissions"].includes(section))
        void this.refreshCourseOrders();
    });
  }
  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
  }
  private go(section: DashboardSection) {
    const slug = Object.keys(this.routeMap).find(
      (k) => this.routeMap[k] === section,
    );
    void this.router.navigate(slug ? ["/portal", slug] : ["/portal"]);
  }
  shareCheckout() {
    const url = this.checkoutUrl();
    if (!url) return;
    const message = `Olá! Seu cadastro foi realizado. Acesse seu link para conferir o curso e finalizar a inscrição (ambiente de homologação): ${url}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }
  async copyCheckout() {
    if (!this.checkoutUrl()) return;
    try {
      await navigator.clipboard.writeText(this.checkoutUrl());
      this.checkoutCopied.set(true);
    } catch {
      this.orderError.set(
        "Não foi possível copiar automaticamente. Selecione o link e copie.",
      );
    }
  }
  async regenerateCheckout(orderId: string) {
    try {
      const token = await this.courseOrders.renewLink(orderId);
      this.checkoutUrl.set(`${window.location.origin}/comprar/${token}`);
      this.checkoutCopied.set(false);
      this.orderSuccess.set(
        "Link de compra gerado. Compartilhe com o cliente.",
      );
      this.saleStep.set("success");
      this.go("new-sale");
    } catch (e) {
      this.orderError.set(
        e instanceof Error ? e.message : "Não foi possível gerar o link.",
      );
    }
  }
  readonly service = inject(CommercialService);
  readonly courseOrders = inject(CourseOrdersService);

  readonly catalog = courses;
  readonly section = signal<DashboardSection>("overview");

  readonly busy = signal(false);
  readonly error = signal("");
  readonly notice = signal("");

  readonly orderBusy = signal(false);
  readonly orderError = signal("");
  readonly orderSuccess = signal("");

  readonly selectedCourse = signal<Course | null>(null);
  readonly saleStep = signal<SaleStep>("guide");
  readonly categoryFilter = signal("Todos");
  readonly courseSearch = signal("");

  readonly categories = [
    "Todos",
    ...new Set(courses.map((course) => course.category)),
  ];

  readonly saleTimeline = [
    {
      number: "01",
      title: "Identifique a necessidade",
      description:
        "Converse com o cliente e confirme qual formação ou atualização ele precisa.",
    },
    {
      number: "02",
      title: "Escolha o curso",
      description:
        "Confira público-alvo, requisitos, estado e disponibilidade da oferta.",
    },
    {
      number: "03",
      title: "Cadastre o aluno",
      description:
        "Preencha os dados necessários para registrar o pedido e preparar a matrícula.",
    },
    {
      number: "04",
      title: "Revise e confirme",
      description:
        "Confira os dados do aluno e as condições da oferta antes de criar o pedido.",
    },
    {
      number: "05",
      title: "Acompanhe o pagamento",
      description:
        "Envie o link por WhatsApp. O cliente confirma o pagamento na página de compra; você não precisa cobrar.",
    },
    {
      number: "06",
      title: "Acompanhe a matrícula",
      description:
        "Consulte a situação do pedido, da matrícula e da comissão no seu painel.",
    },
  ];

  email = "";
  password = "";

  orderConsent = false;
  orderRequestId: string | null = null;

  student: StudentOrderInput = this.emptyStudent();

  readonly testOfferId = "118sc-icetran";
  readonly testOfferPriceCents = 12000;

  get filteredCourses(): Course[] {
    const search = this.courseSearch().trim().toLowerCase();
    const category = this.categoryFilter();

    return this.catalog.filter((course) => {
      const matchesCategory =
        category === "Todos" || course.category === category;

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

  get selectedOfferId(): string | null {
    const course = this.selectedCourse();
    if (!course) return null;

    return course.offers?.includes(this.testOfferId) ? this.testOfferId : null;
  }

  get canCreateTestOrder(): boolean {
    return this.selectedOfferId === this.testOfferId;
  }

  get selectedPrice(): number | null {
    return this.canCreateTestOrder ? this.testOfferPriceCents / 100 : null;
  }

  private emptyStudent(): StudentOrderInput {
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

  selectSection(section: DashboardSection) {
    this.go(section);

    if (["sales", "customers", "overview", "commissions"].includes(section)) {
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

  openCourse(course: Course) {
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

  selectCourseForSale(course: Course) {
    this.openCourse(course);
  }

  continueToStudent() {
    if (!this.canCreateTestOrder) {
      this.orderError.set(
        "Esta oferta ainda não está habilitada para homologação.",
      );
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
    if (this.orderBusy()) return;

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
      const created = await this.courseOrders.create(
        this.student,
        this.orderRequestId,
      );

      this.orderSuccess.set(
        `Cadastro realizado. Pedido: ${created.orderId.slice(0, 12)}. Compartilhe o link para o cliente concluir a compra.`,
      );

      this.checkoutUrl.set(
        created.checkoutToken
          ? `${window.location.origin}/comprar/${created.checkoutToken}`
          : "",
      );
      this.checkoutCopied.set(false);
      this.saleStep.set("success");
      await this.refreshCourseOrders();

      // Limpa os dados pessoais após a confirmação.
      this.student = this.emptyStudent();
      this.orderConsent = false;
      this.orderRequestId = null;
    } catch (e) {
      this.orderError.set(
        e instanceof Error ? e.message : "Não foi possível criar o pedido.",
      );
    } finally {
      this.orderBusy.set(false);
    }
  }

  async refreshCourseOrders() {
    try {
      await this.courseOrders.refresh();
    } catch {
      this.orderError.set("Falha ao consultar pedidos.");
    }
  }

  async login() {
    this.busy.set(true);
    this.error.set("");
    this.notice.set("");

    try {
      await this.service.login(this.email, this.password);
    } catch {
      this.error.set("Não foi possível entrar. Confira e-mail e senha.");
    } finally {
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
      this.notice.set(
        "Se houver uma conta com esse e-mail, você receberá instruções.",
      );
    } catch {
      this.error.set("Não foi possível enviar a recuperação.");
    }
  }

  async refresh() {
    this.error.set("");

    try {
      await Promise.all([this.service.refresh(), this.courseOrders.refresh()]);
    } catch {
      this.error.set("Não foi possível atualizar os dados.");
    }
  }

  get registeredClients() {
    const unique = new Map<string, CourseOrderSummary>();
    for (const order of this.courseOrders.orders()) {
      const key = (order.studentEmail || order.id).toLowerCase();
      if (!unique.has(key)) unique.set(key, order);
    }
    return [...unique.values()];
  }

  get pendingOrders() {
    return this.courseOrders
      .orders()
      .filter((o) => o.paymentStatus === "pending");
  }
  get paidSandboxOrders() {
    return this.courseOrders
      .orders()
      .filter((o) => o.paymentStatus === "paid" && o.environment === "sandbox");
  }
  get orderSimulatedRevenue() {
    return (
      this.paidSandboxOrders.reduce(
        (n, o) => n + (Number(o.amountCents) || 0),
        0,
      ) / 100
    );
  }
  get orderSimulatedCommission() {
    return (
      this.paidSandboxOrders.reduce(
        (n, o) => n + (Number(o.commissionCents) || 0),
        0,
      ) / 100
    );
  }

  get paid() {
    return this.service
      .sales()
      .filter(
        (sale) =>
          sale.status === "paid" &&
          sale.simulated !== true &&
          sale.environment !== "sandbox",
      );
  }

  get revenue() {
    return this.paid.reduce(
      (total, sale) => total + (Number(sale.amount) || 0),
      0,
    );
  }

  get commission() {
    return this.paid.reduce(
      (total, sale) => total + (Number(sale.commissionAmount) || 0),
      0,
    );
  }

  get count() {
    return this.paid.length;
  }

  courseName(id: string) {
    return (
      this.catalog.find(
        (course) => course.id === id || course.offers?.includes(id),
      )?.title || id
    );
  }

  get simulatedSales() {
    return this.service
      .sales()
      .filter(
        (sale) => sale.simulated === true || sale.environment === "sandbox",
      );
  }

  get simulatedCommission() {
    return this.simulatedSales.reduce(
      (total, sale) => total + (Number(sale.commissionAmount) || 0),
      0,
    );
  }

  get simulatedRevenue() {
    return this.simulatedSales.reduce(
      (total, sale) => total + (Number(sale.amount) || 0),
      0,
    );
  }

  get simulatedCount() {
    return this.simulatedSales.length;
  }

  logout() {
    void this.service.logout();
  }
}
