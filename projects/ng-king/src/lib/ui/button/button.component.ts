import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';
import { KNSpinnerComponent } from '../spinner/spinner.component';
import { NgClass } from '@angular/common';

type BUTTON_SIZES = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

@Component({
  selector: '[cds-button]',
  standalone: true,
  imports: [KNSpinnerComponent, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'cds-button cds-button-primary',
  },
  encapsulation: ViewEncapsulation.None,
})
export class KNButtonComponent {
  loading = input(false);

  disabled = input<boolean>();

  @HostBinding('attr.disabled')
  get disabledAttr() {
    return this.disabled();
  }

  @HostBinding('class')
  get buttonClasses() {
    return `cds-button-${this.size()}`;
  }

  size = input<BUTTON_SIZES>('lg');

  color = input<string>();

  loadingType = input<string>();

  type = input<'submit' | 'reset' | 'button'>();
}
