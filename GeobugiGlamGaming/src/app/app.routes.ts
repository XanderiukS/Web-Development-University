import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Ofertas } from './pages/ofertas/ofertas';


export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'productos', component: Productos },
    { path: 'ofertas', component: Ofertas },
    { path: '**', redirectTo: '' }
];
