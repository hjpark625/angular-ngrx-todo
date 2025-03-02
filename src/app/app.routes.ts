import { Routes } from '@angular/router'

export const routes: Routes = [
  { path: '', loadComponent: () => import('@app/Home/home.component').then((C) => C.HomeComponent) }
]
