import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LeadFormComponent } from "../components/lead-form.component";
import { services } from "../data/services";
@Component({
  standalone: true,
  imports: [RouterLink, LeadFormComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  catalog = services;
}
