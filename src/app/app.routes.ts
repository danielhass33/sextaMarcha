import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Sexta Marcha | Hub automotivo',
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'educacao-no-transito',
    title: 'Educação no Trânsito | Sexta Marcha',
    loadComponent: () => import('./pages/education.component').then(m => m.EducationComponent),
  },
  {
    path: 'cadastro-despachante',
    title: 'Seja Parceiro | Sexta Marcha',
    loadComponent: () => import('./pages/partner-signup.component').then(m => m.PartnerSignupComponent),
  },
  {
    path: 'portal',
    title: 'Portal do Despachante | Sexta Marcha',
    loadComponent: () => import('./pages/portal.component').then(m => m.PortalComponent),
  },
  {
    path: 'solucoes/:slug',
    title: 'Soluções | Sexta Marcha',
    loadComponent: () => import('./pages/service-detail.component').then(m => m.ServiceDetailComponent),
  },
  {
    path: 'master',
    title: 'Painel Master | Sexta Marcha',
    loadComponent: () => import('./pages/master.component').then(m => m.MasterComponent),
  },
  { path: '**', redirectTo: '' },
];
