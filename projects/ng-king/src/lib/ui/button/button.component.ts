import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  computed,
  input,
  signal,
} from '@angular/core';
import { KNSpinnerComponent } from '../spinner/spinner.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'kn-button',
  standalone: true,
  imports: [KNSpinnerComponent, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KNButtonComponent {
  loading = input(false);

  disabled = input<boolean>();

  color = input<string>();

  loadingType = input<string>();

  type = input<'submit' | 'reset' | 'button'>();
}
