import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/req-response';

// Crear una interface
interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Crear una propiedad privado de tipo señal 
  #state = signal<State>({
    loading: true,
    users: [],
  })

  constructor() {
    console.log('Cargando data...');
  }
}
