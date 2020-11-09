import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from './services/counter.service';
import { debounceTime, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shared-data-ex';
  count$: Observable<number>;
  displayMore = false;

  constructor(private counterService: CounterService) {

  }

  ngOnInit(): void {
    this.count$ = this.counterService.counterChanged$.pipe(filter(x => x % 2 === 0), map(x => x * 10), debounceTime(2000));
  }
}
