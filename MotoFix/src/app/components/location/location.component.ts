import { Component } from '@angular/core';

interface Schedule {
  day: string;
  hours: string;
  open: boolean;
}

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  schedule: Schedule[] = [
    { day: 'Lunes', hours: '8:00 AM – 6:00 PM', open: true },
    { day: 'Martes', hours: '8:00 AM – 6:00 PM', open: true },
    { day: 'Miércoles', hours: '8:00 AM – 6:00 PM', open: true },
    { day: 'Jueves', hours: '8:00 AM – 6:00 PM', open: true },
    { day: 'Viernes', hours: '8:00 AM – 6:00 PM', open: true },
    { day: 'Sábado', hours: '8:00 AM – 2:00 PM', open: true },
    { day: 'Domingo', hours: 'Cerrado', open: false }
  ];

  get todayStatus(): string {
    const day = new Date().getDay();
    if (day === 0) return 'Hoy: Cerrado';
    const hours = new Date().getHours();
    if (day === 6) {
      return hours >= 8 && hours < 14 ? 'Abierto ahora' : 'Cerrado por hoy';
    }
    return hours >= 8 && hours < 18 ? 'Abierto ahora' : 'Cerrado por hoy';
  }

  get isOpenNow(): boolean {
    const day = new Date().getDay();
    const hours = new Date().getHours();
    if (day === 0) return false;
    if (day === 6) return hours >= 8 && hours < 14;
    return hours >= 8 && hours < 18;
  }
}
