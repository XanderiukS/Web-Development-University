import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { DogImage } from '../../models/dog.model';

@Component({
  selector: 'app-dog-card',
  imports: [NgClass],
  templateUrl: './dog-card.component.html',
  styleUrl: './dog-card.component.scss',
})
export class DogCardComponent {
  @Input({ required: true }) dog!: DogImage;
  @Input() index: number = 0;

  imageLoaded = false;
  imageError = false;

  onLoad(): void {
    this.imageLoaded = true;
  }

  onError(): void {
    this.imageError = true;
  }

  get animationDelay(): string {
    return `${this.index * 35}ms`;
  }
}
