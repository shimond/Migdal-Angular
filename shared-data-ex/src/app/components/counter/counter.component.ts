import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  count = 0;
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    const sub = this.counterService.counterChanged$.subscribe(newCountValue => {
      this.count = newCountValue;
      console.log('Changed');
    });
    this.subs.push(sub);
  }

  minus(): void {
    this.counterService.minus();
  }

  plus(): void {
    this.counterService.plus();
  }

  ngOnDestroy(): void {
    for (const subscriber of this.subs) {
      subscriber.unsubscribe();
    }
  }

}
