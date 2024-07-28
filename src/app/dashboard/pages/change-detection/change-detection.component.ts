import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="currentFramework()" />
    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `
})
export default class ChangeDetectionComponent {

  // Agregar una propiedad de tipo señal computada 
  public currentFramework = computed(
    // Mediante un CallBack retornar un mensaje con el name de frameworkAsSignal
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  // Crear una propiedad señal
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  // Crear un propiedad tradicional
  public frameworkAsProperty = ({
    name: 'Angular',
    releaseDate: 2016,
  });

  constructor() {
    // En el constructor indicar que despues de tres segundos
    // cabiar el nombre de frameworkAsProperty a "React"
    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React';

      // this.frameworkAsSignal.update(value => ({
      //   ...value,
      //   name: 'React'
      // }));

      this.frameworkAsSignal.update(value => {
        value.name = 'React';
        return { ...value };
      });

      console.log('Hecho');
    }, 3000);
  }

}
