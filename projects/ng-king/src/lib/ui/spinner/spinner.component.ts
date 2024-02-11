import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { KNRingSpinnerComponent } from './spinners/ring-spinner/ring-spinner.component';
import { KN_SPINNER_OPTIONS } from './spinner-options';
import { KNDualRingSpinnerComponent } from './spinners/dual-ring-spinner/dual-ring-spinner.component';
import { KNFacebookSpinnerComponent } from './spinners/facebook-spinner/facebook-spinner.component';
import { KNRippleSpinnerComponent } from './spinners/ripple-spinner/ripple-spinner.component';
import { KNCircleSpinnerComponent } from './spinners/circle-spinner/circle-spinner.component';
import { KNRollerSpinnerComponent } from './spinners/roller-spinner/roller-spinner.component';
import { KNHeartSpinnerComponent } from './spinners/heart-spinner/heart-spinner.component';
import { KNDefaultSpinnerComponent } from './spinners/default-spinner/default-spinner.component';
import { KNEllipsisSpinnerComponent } from './spinners/ellipsis-spinner/ellipsis-spinner.component';
import { KNSpinSpinnerComponent } from './spinners/spin-spinner/spin-spinner.component';
import { KNHourglassSpinnerComponent } from './spinners/hourglass-spinner/hourglass-spinner.component';
import { KNGridSpinnerComponent } from './spinners/grid-spinner/grid-spinner.component';

@Component({
  selector: 'kn-spinner',
  standalone: true,
  imports: [
    KNRingSpinnerComponent,
    KNDualRingSpinnerComponent,
    KNFacebookSpinnerComponent,
    KNRippleSpinnerComponent,
    KNCircleSpinnerComponent,
    KNRollerSpinnerComponent,
    KNHeartSpinnerComponent,
    KNDefaultSpinnerComponent,
    KNEllipsisSpinnerComponent,
    KNSpinSpinnerComponent,
    KNHourglassSpinnerComponent,
    KNGridSpinnerComponent,
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KNSpinnerComponent {
  type = input<string>();

  spinnerType = computed(() => {
    if (this.type()) {
      return this.type();
    }

    if (this._options?.defaultType) {
      return this._options.defaultType;
    }

    return 'default';
  });

  private _options = inject(KN_SPINNER_OPTIONS, {
    optional: true,
  });
}
