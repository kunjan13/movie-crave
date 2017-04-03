import { Injectable } from '@angular/core';
import { Movie } from "app/movies/movie";
import { Moviecast } from "app/shared/moviecast";

@Injectable()
export class MovieService {
  movies : Movie[] = [
      new Movie('0', 'Logan', "In the near future, a weary Logan cares for an ailing Professor X somewhere on the Mexican border. However, Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.", 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MjkzMjczMV5BMl5BanBnXkFtZTgwNDk4NjYyMTI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg', [new Moviecast("Hugh Jackman", "Logan"), new Moviecast("Dafne Keen", "Laura")]),
      new Movie('1','Life', "A team of scientists aboard the International Space Station discover a rapidly evolving life form, that caused extinction on Mars, and now threatens the crew and all life on Earth.", 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzAwMmQxNTctYjVmYi00MDdlLWEzMWUtOTE5NTRiNDhhNjI2L2ltYWdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg', [new Moviecast("Ryan Reynolds", "Rory Adams"), new Moviecast("Jake Gyllenhaal", "David Jordan")])
    ];
  getMovies(){
    return this.movies;
  }

  getMovie(id: any) : Movie {
    return this.movies[id];
  }
  constructor() { }

}
