import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList,
  effect,
  inject,
  signal,
} from '@angular/core';
import {
  ConnectedPosition,
  Overlay,
  OverlayModule,
} from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { SelectState } from './select.state';

@Component({
  selector: 'kn-select',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SelectState],
})
export class KNSelectComponent {

  overlay = inject(Overlay);

  scroll = this.overlay.scrollStrategies.close();

  @Input()
  label: string | undefined;

  sub: Subscription | undefined;

  positions: ConnectedPosition[] = [
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
    },
  ];


  selectState = inject(SelectState);

  @Input()
  set compareWith(compareWith:any){
    this.selectState.compareWith=compareWith;
  }


}
