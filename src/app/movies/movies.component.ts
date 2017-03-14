import { Component, OnInit } from '@angular/core';
import { Movie } from "./movie";

@Component({
  selector: 'movcrav-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  selectedMovie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
