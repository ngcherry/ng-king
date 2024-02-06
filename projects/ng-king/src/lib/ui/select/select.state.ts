import { Injectable, signal } from '@angular/core';

@Injectable()
export class SelectState {
  private _value = signal<any | undefined>(undefined);

  private _isOpen = signal(false);

  public compareWith: (v1: any, v2: any) => boolean = (v1, v2) => v1 === v2;

  public value = this._value.asReadonly();

  public isOpen = this._isOpen.asReadonly();

  public isSelected(value: any) {
    return this.compareWith(this.value(), value);
  }

  public setValue(value: any) {
    this._value.set(value);
    this.close()
  }

  public close() {
    this._isOpen.set(false);
  }

  public open() {
    this._isOpen.set(true);
  }
}
