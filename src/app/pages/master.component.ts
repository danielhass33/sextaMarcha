import { Component, inject, signal } from "@angular/core";
import { CurrencyPipe, DecimalPipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { CommercialService, PartnerProfile } from "../core/commercial.service";
import { courses } from "../data/courses";
import {
  DashboardLayoutComponent,
  DashboardSection,
} from "../layouts/dashboard/dashboard-layout.component";

@Component({
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe, RouterLink, DashboardLayoutComponent],
  templateUrl: "./master.component.html",
  styleUrl: "./master.component.css",
})
export class MasterComponent {
  readonly service = inject(CommercialService);

  readonly section = signal<DashboardSection>("overview");
  readonly filter = signal("");
  readonly status = signal("all");
  readonly busy = signal(false);
  readonly error = signal("");

  readonly catalog = courses;

  selectSection(section: DashboardSection) {
    this.section.set(section);
  }

  get partners() {
    return this.service
      .partners()
      .filter(
        (p) =>
          (this.status() === "all" || p.status === this.status()) &&
          `${p.name} ${p.business} ${p.email} ${p.cnpj} ${p.crdd}`
            .toLowerCase()
            .includes(this.filter().toLowerCase()),
      );
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
    return this.service.sales().filter((s) => s.status === "paid");
  }

  get revenue() {
    return this.paid.reduce((total, s) => total + (Number(s.amount) || 0), 0);
  }

  get commission() {
    return this.paid.reduce(
      (total, s) => total + (Number(s.commissionAmount) || 0),
      0,
    );
  }

  count(uid: string) {
    return this.paid.filter((s) => s.partnerId === uid).length;
  }

  total(uid: string) {
    return this.paid
      .filter((s) => s.partnerId === uid)
      .reduce((total, s) => total + (Number(s.amount) || 0), 0);
  }

  courseName(id: string) {
    return courses.find((c) => c.id === id)?.title || id;
  }

  partnerName(uid: string) {
    return this.service.partners().find((p) => p.uid === uid)?.business || uid;
  }

  async reload() {
    this.busy.set(true);
    this.error.set("");

    try {
      await this.service.refresh();
    } catch {
      this.error.set("Falha ao atualizar os dados.");
    } finally {
      this.busy.set(false);
    }
  }

  async changeStatus(partner: PartnerProfile, status: "active" | "suspended") {
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

      await httpsCallable(
        functions,
        "setPartnerStatus",
      )({
        partnerId: partner.uid,
        status,
      });

      await this.service.refresh();
    } catch {
      this.error.set(
        "Não foi possível atualizar o parceiro. Confira as permissões e a Cloud Function.",
      );
    } finally {
      this.busy.set(false);
    }
  }

  logout() {
    this.service.logout();
  }
}
