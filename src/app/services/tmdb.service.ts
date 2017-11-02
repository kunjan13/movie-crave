import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class TmdbService {
  private apiUrl: string = "https://api.themoviedb.org/3/";
  private apiKey: string = "a74abb840a5111b5bc0586f7fc61de82";
  constructor(private _http: Http) { }
  getMoviesInTheatres(){
    return this._http.get(this.apiUrl + 'movie/now_playing?api_key=' + this.apiKey)
    .map((response: Response) =>  response.json());
  }

  getOnTvAiringToday(){
    return this._http.get(this.apiUrl + 'tv/airing_today?api_key=' + this.apiKey)
    .map((response: Response) =>  response.json());
  }

  getOnTvPopular(){
    return this._http.get(this.apiUrl + 'tv/popular?api_key=' + this.apiKey)
    .map((response: Response) =>  response.json());
  }

  getOnTvTopRated(){
    return this._http.get(this.apiUrl + 'tv/top_rated?api_key=' + this.apiKey)
    .map((response: Response) =>  response.json());
  }

  getOnTvLatest(){
    return this._http.get(this.apiUrl + 'tv/latest?api_key=' + this.apiKey)
    .map((response: Response) =>  response.json());
  }
}
