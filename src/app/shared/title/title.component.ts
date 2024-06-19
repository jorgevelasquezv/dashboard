import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `<h1
    [class]="{
      'text-3xl': true,
      'font-bold': true,
      'mb-5': true,
      'drop-shadow': withShadow
    }"
  >
    {{ title }}
  </h1>`,
  styles: ``,
})
export class TitleComponent {
  private _title: string = '';

  @Input({ transform: booleanAttribute }) withShadow: boolean = false;

  @Input({ required: true })
  set title(value: string) {
    this._title = value;
  }

  get title(): string {
    return this._title;
  }
}
