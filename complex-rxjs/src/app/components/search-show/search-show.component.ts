import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { ShowResultItem } from '../../models/show-search-item.model';

@Component({
  selector: 'app-search-show',
  templateUrl: './search-show.component.html',
  styleUrls: ['./search-show.component.scss']
})
export class SearchShowComponent implements OnInit {

  searchShowControl = new FormControl('');
  shows$: Observable<ShowResultItem[]>;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.shows$ = this.searchShowControl.valueChanges
      .pipe(filter(x => x.length > 2),
        switchMap(str => this.getShows(str)));
  }

  getShows(term: string): Observable<ShowResultItem[]> {
    return this.httpClient.get<ShowResultItem[]>('http://api.tvmaze.com/search/shows?q=' + decodeURIComponent(term));
  }


}
