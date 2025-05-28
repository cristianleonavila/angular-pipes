import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes Básicos',
    loadComponent: () => import('./pages/basic/basic.component')
  },
  {
    path: 'numbers',
    title: 'Pipes Números',
    loadComponent: () => import('./pages/numbers/numbers.component')
  },
  {
    path: 'uncommon',
    title: 'Pipes poco Comunes',
    loadComponent: () => import('./pages/uncommon/uncommon.component')
  },
  {
    path: 'custom',
    title: 'Pipes Personalizados',
    loadComponent: () => import('./pages/custom/custom.component')
  },
  {
    path: '**',
    redirectTo: 'basic'
  }
];
