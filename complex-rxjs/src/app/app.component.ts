import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { debounce, distinctUntilChanged, flatMap, groupBy, map, mergeAll, throttle } from 'rxjs/operators';
import { CurrencyService } from '../app/services/currency.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'complex-rxjs';


  constructor(private currencyService: CurrencyService) {

  }

  ngOnInit() {
    this.currencyService.currencyChanged
      .pipe(
        flatMap(x => x),
        groupBy(x => x.code),
        map(group => group.pipe(distinctUntilChanged())),
        mergeAll()
      )
      .subscribe(x => {
        console.log(x);
      });
  }




}
