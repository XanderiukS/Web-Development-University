import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DogApiResponse, DogImage } from '../models/dog.model';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private readonly apiUrl = 'https://dog.ceo/api/breeds/image/random/20';

  constructor(private http: HttpClient) {}

  getRandomDogs(): Observable<DogImage[]> {
    return this.http.get<DogApiResponse>(this.apiUrl).pipe(
      map((response) =>
        response.message.map((url) => ({
          url,
          breed: this.extractBreed(url),
        }))
      )
    );
  }

  private extractBreed(url: string): string {
    try {
      const parts = new URL(url).pathname.split('/');
      const segment = parts[2] ?? 'unknown';
      const [main, sub] = segment.split('-');
      return sub ? `${sub} ${main}` : main;
    } catch {
      return 'unknown';
    }
  }
}
