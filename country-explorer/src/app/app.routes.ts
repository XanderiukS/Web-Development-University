import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio'; 
import { DetallePaisComponent } from './pages/detalle-pais/detalle-pais';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  
  { path: 'pais/:nombre', component: DetallePaisComponent },
  
  { path: '**', redirectTo: '', pathMatch: 'full' }
];