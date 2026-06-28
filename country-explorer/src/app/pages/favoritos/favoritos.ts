import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaisesService } from '../../services/paises';
import { Pais } from '../../models/models';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css'
})
export class FavoritosComponent implements OnInit {
  paisesFavoritos: Pais[] = [];
  private paisesService = inject(PaisesService);

  ngOnInit(): void {
    // Leemos la memoria del navegador al cargar la pantalla
    this.paisesFavoritos = this.paisesService.obtenerFavoritos();
  }
}