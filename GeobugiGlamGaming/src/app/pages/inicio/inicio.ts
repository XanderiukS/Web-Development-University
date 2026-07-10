import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  empresa = {
    nombre: 'Geobugi Gaming',
    mision: 'Nuestra misión es derribar las fronteras del juego tradicional, ofreciendo a nuestra comunidad lo mejor de dos mundos: la potencia de las consolas de sobremesa (PlayStation, Xbox, Switch) y la versatilidad de las nuevas plataformas portátiles Android. En Geobugi Gaming, nos dedicamos a asesorar y equipar a cada jugador para que lleve su pasión a cualquier lugar, garantizando acceso a hardware de última generación y dispositivos de nicho que redefinen la experiencia portátil.',
    vision: 'Ser la tienda de referencia para el gamer moderno que busca innovación y portabilidad. Aspiramos a liderar el mercado nacional como expertos en consolas multiplataforma y dispositivos Android, siendo reconocidos por introducir las últimas tendencias en hardware handheld y por crear una cultura donde el juego no tiene límites físicos.',
    valores: ['Calidad', 'Innovación', 'Pasión por el Gaming'],
    contacto: {
      telefono: '+502 1234-5678',
      correo: 'info@geobugigaming.com',
      redes: '@GeobugiGaming'
    }
  };
}
