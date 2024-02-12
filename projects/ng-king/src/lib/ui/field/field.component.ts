import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Signal,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';
import { KNFieldControl } from './field-control';
import { NgControl } from '@angular/forms';
import { KNErrorComponent } from './error/error.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Component({
  selector: 'kn-field',
  standalone: true,
  imports: [KNErrorComponent],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { class: 'kn-field' },
})
export class KNFieldComponent implements AfterContentInit {
  @ContentChild(KNFieldControl, { static: true })
  fieldControl!: KNFieldControl;

  @ContentChild(NgControl, { static: true })
  formControl!: NgControl;

  showErrors = input(true);

  errorsCount = input(1);

  valueChangesSign!: Signal<void>;

  errors = signal<Array<string>>([]);

  ngAfterContentInit(): void {
    this.formControl.valueChanges?.subscribe(() => {
      const err = this.formControl.errors;
      if (err) {
        this.errors.set(Object.keys(err));
      } else {
        this.errors.set([]);
      }
    });
  }
}
