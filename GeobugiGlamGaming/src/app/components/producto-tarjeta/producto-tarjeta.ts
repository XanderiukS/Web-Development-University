import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Videojuego } from '../../models/videojuego.model';

@Component({
  selector: 'app-producto-tarjeta',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule], // Importamos las herramientas de Material
  templateUrl: './producto-tarjeta.html',
  styleUrl: './producto-tarjeta.css'
})
export class ProductoTarjeta {
  @Input() juego!: Videojuego;
}
