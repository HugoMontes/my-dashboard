import { Component, signal } from '@angular/core';

// Crear un tipo de dato que permite unicamente 3 valores
type Grade = 'A'|'B'|'F';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  // Crear una señal como propiedad de clase con valor por defecto false
  public showContent = signal(false);

  // Crear una nueva señal de tipo Grade
  public grade = signal<Grade>('A');

  // Crear un metodo que cambia el valor de la señal
  public toggleContent() {
    this.showContent.update(value => !value);
  }

}
