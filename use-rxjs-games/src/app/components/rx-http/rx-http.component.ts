import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from '../../models/show.model';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
@Component({
  selector: 'app-rx-http',
  templateUrl: './rx-http.component.html',
  styleUrls: ['./rx-http.component.scss']
})
export class RxHttpComponent implements OnInit {

  shows$: Observable<Show[]>;
  bestShows$: Observable<Show[]>;
  uglyShows$: Observable<Show[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.shows$ = this.httpClient.get<Show[]>('http://api.tvmaze.com/shows').pipe(shareReplay(), tap(x => console.log('Requested')));
    this.shows$.subscribe();
    this.shows$.subscribe();
    this.shows$.subscribe();
    this.shows$.subscribe();
    this.shows$.subscribe();
    this.bestShows$ = this.shows$.pipe(map(shows => shows.filter(x => x.rating.average >= 9)));
    this.uglyShows$ = this.shows$.pipe(map(shows => shows.filter(x => x.rating.average < 9)));
  }

}
