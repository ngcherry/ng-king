import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  computed,
  effect,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { CNIconComponent } from '../icon/icon.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'kn-checkbox',
  standalone: true,
  imports: [CNIconComponent],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => KNCheckboxComponent),
    },
  ],
})
export class KNCheckboxComponent implements ControlValueAccessor {
  private _onChange!: (_: any) => void;
  private _onTouched!: () => void;
  public disabled = signal(false);
  value = signal<boolean | undefined | null>(false);

  @HostBinding('class.label-before-align')
  beforeAlign!: boolean;

  @HostBinding('class.disabled')
  isDisabled = false;

  constructor() {
    effect(() => {
      this.beforeAlign = this.labelPosition() === 'before';
    });

    effect(() => {
      this.isDisabled = this.disabled();
    });
  }

  labelPosition = input<'before' | 'after'>('after');

  align = input<'center' | 'start'>('center');

  @HostListener('click')
  onClick() {
    if (this.disabled()) {
      return;
    }
    this.value.set(!this.value());
    this._onChange(this.value());
    this._onTouched();
  }

  writeValue(obj: boolean | undefined | null): void {
    this.value.set(obj);
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
