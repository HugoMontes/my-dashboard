import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public menuItems = routes
    // Con .map barremos todas las rutas de app.routes.
    // con '?? []' indicamos que si no existe children, retorne un array vacio.
    .map(route => route.children ?? [])
    // Combina todos los subarreglos en un solo arreglo
    .flat()
    // Filtrar unicamente a los elementos que tengan valor en path
    .filter(route => route && route.path)
    // Filtrar aquel elemento que en su path tenga ':'
    .filter(route => !route.path?.includes(':'));

  constructor() {
    console.log(this.menuItems);
  }
}
