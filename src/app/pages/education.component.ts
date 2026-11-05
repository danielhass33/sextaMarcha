import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { courses } from '../data/courses';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./education.component.html",
  styleUrl: "./education.component.css"
})
export class EducationComponent {
  readonly catalog = courses;
  readonly categories = ['Todos', ...new Set(courses.map(course => course.category))];
  readonly selectedCategory = signal('Todos');
  readonly visibleCourses = computed(() => this.catalog.filter(course => this.selectedCategory() === 'Todos' || course.category === this.selectedCategory()));

  // Substitua os arquivos abaixo por fotografias reais na pasta public/images/courses/.
  // Enquanto não houver foto, o fundo escuro do card permanece visível.
  imageFor(id: string): string {
    return `images/courses/${id}.jpg`;
  }
}
