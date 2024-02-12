import { Injectable, signal } from '@angular/core';

type MappingType = {
  [K in string]: string | ((params?: any) => string);
};

@Injectable({ providedIn: 'root' })
export class KNErrorMappingService {
  mappedErrors = signal<MappingType | undefined>(undefined);

  getErrorValue(key: string, params?: any) {
    const mappedError = this.mappedErrors();

    if (mappedError) {
      const value = mappedError[key];

      if (typeof value === 'function') {
        return value(params);
      } else if (typeof value === 'string') {
        return value;
      } else {
        return undefined;
      }
    }

    return undefined;
  }

  configureErrors(errors: MappingType) {
    this.mappedErrors.set(errors);
  }
}
