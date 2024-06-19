import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="currentFramework()" withShadow />
    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `,
  styles: ``,
})
export default class ChangeDetectionComponent {
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  public currentFramework = computed(() => `Change detection - ${this.frameworkAsSignal().name}`)

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.set({
        name: 'React',
        releaseDate: 2013,
      });
      this.frameworkAsProperty = {
        name: 'React',
        releaseDate: 2013,
      };
    }, 3000);
  }
}
