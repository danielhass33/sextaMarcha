import { Routes } from "@angular/router";
export const routes: Routes = [
  {
    path: "",
    title: "Sexta Marcha | Hub automotivo",
    loadComponent: () =>
      import("./pages/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "solucoes/:slug",
    loadComponent: () =>
      import("./pages/service-detail.component").then(
        (m) => m.ServiceDetailComponent,
      ),
  },
  { path: 'educacao-no-transito', title: 'Educação no Trânsito | Sexta Marcha', loadComponent: () => import('./pages/education.component').then(m => m.EducationComponent) },
  { path: 'portal', title: 'Portal do Despachante | Sexta Marcha', loadComponent: () => import('./pages/portal.component').then(m => m.PortalComponent) },
  { path: "cadastro-despachante", title: "Cadastro de Despachante | Sexta Marcha", loadComponent: () => import("./pages/partner-signup.component").then(m => m.PartnerSignupComponent) },
  { path: "**", redirectTo: "" },
];
