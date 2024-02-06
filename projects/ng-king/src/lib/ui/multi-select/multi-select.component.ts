import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { MultiSelectState } from './multi-select.state';
import {
  ConnectedPosition,
  Overlay,
  OverlayModule,
} from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MultiSelectState],
})
export class MultiSelectComponent {
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

  selectState = inject(MultiSelectState);

  @Input()
  set compareWith(compareWith: any) {
    this.selectState.compareWith = compareWith;
  }
}
