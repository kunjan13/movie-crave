import { Injectable } from '@angular/core';
import { Movie } from "app/movies/movie";

@Injectable()
export class WishListService {
  wishList : Movie[] = [];
  constructor() { }

  addToList(movie : Movie) {
      this.wishList.push(movie);
  }

  getList(){
    return this.wishList;
  }
  removeFromList(movie : Movie) {
    this.wishList.splice(movie.movieId, 1);
  }

}
