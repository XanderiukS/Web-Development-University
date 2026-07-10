import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { PaisesService } from '../../services/paises'; 
import { Pais } from '../../models/models';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent implements OnInit {
  listaPaises: Pais[] = [];
  textoBusqueda: string = '';
  continenteSeleccionado: string = 'Todos';

  private paisesService = inject(PaisesService);
  private cdr = inject(ChangeDetectorRef); 

  ngOnInit(): void {
    this.paisesService.obtenerTodosLosPaises().subscribe({
      next: (respuesta: Pais[]) => {
        this.listaPaises = respuesta;
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error('Error del servidor:', err)
    });
  }

get paisesFiltrados(): Pais[] {
    if (!Array.isArray(this.listaPaises)) {
      console.warn('Esperaba un arreglo de países, pero recibí:', this.listaPaises);
      return [];
    }

    return this.listaPaises.filter(pais => {
      const nombre = pais.names?.common || '';
      const region = pais.region || '';
      
      const coincideTexto = nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase());
      const coincideContinente = this.continenteSeleccionado === 'Todos' || region === this.continenteSeleccionado;
      
      return coincideTexto && coincideContinente;
    });
  }
}