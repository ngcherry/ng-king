import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  KNIconComponent,
  KNIconRegistry,
} from '../../../ng-king/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KNIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _iconRegistry = inject(KNIconRegistry);

  iconName = signal('checkbox');

  constructor() {
    this._iconRegistry.addIcon('checkbox', 'assets/checkbox.svg');
    this._iconRegistry.addIcon(
      'checkbox-checked',
      'assets/checkbox-checked.svg'
    );

    setTimeout(() => {
      this.iconName.set('checkbox-checked');
    }, 1000);
  }
}
