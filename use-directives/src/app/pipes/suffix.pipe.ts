import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suffix'
})
export class SuffixPipe implements PipeTransform {

  transform(value: unknown, c = '!', count = 1): unknown {
    return value  + c.repeat(count);
  }

}
