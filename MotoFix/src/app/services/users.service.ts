import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User, Client } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map((users) =>
        users.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email.toLowerCase(),
          phone: user.phone.split(' x')[0],
          company: user.company.name,
          initials: user.name
            .split(' ')
            .slice(0, 2)
            .map((n) => n.charAt(0).toUpperCase())
            .join('')
        }))
      )
    );
  }
}
