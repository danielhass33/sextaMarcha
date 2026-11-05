import { Component, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DecimalPipe, CurrencyPipe } from "@angular/common";
import { CommercialService } from "../core/commercial.service";
import { courses } from "../data/courses";
@Component({
  standalone: true,
  imports: [FormsModule, DecimalPipe, CurrencyPipe],
  styleUrl: "./portal.component.css",
  templateUrl: "./portal.component.html",
})
export class PortalComponent {
  readonly service = inject(CommercialService);
  readonly catalog = courses;
  email = "";
  password = "";
  busy = signal(false);
  error = signal("");
  async login() {
    this.busy.set(true);
    this.error.set("");
    try {
      await this.service.login(this.email, this.password);
    } catch {
      this.error.set(
        "Não foi possível entrar. Confira as credenciais e a habilitação.",
      );
    } finally {
      this.busy.set(false);
    }
  }
  async refresh() {
    try {
      await this.service.refresh();
    } catch {
      this.error.set("Erro ao atualizar dados.");
    }
  }
  get confirmed() {
    return this.service.sales().filter((s) => s.status === "paid");
  }
  get revenue() {
    return this.confirmed.reduce((a, s) => a + (Number(s.amount) || 0), 0);
  }
  get commission() {
    return this.confirmed.reduce(
      (a, s) => a + (Number(s.commissionAmount) || 0),
      0,
    );
  }
  get partners() {
    return new Set(this.confirmed.map((s) => s.partnerId)).size;
  }
  courseCount(id: string) {
    return this.confirmed.filter((s) => s.courseId === id).length;
  }
  courseRevenue(id: string) {
    return this.confirmed
      .filter((s) => s.courseId === id)
      .reduce((a, s) => a + (Number(s.amount) || 0), 0);
  }
  courseName(id: string) {
    return courses.find((c) => c.id === id)?.title || id;
  }
}
