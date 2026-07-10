import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoTarjeta } from '../../components/producto-tarjeta/producto-tarjeta';
import { CATALOGO_VIDEOJUEGOS } from '../../data/datos-prueba';
import { Videojuego} from '../../models/videojuego.model';


@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, ProductoTarjeta],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
  juegosEnOferta: Videojuego[] = CATALOGO_VIDEOJUEGOS.filter(juego => juego.precioOferta);
}
