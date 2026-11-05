import { Component, EventEmitter, Input, Output, signal } from "@angular/core";

export type DashboardSection =
  | "overview"
  | "courses"
  | "new-sale"
  | "customers"
  | "sales"
  | "commissions"
  | "business"
  | "partners";

@Component({
  selector: "app-dashboard-layout",
  standalone: true,
  templateUrl: "./dashboard-layout.component.html",
  styleUrl: "./dashboard-layout.component.css",
})
export class DashboardLayoutComponent {
  @Input()
  mode: "partner" | "master" = "partner";

  @Input()
  active: DashboardSection = "overview";

  @Input()
  name = "";

  @Input()
  business = "";

  @Output()
  sectionChange = new EventEmitter<DashboardSection>();

  @Output()
  logout = new EventEmitter<void>();

  readonly mobileOpen = signal(false);

  get isMaster(): boolean {
    return this.mode === "master";
  }

  navigate(section: DashboardSection): void {
    this.sectionChange.emit(section);
    this.mobileOpen.set(false);
  }

  signOut(): void {
    this.logout.emit();
    this.mobileOpen.set(false);
  }
}
