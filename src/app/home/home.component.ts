import { Component, OnInit } from '@angular/core';
import { TmdbService } from  "app/services/tmdb.service";
import "../../assets/js/custom.js";

declare var myExtObject: any;
@Component({
  selector: 'movcrav-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TmdbService]
})
export class HomeComponent implements OnInit {
  moviesInTheatres = [];
  onTvLatest = [];
  onTvPopular = [];
  onTvTopRated = [];
  onTvAiringToday = [];
  constructor(private tmdbService : TmdbService) {


   }

  ngOnInit() {

    //In Theatres
    this.tmdbService.getMoviesInTheatres()
      .subscribe(resMoviesInTheatres => this.moviesInTheatres = resMoviesInTheatres.results);
    
      
    //On Tv
    //latest
    // this.tmdbService.getOnTvLatest()
    // .subscribe(resMoviesInTheatres => this.onTvLatest = resMoviesInTheatres.results);

    //Popular
    this.tmdbService.getOnTvPopular()
    .subscribe(resMoviesInTheatres => this.onTvPopular = resMoviesInTheatres.results);

    //Top rated
    this.tmdbService.getOnTvTopRated()
    .subscribe(resMoviesInTheatres => this.onTvTopRated = resMoviesInTheatres.results);

    //Airing Today
    this.tmdbService.getOnTvAiringToday()
    .subscribe(resMoviesInTheatres => this.onTvAiringToday = resMoviesInTheatres.results);
  }
  
  
}

