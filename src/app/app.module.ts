import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent } from './movies/movie-list/movie-item.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishListAddComponent } from './wish-list/wish-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { routing } from "app/app.routes";
import { WishListService } from "app/wish-list/wish-list.service";
import { PagenotfoundComponent } from './error-pages/pagenotfound.component';
import { SignUpComponent } from './account/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent,
    WishListComponent,
    WishListAddComponent,
    DropdownDirective,
    PagenotfoundComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [WishListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
