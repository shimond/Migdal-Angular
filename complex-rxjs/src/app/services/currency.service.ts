import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Currency } from '../models/currency.model';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currencies = new BehaviorSubject<Currency[]>([]);

  get currencyChanged() {
    return this.currencies.pipe(tap(x => console.table(x)));
  }
  constructor() {
    this.createMockCurrencies();
    setInterval(() => this.changeRate(), 5000);
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  changeRate() {
    const idxToChanged = this.randomIntFromInterval(0, 2);
    const current = this.currencies.value;
    const currencyToChanged = current[idxToChanged];
    current[idxToChanged] = { ...currencyToChanged, rate: currencyToChanged.rate + 2 };
    currencyToChanged.rate = currencyToChanged.rate + 2;
    this.currencies.next(current);
  }

  createMockCurrencies() {
    const s: Currency[] = [
      {
        code: 'USD',
        rate: 3.2
      },
      {
        code: 'EUR',
        rate: 3.9
      },
      {
        code: 'AUD',
        rate: 2.2
      }
    ];
    this.currencies.next(s);
  }





}
