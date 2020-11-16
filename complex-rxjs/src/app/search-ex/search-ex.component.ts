import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, concat, interval, merge, Observable, of } from 'rxjs';
import { bufferTime, concatAll, debounceTime, delay, filter, map, mergeAll, startWith, switchAll, switchMap, tap, throttle, throttleTime } from 'rxjs/operators';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-search-ex',
  templateUrl: './search-ex.component.html',
  styleUrls: ['./search-ex.component.scss']
})
export class SearchExComponent implements OnInit {

  currentLang$: Observable<string>;
  searchControl = new FormControl('');
  result = [];
  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    // this.translateService.currentLang$.subscribe(x => {
    //   this.currentLang = x;
    // });
    this.currentLang$ = this.translateService.currentLang$.pipe(startWith('FR'));

    const searchControlValueChangeObservable = this.searchControl.valueChanges
      .pipe(startWith('shimon'), filter(x => x.length > 0));
    // Same as:
    // map(str => this.searchValues(str)),
    // switchAll())


    combineLatest([this.currentLang$, searchControlValueChangeObservable])
      .pipe(map(([selectedLanguage, currentSearchWord]) => this.searchValues(currentSearchWord, selectedLanguage)),
        switchAll()
      )
      .subscribe(result => {
        this.result = result;
      });

  }

  searchValues(str: string, language: string): Observable<string[]> {
    console.log('searchValues invoked (' + str + ')');
    const arr = [];
    for (let index = 0; index < Math.random() * 10; index++) {
      arr.push(language + ' : ' + str + index);
    }
    return of(arr).pipe(delay(3000));
  }

  changeLanguage(lang: string) {
    this.translateService.changeLanguage(lang);
  }
}
