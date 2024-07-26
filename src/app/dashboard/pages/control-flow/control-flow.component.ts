import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  // Crear una señal como propiedad de clase con valor por defecto false
  public showContent = signal(false);

  // Crear un metodo que cambia el valor de la señal
  public toggleContent() {
    this.showContent.update(value => !value);
  }

}
