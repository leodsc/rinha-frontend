import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonType',
})
export class JsonTypePipe implements PipeTransform {
  transform(
    value: string | number | boolean | null,
    ...args: unknown[]
  ): string | boolean | number | null {
    if (typeof value === 'string') {
      return `"${value}"`;
    }

    if (value === null) {
      return `${null}`;
    }

    return value;
  }
}
