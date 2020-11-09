import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/movies');
  }

  constructor(private http: HttpClient) { }
}
