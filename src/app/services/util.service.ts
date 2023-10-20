import { Injectable } from '@angular/core';
import { Json } from './data.service';

type Primitive = boolean | number | string;

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  isJson(value: unknown): value is Json {
    return typeof value === 'object' && !this.isArray(value) && value !== null;
  }

  isArray(value: unknown): value is Array<Json> {
    return Array.isArray(value);
  }

  isPrimitive(value: unknown): value is Primitive {
    return !this.isJson(value) && !this.isArray(value);
  }

  keyValueOriginalOrder(a: unknown, b: unknown) {
    return 0;
  }
}
