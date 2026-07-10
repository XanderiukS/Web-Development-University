import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoTarjeta } from '../../components/producto-tarjeta/producto-tarjeta';
import { CATALOGO_VIDEOJUEGOS } from '../../data/datos-prueba';
import { Videojuego} from '../../models/videojuego.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, ProductoTarjeta],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  listaVideojuegos: Videojuego[] = CATALOGO_VIDEOJUEGOS;
}
