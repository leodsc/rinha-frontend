import { Pipe, PipeTransform } from '@angular/core';
import { Json } from '../services/data.service';

@Pipe({
  name: 'keys',
})
export class KeysPipe implements PipeTransform {
  transform(value: Json, ...args: unknown[]): Array<string> {
    return Object.keys(value);
  }
}
