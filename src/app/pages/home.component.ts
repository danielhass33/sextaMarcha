import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { courses } from "../data/courses";
@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  readonly featuredCourses = courses.slice(0, 3);
}
