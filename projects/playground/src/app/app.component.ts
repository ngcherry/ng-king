import { Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  KNButtonComponent,
  KNIconComponent,
  KNIconRegistry,
  KNSelectComponent,
  KNSelectItemComponent,
  KNSpinnerComponent,
} from '../../../ng-king/src/public-api';
import { KNCheckboxComponent } from '../../../ng-king/src/lib/ui/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { KNRadioGroupComponent } from '../../../ng-king/src/lib/ui/radio-group/radio-group.component';
import { KNRadioItemComponent } from '../../../ng-king/src/lib/ui/radio-group/radio-button/radio-item.component';
import { MultiSelectComponent } from '../../../ng-king/src/lib/ui/multi-select/multi-select.component';
import { MultiSelectItemComponent } from '../../../ng-king/src/lib/ui/multi-select/multi-select-item/multi-select-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    KNIconComponent,
    KNCheckboxComponent,
    FormsModule,
    KNRadioGroupComponent,
    KNRadioItemComponent,
    KNSelectComponent,
    MultiSelectComponent,
    KNSelectItemComponent,
    MultiSelectItemComponent,
    KNSpinnerComponent,
    KNButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _iconRegistry = inject(KNIconRegistry);

  iconName = signal('checkbox');

  radioValue = 1;

  checkboxValue = false;

  constructor() {
    console.log('ROOT');

    this._iconRegistry.addIcon('checkbox', 'assets/checkbox.svg');
    this._iconRegistry.addIcon(
      'checkbox-checked',
      'assets/checkbox-checked.svg'
    );

    this._iconRegistry.addIcon('radio', 'assets/radio.svg');
    this._iconRegistry.addIcon('radio-checked', 'assets/radio-checked.svg');
  }
}
