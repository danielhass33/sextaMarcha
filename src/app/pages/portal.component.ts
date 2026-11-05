import { Component, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CurrencyPipe, DecimalPipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { CommercialService } from "../core/commercial.service";
import { courses } from "../data/courses";
import {
  DashboardLayoutComponent,
  DashboardSection,
} from "../layouts/dashboard/dashboard-layout.component";

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
export class PortalComponent {
  readonly service = inject(CommercialService);
  readonly catalog = courses;
  readonly section = signal<DashboardSection>("overview");
  readonly busy = signal(false);
  readonly error = signal("");
  readonly notice = signal("");

  email = "";
  password = "";

  selectSection(section: DashboardSection) {
    this.section.set(section);
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
      await this.service.refresh();
    } catch {
      this.error.set("Não foi possível atualizar os dados.");
    }
  }

  get paid() {
    return this.service.sales().filter((s) => s.status === "paid");
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
    return this.catalog.find((c) => c.id === id)?.title || id;
  }

  logout() {
    this.service.logout();
  }
}
