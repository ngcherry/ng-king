import {
  ChangeDetectionStrategy,
  Component,
  Input,
  forwardRef,
  inject,
} from '@angular/core';
import { RadioGroupState } from './radio-group.state';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    RadioGroupState,
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RadioGroupComponent),
    },
  ],
})
export class RadioGroupComponent implements ControlValueAccessor {
  radioGroupState = inject(RadioGroupState);

  writeValue(obj: any): void {
    this.radioGroupState.writeValue(obj);
  }
  registerOnChange(fn: (_: any) => void): void {
    this.radioGroupState.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.radioGroupState.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.radioGroupState.setDisabled(disabled);
  }

  @Input()
  set compareWith(compareWith: any) {
    this.radioGroupState.compareWith = compareWith;
  }
}
