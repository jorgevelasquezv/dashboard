import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public toggleContent() {
    this.showContent.update((value) => !value);
  }

  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Qwik', 'Ember']);

  public frameworksEmpty = signal([]);

  public setGrade(value: Event) {
    const target = value.target as HTMLInputElement;
    const grade = target.value as Grade
    this.grade.set(grade);
  }
}
