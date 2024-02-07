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

@Component({
  selector: 'kn-spinner',
  standalone: true,
  imports: [
    KNRingSpinnerComponent,
    KNDualRingSpinnerComponent,
    KNFacebookSpinnerComponent,
    KNRippleSpinnerComponent,
    KNCircleSpinnerComponent,
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

    return 'ring';
  });

  private _options = inject(KN_SPINNER_OPTIONS, {
    optional: true,
  });
}
