import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  pokemonName: string = 'pikachu';
  pokemon: any = null;
  loading: boolean = false;
  error: string = '';

  private searchTerms = new Subject<string>();
  private subscription?: Subscription;
  private readonly DEBOUNCE_MS = 600;

  // Contador para descartar respuestas de busquedas viejas que lleguen
  // tarde (evita que una peticion anterior sobreescriba una mas reciente).
  private requestId = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Busqueda automatica: espera a que el usuario deje de escribir
    // y evita repetir la misma busqueda dos veces seguidas.
    this.subscription = this.searchTerms
      .pipe(
        debounceTime(this.DEBOUNCE_MS),
        distinctUntilChanged(),
        filter((term) => !!term && term.trim().length > 0)
      )
      .subscribe((term) => this.performSearch(term));

    this.performSearch(this.pokemonName);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onSearchChange(term: string): void {
    this.searchTerms.next(term);
  }

  buscarPokemon(): void {
    if (!this.pokemonName || !this.pokemonName.trim()) {
      return;
    }
    // Busqueda inmediata (boton / Enter), sin esperar el debounce.
    this.performSearch(this.pokemonName);
  }

  private performSearch(term: string): void {
    const currentRequestId = ++this.requestId;

    this.loading = true;
    this.error = '';

    this.http
      .get<any>(`https://pokeapi.co/api/v2/pokemon/${term.toLowerCase().trim()}`)
      .subscribe({
        next: (response) => {
          // Si mientras tanto se lanzo una busqueda mas nueva, ignoramos
          // esta respuesta "vieja" para que no sobreescriba el resultado actual.
          if (currentRequestId !== this.requestId) {
            return;
          }
          this.pokemon = response;
          this.loading = false;
        },
        error: () => {
          if (currentRequestId !== this.requestId) {
            return;
          }
          this.loading = false;
          this.error = 'Pokémon no encontrado';
          this.pokemon = null;
        }
      });
  }
}
