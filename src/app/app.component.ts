import { Component, inject, signal } from "@angular/core";
import {
  Router,
  RouterLink,
  RouterOutlet,
  NavigationEnd,
} from "@angular/router";
import { filter } from "rxjs";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  private readonly router = inject(Router);

  menuOpen = signal(false);
  isSystemRoute = signal(false);

  year = new Date().getFullYear();
  email = environment.contactEmail;
  whatsapp = environment.contactWhatsApp;

  constructor() {
    this.updateSystemRoute();

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe(() => {
        this.updateSystemRoute();
        this.menuOpen.set(false);
      });
  }

  private updateSystemRoute(): void {
    const path = this.router.url.split("?")[0].split("#")[0];

    this.isSystemRoute.set(
      path === "/portal" ||
        path.startsWith("/portal/") ||
        path === "/master" ||
        path.startsWith("/master/"),
    );
  }
}
