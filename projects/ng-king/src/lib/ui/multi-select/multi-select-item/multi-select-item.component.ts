import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  computed,
  inject,
} from '@angular/core';
import { SelectState } from '../../select/select.state';
import { MultiSelectState } from '../multi-select.state';

@Component({
  selector: 'app-multi-select-item',
  standalone: true,
  imports: [],
  templateUrl: './multi-select-item.component.html',
  styleUrl: './multi-select-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectItemComponent {
  private selectState = inject(MultiSelectState);

  @Input()
  value: any | undefined;

  isSelected = computed(() => this.selectState.isSelected(this.value));

  @HostListener('click')
  onSelect() {
    this.selectState.setValue(this.value);
  }
}
