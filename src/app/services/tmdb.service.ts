import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class TmdbService {
  private apiUrl: string = "https://api.themoviedb.org/3/";
  private apiKey: string = "";
  constructor(private _http: Http) { }
  getMoviesInTheatres(){
    return this._http.get(this.apiUrl + 'movie/now_playing?api_key=' + this.apiKey)
    .map((response: Response) =>  response.json());
  }
}
