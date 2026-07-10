import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'clientes',
    loadComponent: () =>
      import('./pages/clients/clients.component').then((m) => m.ClientsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
