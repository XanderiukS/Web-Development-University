import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PaisesService } from '../../services/paises'; 
import { Pais } from '../../models/models';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-pais.html',
  styleUrl: './detalle-pais.css'
})
export class DetallePaisComponent implements OnInit {
  pais: Pais | null = null;
  cargando: boolean = true;
  esFavorito: boolean = false;

  private route = inject(ActivatedRoute);
  private paisesService = inject(PaisesService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const nombrePais = params.get('nombre');
      
      if (nombrePais) {
        this.cargando = true; 
        this.cdr.detectChanges();
        
        this.paisesService.obtenerPaisPorNombre(nombrePais).subscribe({
          next: (data) => {
            this.pais = data;
            this.esFavorito = this.paisesService.esFavorito(this.pais.names.common);
            this.cargando = false;
            this.cdr.detectChanges();
          },
          error: (err) => {
            console.error('Error al cargar detalles:', err);
            this.cargando = false;
            this.cdr.detectChanges();
          }
        });
      }
    });
  }

  toggleFavorito(): void {
    if (this.pais) {
      if (this.esFavorito) {
        this.paisesService.eliminarFavorito(this.pais.names.common);
      } else {
        this.paisesService.agregarFavorito(this.pais);
      }
      this.esFavorito = !this.esFavorito; 
    }
  }

  getMoneda(pais: Pais): string {
    if (!pais.currencies) return 'No disponible';
    const primeraLlave = Object.keys(pais.currencies)[0];
    const moneda = pais.currencies[primeraLlave];
    return `${moneda.name} (${moneda.symbol})`;
  }

getIdiomas(pais: Pais): string {
    if (!pais.languages) return 'No disponible';
        return Object.values(pais.languages)
                 .map((idioma: any) => idioma.name || idioma)
                 .join(', ');
  }

  getCapital(pais: Pais): string {
    if (!pais.capitals || pais.capitals.length === 0) return 'N/A';
    return pais.capitals[0].name || 'N/A';
  }
}