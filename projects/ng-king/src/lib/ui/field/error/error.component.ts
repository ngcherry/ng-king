import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { KNErrorMappingService } from '../error-mapping.service';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'kn-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KNErrorComponent {
  errorMappingService = inject(KNErrorMappingService);

  errorKey = input<string>();

  errorValue = computed(() => {
    const errorKey = this.errorKey();
    if (errorKey === undefined) {
      return;
    }
    return this.errorMappingService.getErrorValue(errorKey);
  });
}
