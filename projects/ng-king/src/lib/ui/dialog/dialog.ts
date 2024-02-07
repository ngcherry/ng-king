import {
  ComponentType,
  GlobalPositionStrategy,
  Overlay,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, StaticProvider } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { EMPTY, merge } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { KN_DIALOG_DATA, KNDialogRef } from './dialog-ref';

@Injectable({
  providedIn: 'root',
})
export class KNDialog {
  constructor(
    private overlay: Overlay,
    private injector: Injector,
    private router: Router
  ) {}

  private navigationStart$ = this.router.events.pipe(
    filter((e) => e instanceof NavigationStart)
  );

  open<T>(
    compType: ComponentType<T>,
    config?: {
      data?: unknown;
      keepOnNavigation?: boolean;
      keepOnBackdropClick?: boolean;
      position?: (strategy: GlobalPositionStrategy) => GlobalPositionStrategy;
    },
    options?: {
      injector?: Injector;
    }
  ) {
    let positionStrategy = this.overlay.position().global();

    if (!config?.position) {
      positionStrategy = positionStrategy
        .centerHorizontally()
        .centerVertically();
    } else {
      positionStrategy = config.position(positionStrategy);
    }

    const overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      disposeOnNavigation: true,
    });

    const dialogRef = new KNDialogRef(overlayRef, {
      keepOnBackdropClick: config?.keepOnBackdropClick,
    });

    merge(
      overlayRef
        .backdropClick()
        .pipe(filter(() => !dialogRef?.keepOnBackdropClick)),
      overlayRef
        .keydownEvents()
        .pipe(filter((e) => e.code === 'Escape'))
        .pipe(filter(() => !dialogRef?.keepOnBackdropClick)),
      config?.keepOnNavigation
        ? EMPTY
        : this.navigationStart$.pipe(takeUntil(dialogRef.afterClosed()))
    )
      .pipe(take(1))
      .subscribe(() => {
        dialogRef.close();
      });

    const providers: StaticProvider[] = [
      {
        provide: KNDialogRef,
        useValue: dialogRef,
      },
    ];

    if (config?.data) {
      providers.push({
        provide: KN_DIALOG_DATA,
        useValue: config?.data,
      });
    }

    const injector = Injector.create({
      providers: providers,
      parent: options?.injector ?? this.injector,
    });

    const compPortal = new ComponentPortal(compType, null, injector);

    overlayRef.attach(compPortal);

    return dialogRef as Pick<
      KNDialogRef,
      'afterClosed' | 'close' | 'keepOnBackdropClick'
    >;
  }
}
