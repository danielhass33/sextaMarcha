import { Component, signal } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { environment } from "../environments/environment";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  menuOpen = signal(false);
  year = new Date().getFullYear();
  email = environment.contactEmail;
  whatsapp = environment.contactWhatsApp;
}
