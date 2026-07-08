import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Afinación de Motor',
      description:
        'Mantenemos tu motor en óptimas condiciones con revisión completa de bujías, filtros, cables de bujía y sistema de ignición.',
      icon: 'engine',
      features: ['Revisión de bujías', 'Filtro de aire y combustible', 'Sistema de ignición', 'Revisión de correas']
    },
    {
      title: 'Sistema de Frenos',
      description:
        'Tu seguridad es nuestra prioridad. Inspeccionamos y reparamos pastillas, discos, tambores y líneas hidráulicas.',
      icon: 'brake',
      features: ['Pastillas y discos', 'Tambores y zapatas', 'Líquido de frenos', 'Freno de mano']
    },
    {
      title: 'Suspensión y Dirección',
      description:
        'Garantizamos comodidad y control total del vehículo con revisión y reemplazo de amortiguadores, rótulas y terminales.',
      icon: 'suspension',
      features: ['Amortiguadores', 'Rótulas y terminales', 'Alineación y balanceo', 'Dirección hidráulica']
    },
    {
      title: 'Diagnóstico Computarizado',
      description:
        'Con equipos de última generación detectamos fallas electrónicas y mecánicas de forma precisa y eficiente.',
      icon: 'diagnostic',
      features: ['Lectura de códigos OBD', 'Scanner automotriz', 'Diagnóstico eléctrico', 'Informe detallado']
    },
    {
      title: 'Cambio de Aceite',
      description:
        'Servicio rápido con aceites certificados para todas las marcas. Incluye revisión de niveles y cambio de filtro.',
      icon: 'oil',
      features: ['Aceites sintéticos y minerales', 'Filtro de aceite', 'Revisión de niveles', 'Check-up de 21 puntos']
    },
    {
      title: 'Transmisión',
      description:
        'Expertos en reparación y mantenimiento de transmisiones automáticas y mecánicas, garantizando cambios suaves.',
      icon: 'transmission',
      features: ['Transmisión automática', 'Transmisión manual', 'Caja de cambios', 'Diferencial y cardán']
    }
  ];
}
