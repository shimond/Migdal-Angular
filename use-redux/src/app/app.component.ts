import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { minusAction, plusAction, selectCounter, setCountAction } from './store/demo-store';
import { selectIsLoading } from './store/todos-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'use-redux';
  counter$: Observable<number>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<any>) {

  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectIsLoading);
    this.counter$ = this.store.select(selectCounter);
  }

  plus(): void {
    this.store.dispatch(plusAction());
  }

  minus(): void {
    this.store.dispatch(minusAction());
  }

  setCount(count: number): void {
    this.store.dispatch(setCountAction({ newCountValue: count }));
  }
}
