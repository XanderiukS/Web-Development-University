import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesService } from '../../services/paises'; 
import { Pais } from '../../models/models';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent implements OnInit {
  listaPaises: Pais[] = [];
  private paisesService = inject(PaisesService);

  ngOnInit(): void {
    this.paisesService.obtenerTodosLosPaises().subscribe({
      next: (respuesta: Pais[]) => {
        this.listaPaises = respuesta;
        console.log('¡Éxito! Países cargados:', this.listaPaises);
      },
      error: (err) => {
        console.error('Error del servidor:', err);
      }
    });
  }
}