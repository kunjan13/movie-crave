import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from '../movie';
import { Moviecast } from '../../shared/moviecast';
import { MovieService } from "app/movies/movie.service";

@Component({
  selector: 'movcrav-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = this.movieService.getMovies();
  @Output() movieSelected = new EventEmitter<Movie>();
  //movie = new Movie('Dummy', 'Dummy Description', 'https://pbs.twimg.com/profile_images/747456419683774464/wnl4EjM-.jpg', "");
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    //this.movies = this.movieService.getMovies();
  }

  OnSelected(movie: Movie){
    this.movieSelected.emit(movie);
  }

}
