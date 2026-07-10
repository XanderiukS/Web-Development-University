import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pais } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private apiUrl = 'https://api.restcountries.com/countries/v5'; 
  
  private apiKey = 'rc_live_7c9996ba644141558279195d56f20659'; 
  
  private storageKey = 'paises_favoritos';

  constructor(private http: HttpClient) { }

  obtenerTodosLosPaises(): Observable<Pais[]> {
    return this.http.get<any>(`${this.apiUrl}?api-key=${this.apiKey}`)
      .pipe(map(response => response.data.objects));
  }

  obtenerPaisPorNombre(nombre: string): Observable<Pais> {
    return this.http.get<any>(`${this.apiUrl}?q=${nombre}&api-key=${this.apiKey}`)
      .pipe(map(response => response.data.objects[0]));
  }

  obtenerFavoritos(): Pais[] {
    if (typeof localStorage !== 'undefined') {
      const favs = localStorage.getItem(this.storageKey);
      return favs ? JSON.parse(favs) : [];
    }
    return [];
  }

  esFavorito(nombre: string): boolean {
    return this.obtenerFavoritos().some(pais => pais.names.common === nombre);
  }

  agregarFavorito(pais: Pais): void {
    const favoritos = this.obtenerFavoritos();
    if (!this.esFavorito(pais.names.common)) {
      favoritos.push(pais);
      localStorage.setItem(this.storageKey, JSON.stringify(favoritos));
    }
  }

  eliminarFavorito(nombre: string): void {
    let favoritos = this.obtenerFavoritos();
    favoritos = favoritos.filter(pais => pais.names.common !== nombre);
    localStorage.setItem(this.storageKey, JSON.stringify(favoritos));
  }
}