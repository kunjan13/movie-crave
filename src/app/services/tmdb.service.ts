import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TmdbService {

  constructor(private _http: Http) { }

}
