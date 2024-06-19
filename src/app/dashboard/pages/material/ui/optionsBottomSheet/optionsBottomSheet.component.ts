import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-options-bottom-sheet',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './optionsBottomSheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsBottomSheetComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<OptionsBottomSheetComponent>
  ) {}

  public openLink(event: MouseEvent): void {
    console.log('openLink', event);
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
