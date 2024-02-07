import { OverlayRef } from '@angular/cdk/overlay';
import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

export const KN_DIALOG_DATA = new InjectionToken('DIALOG_DATA');

export class KNDialogRef {
  private _afterClosed = new Subject();

  afterClosed() {
    return this._afterClosed.pipe(take(1));
  }

  set keepOnBackdropClick(value: boolean | undefined) {
    this.config.keepOnBackdropClick = value;
  }

  get keepOnBackdropClick() {
    return this.config.keepOnBackdropClick;
  }

  constructor(
    private overlayRef: OverlayRef,
    public config: {
      keepOnBackdropClick: boolean | undefined;
    }
  ) {}

  close(data?: unknown) {
    setTimeout(() => {
      this.overlayRef.dispose();
      this._afterClosed.next(data);
      this._afterClosed.complete();
    });
  }
}
