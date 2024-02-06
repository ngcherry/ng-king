import { Injectable, signal } from '@angular/core';

@Injectable()
export class MultiSelectState {
  private _value = signal<any[] | undefined>(undefined);

  private _isOpen = signal(false);

  public compareWith: (v1: any, v2: any) => boolean = (v1, v2) => v1 === v2;

  public value = this._value.asReadonly();

  public isOpen = this._isOpen.asReadonly();

  public isSelected(value: any) {
    return this.value()?.some((v) => this.compareWith(v, value));
  }

  public setValue(value: any) {
    const values = this._value();

    if (!values) {
      this._value.set([value]);
    } else {
      const valueInfex = values.findIndex((v) => this.compareWith(v, value));

      if (valueInfex === -1) {
        this._value.update((val) => {
          return [...(val as any[]), value];
        });
      } else {
        this._value.update((val) => {
          return (val as any[]).filter((v) => !this.compareWith(v, value));
        });
      }
    }
  }

  public close() {
    this._isOpen.set(false);
  }

  public open() {
    this._isOpen.set(true);
  }
}
