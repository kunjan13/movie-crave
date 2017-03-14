import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from '../movie';
@Component({
  selector: 'movcrav-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  @Output() movieSelected = new EventEmitter<Movie>();
  movie = new Movie('Dummy', 'Dummy Description', 'https://pbs.twimg.com/profile_images/747456419683774464/wnl4EjM-.jpg');
  constructor() { }

  ngOnInit() {
  }

  OnSelected(movie: Movie){
    this.movieSelected.emit(movie);
  }

}
