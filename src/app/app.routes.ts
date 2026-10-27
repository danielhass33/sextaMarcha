import { Routes } from '@angular/router';
export const routes: Routes = [
  {path:'',title:'Sexta Marcha | Hub automotivo',loadComponent:()=>import('./pages/home.component').then(m=>m.HomeComponent)},
  {path:'solucoes/:slug',loadComponent:()=>import('./pages/service-detail.component').then(m=>m.ServiceDetailComponent)},
  {path:'**',redirectTo:''}
];
