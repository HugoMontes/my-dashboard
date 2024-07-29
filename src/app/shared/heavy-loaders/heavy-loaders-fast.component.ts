import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section [ngClass]="['w-full', cssClass]">
    <!-- Insertar contenido dinamico en la plantila desde el exterior -->
    <ng-content></ng-content>
   </section>
  `,
})
export class HeavyLoadersFastComponent {
  // Recibir cssClass requerido
  // Indicar que siempre debe tener un valor "cssClass!"
  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('HeavyLoaderFast creado.');
  }
}
