import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-play-with-pipes',
  templateUrl: './play-with-pipes.component.html',
  styleUrls: ['./play-with-pipes.component.scss']
})
export class PlayWithPipesComponent implements OnInit {
  searchWord = '';
  movies: Movie[] = [];
  suffixCount = 0;
  constructor(private moviesService: MoviesService) { }

  async ngOnInit() {
    this.movies = await this.moviesService.getAllMovies().toPromise();
    setInterval(() => {
      this.suffixCount++;
    }, 1000);
  }

  changeMovieName() {
    this.movies[0].title = 'Shimon';
  }
}
