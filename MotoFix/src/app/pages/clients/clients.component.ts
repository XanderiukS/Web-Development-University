import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Client } from '../../models/user.model';

@Component({
  selector: 'app-clients',
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  loading = true;
  error = false;
  errorMessage = '';

  private readonly avatarColors = [
    '#E63946',
    '#2B6CB0',
    '#276749',
    '#744210',
    '#553C9A',
    '#702459',
    '#1A535C',
    '#F4A261',
    '#2D3748',
    '#C05621'
  ];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.loading = true;
    this.error = false;

    this.usersService.getClients().subscribe({
      next: (clients) => {
        this.clients = clients;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.errorMessage =
          'No se pudieron cargar los clientes. Verifique su conexión e intente nuevamente.';
        this.loading = false;
      }
    });
  }

  getAvatarColor(id: number): string {
    return this.avatarColors[(id - 1) % this.avatarColors.length];
  }

  formatPhone(phone: string): string {
    return phone.replace(/[^\d\s\-\+\(\)\.]/g, '').trim();
  }
}
