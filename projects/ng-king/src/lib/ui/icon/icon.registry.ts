import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KNIconRegistry {
  private _icons = new Map<string, string>();

  addIcon(name: string, path: string) {
    if (this._icons.has(name)) {
      throw new Error(
        `icon with name ${name} already exists, newly added path is ${path}`
      );
    }

    this._icons.set(name, path);
  }

  findPath(name: string) {
    return this._icons.get(name);
  }
  
}
