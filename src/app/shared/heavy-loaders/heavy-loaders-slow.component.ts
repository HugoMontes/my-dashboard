import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Loader Slow
    </section>
  `,
})
export class HeavyLoadersSlowComponent {

  // Agregar una propiedad como imput para cambiar algun estilo
  @Input({ required: true}) cssClass!: string;

  // Agregar en el constructor un mensaje
  constructor() {
    const start = Date.now();
    // Eperar 3 segundo para que el codigo se siga ejecutando
    while(Date.now() - start < 3000) {
    }
    console.log('Cargado correctamente.');
  }
}
