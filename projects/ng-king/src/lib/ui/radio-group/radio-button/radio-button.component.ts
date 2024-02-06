import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { RadioGroupState } from '../radio-group.state';
import { KNIconComponent } from '../../icon/icon.component';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [KNIconComponent],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  private radioGroupState = inject(RadioGroupState);

  @Input()
  value: any | undefined;

  isSelected = computed(() => this.radioGroupState.isSelected(this.value));

  labelPosition = input<'before' | 'after'>('after');

  @HostBinding('class.label-before-align')
  beforeAlign!: boolean;

  constructor() {
    effect(() => {
      this.beforeAlign = this.labelPosition() === 'before';
    });
  }

  @HostListener('click')
  onSelect() {
    this.radioGroupState.setValue(this.value);
  }
}
