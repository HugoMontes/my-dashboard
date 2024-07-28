import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  // Agregar la plantilla para mostrar el titulo
  template: `
    <h1 class="text-3xl mb-5"> {{ title }}</h1>
  `,
  styles: ``
})
export class TitleComponent {
  // Agregar la propiedad title como obligatorio
  // Agregar el decorador @Input
  @Input({ required: true }) title!: string;

  // Agregar otra nueva propiedad de entrada de tipo boolean
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
