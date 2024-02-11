import { InjectionToken } from '@angular/core';

interface KNSpinnerOptions {
  defaultType: string;
}

export const KN_SPINNER_OPTIONS = new InjectionToken<KNSpinnerOptions>(
  'KN_SPINNER_OPTIONS'
);

export function provideKNSpinner(options: KNSpinnerOptions) {
  return {
    provide: KN_SPINNER_OPTIONS,
    useValue: options,
  };
}
