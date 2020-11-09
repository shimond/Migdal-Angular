import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterChangedSubject = new BehaviorSubject<number>(0);

  get counterChanged$(): Observable<number> {
    return this.counterChangedSubject.asObservable();
  }

  constructor() {
  }

  minus(): void {
    let count = this.counterChangedSubject.value;
    count--;
    this.counterChangedSubject.next(count);
  }

  plus(): void {
    let count = this.counterChangedSubject.value;
    count++;
    this.counterChangedSubject.next(count);
  }
}
