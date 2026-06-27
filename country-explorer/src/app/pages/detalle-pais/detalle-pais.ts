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
}