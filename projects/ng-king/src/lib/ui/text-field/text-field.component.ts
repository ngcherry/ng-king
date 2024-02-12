import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  forwardRef,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KNFieldControl } from '../field/field-control';

@Component({
  selector: 'kn-text-field',
  standalone: true,
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
  host: {
    class: 'kn-text-field',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => KNTextFieldComponent),
    },
    {
      provide: KNFieldControl,
      useExisting: KNTextFieldComponent,
    },
  ],
})
export class KNTextFieldComponent
  extends KNFieldControl
  implements ControlValueAccessor
{
  focused = signal<boolean>(false);

  override floatLabel = computed(
    () =>
      (this.value() !== undefined &&
        this.value() !== null &&
        this.value() !== '') ||
      this.focused()
  );

  private _onChange!: (_: any) => void;
  private _onTouched!: () => void;
  public disabled = signal(false);
  value = signal<string | undefined | null>(undefined);

  writeValue(obj: string | undefined | null): void {
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

  inputValueChanged($event: any) {
    this.value.set($event.target.value);
    this._onChange(this.value());
  }

  focus() {
    this.focused.set(true);
    this._onTouched();
  }
  blur() {
    this.focused.set(false);
  }
}
