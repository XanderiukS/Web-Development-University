import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private apiUrl = 'https://disease.sh/v3/covid-19/countries';

  constructor(private http: HttpClient) { }

  obtenerTodosLosPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrl);
  }


  obtenerPaisPorNombre(nombre: string): Observable<Pais> {
    return this.http.get<Pais>(`${this.apiUrl}/${nombre}`);
  }
}