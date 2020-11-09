import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie.model';

@Pipe({
  name: 'filterArray',
  pure: false
})
export class FilterArrayPipe implements PipeTransform {

  transform(value: Movie[], searchWord: string): unknown {
    console.log('Invoked');
    // if (value.length > 0) {
    //   const result = [value[0], value[2]];
    //   console.log(result);
    //   return result;
    // }
    // else {
    //   return [];
    // }
    searchWord = searchWord.toLowerCase();
    return value.filter(x => x.title.toLowerCase().includes(searchWord));
  }

}
