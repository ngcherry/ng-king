import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  computed,
  inject,
} from '@angular/core';
import { SelectState } from '../select.state';

@Component({
  selector: 'app-select-item',
  standalone: true,
  imports: [],
  templateUrl: './select-item.component.html',
  styleUrl: './select-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectItemComponent {

  private selectState=inject(SelectState);

  @Input()
  value:any | undefined;

  isSelected = computed(()=> this.selectState.isSelected(this.value) )

  @HostListener("click")
  onSelect(){
    this.selectState.setValue(this.value)
  }
}
