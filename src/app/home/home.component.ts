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
  constructor(private tmdbService : TmdbService) {


   }

  ngOnInit() {
    this.tmdbService.getMoviesInTheatres()
      .subscribe(resMoviesInTheatres => dataSuccess(resMoviesInTheatres.results));
      

      function dataSuccess(data)
      {
        console.log('called');
        this.moviesInTheatres = data;
        console.log(this.moviesInTheatres);
        //myExtObject.func1();
      }
  }
  
  
}

