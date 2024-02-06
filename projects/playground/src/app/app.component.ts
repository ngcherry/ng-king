import { Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  KNIconComponent,
  KNIconRegistry,
} from '../../../ng-king/src/public-api';
import { KNCheckboxComponent } from '../../../ng-king/src/lib/ui/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { RadioGroupComponent } from '../../../ng-king/src/lib/ui/radio-group/radio-group.component';
import { RadioButtonComponent } from '../../../ng-king/src/lib/ui/radio-group/radio-button/radio-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    KNIconComponent,
    KNCheckboxComponent,
    FormsModule,
    RadioGroupComponent,
    RadioButtonComponent,
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
