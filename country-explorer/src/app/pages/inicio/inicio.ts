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
    return this.listaPaises.filter(pais => {
      const coincideTexto = pais.country.toLowerCase().includes(this.textoBusqueda.toLowerCase());
      const coincideContinente = this.continenteSeleccionado === 'Todos' || pais.continent === this.continenteSeleccionado;
      return coincideTexto && coincideContinente;
    });
  }
}