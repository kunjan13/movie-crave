import { Component, OnInit } from '@angular/core';
import { WishListService } from "app/wish-list/wish-list.service";
import { Movie } from "app/movies/movie";

@Component({
  selector: 'movcrav-wish-list',
  templateUrl: './wish-list.component.html'
})
export class WishListComponent implements OnInit {
  wishList = [];
  movie : Movie;
  constructor(private wishListService: WishListService) { }

  ngOnInit() {    
    this.wishList = this.wishListService.getList();
    console.log(this.wishList);
  }

  RemoveFromWishList(movie : Movie){
    this.wishListService.removeFromList(movie);
    this.wishList = this.wishListService.getList();
  }

}
