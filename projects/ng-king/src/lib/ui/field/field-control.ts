import { Directive, Signal } from '@angular/core';

@Directive()
export abstract class KNFieldControl {

  abstract floatLabel: Signal<boolean>;
}
