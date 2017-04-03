import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Movie } from "../movie";
import { MovieService } from "app/movies/movie.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { WishListService } from "app/wish-list/wish-list.service";

@Component({
  selector: 'movcrav-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  selectedMovie : Movie;
  subscription: Subscription;
  movieId : any;
  constructor(private movieService : MovieService, private wishListService : WishListService, private router: Router, private activatedRoute: ActivatedRoute) { }

  AddToWishList() {
    this.wishListService.addToList(this.selectedMovie);
  }
  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (param:any) => { 
        this.movieId = param['id']
        this.selectedMovie = this.movieService.getMovie(this.movieId);
      }
    )
  }

  ngOnDestroy(){
    //destroys the subscription to avoid memory link when the component destroys.
    this.subscription.unsubscribe();
  }

  

}
