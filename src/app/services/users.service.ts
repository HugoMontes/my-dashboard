import { computed, inject, Injectable, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

// Crear una interface
interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Instanciar el sevicio HttpClient de Angular
  private http = inject(HttpClient);

  // Crear una propiedad privado de tipo señal 
  #state = signal<State>({
    loading: true,
    users: [],
  });

  // Usar señales computadas para devolver los usuarios desde una propiedad privada
  // Las señales seran usandas unicamente en modo lectura.
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    // Disparar la peticion HTTP
    //this.http.get<UsersResponse>('/api/users')
    this.http.get<UsersResponse>('https://reqres.in/api/users')
      // Retrasamos la emision de la respuesta por 1.5 segundos
      .pipe(delay(1500))
      // Suscribir al observable devuelto por http.get
      .subscribe(res => {      
        // Establecer la informacion en la señal
        this.#state.set({
          loading: false,
          users: res.data,
        });
      })
  }

  // Metodo que realiza la peticion y retorna un observable
  getUserById(id: string){
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map( resp => resp.data)
      );
  }
}
