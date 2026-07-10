import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { DogCardComponent } from '../dog-card/dog-card.component';
import { DogImage } from '../../models/dog.model';

type GalleryState = 'loading' | 'success' | 'error';

@Component({
  selector: 'app-gallery',
  imports: [DogCardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  private readonly dogService = inject(DogService);

  readonly state = signal<GalleryState>('loading');
  readonly dogs = signal<DogImage[]>([]);
  readonly errorMessage = signal<string>('');

  readonly isLoading = computed(() => this.state() === 'loading');
  readonly isSuccess = computed(() => this.state() === 'success');
  readonly isError = computed(() => this.state() === 'error');

  ngOnInit(): void {
    this.fetchDogs();
  }

  fetchDogs(): void {
    this.state.set('loading');
    this.dogs.set([]);
    this.errorMessage.set('');

    this.dogService.getRandomDogs().subscribe({
      next: (dogs) => {
        this.dogs.set(dogs);
        this.state.set('success');
      },
    });
  }
}
