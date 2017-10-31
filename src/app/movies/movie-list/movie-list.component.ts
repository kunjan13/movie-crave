import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Moviecast } from '../../shared/moviecast';
import { MovieService } from "app/movies/movie.service";

@Component({
  selector: 'movcrav-movie-list',
  templateUrl: './movie-list.component.html',
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = this.movieService.getMovies();
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    //this.movies = this.movieService.getMovies();
  }

}
