import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Renderer2,
  effect,
  inject,
  input,
} from '@angular/core';
import { KNIconRegistry } from './icon.registry';
import { DOCUMENT } from '@angular/common';

type ICON_SIZES = 16 | 20 | 24 | 32;

@Component({
  selector: 'cn-icon',
  standalone: true,
  host: {
    'aria-hidden': 'true',
    role: 'img',
  },
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
  imports: [],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CNIconComponent {
  private _http = inject(HttpClient);
  private _iconRegistry = inject(KNIconRegistry);
  private _renderer2 = inject(Renderer2);
  private _document = inject(DOCUMENT);

  /**
   * This will scale up to the parent
   */
  @HostBinding('class.scale')
  scale = input(false);

  @HostBinding('style.width.px')
  get iconWidth() {
    return this.size();
  }

  @HostBinding('style.height.px')
  get iconHeight() {
    return this.size();
  }

  scaleIcon = input<boolean>(true);

  ariaLabel = input<string>();

  name = input.required<string>();

  size = input<ICON_SIZES>(16);

  private _elementRef = inject<ElementRef<HTMLElement>>(
    ElementRef<HTMLElement>
  );

  get element() {
    return this._elementRef.nativeElement;
  }

  constructor() {
    effect(() => {
      const path = `/assets/carbon-icons/${this.name()}.svg`;

      if (path) {
        this._http
          .get(path, {
            responseType: 'text',
          })
          .subscribe({
            next: (icon) => {
              this.element.innerHTML = icon;
              this._renderer2.setAttribute(
                this.element,
                'aria-label',
                this.ariaLabel() || `icon-${this.name}`
              );

              const svgEl = this.element.firstElementChild as SVGElement;

              this._renderer2.setStyle(svgEl, 'width', 'inherit');
              this._renderer2.setStyle(svgEl, 'height', 'inherit');
              this._renderer2.setStyle(svgEl, 'font-size', 'inherit');
            },
            error: (err) =>
              `error with fetching the icon ${this.name()}, error message: ${
                err.message
              }`,
          });
      }
    });
  }
}
