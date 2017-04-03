import { Routes } from "@angular/router";
import { MoviesComponent } from "app/movies/movies.component";
import { MovieDetailComponent } from "app/movies/movie-detail/movie-detail.component";
import { PagenotfoundComponent } from "app/error-pages/pagenotfound.component";

export const MOVIES_ROUTES : Routes = [
    {path : '', component : MovieDetailComponent},
    {path: ':id', component : MovieDetailComponent},
    { path: '**', component : PagenotfoundComponent}
];