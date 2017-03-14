import { Component, OnInit, Input } from '@angular/core';
import { Movie } from "../movie";
@Component({
  selector: 'movcrav-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() selectedMovie : Movie;
  constructor() { }

  ngOnInit() {
  }

}
