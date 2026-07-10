import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio'; 
import { DetallePaisComponent } from './pages/detalle-pais/detalle-pais';
import { FavoritosComponent } from './pages/favoritos/favoritos';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'pais/:nombre', component: DetallePaisComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];