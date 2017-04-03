import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from "app/movies/movies.component";
import { WishListComponent } from "app/wish-list/wish-list.component";
import { MOVIES_ROUTES } from "app/movies/movies.routes";
import { PagenotfoundComponent } from "app/error-pages/pagenotfound.component";
import { SignUpComponent } from "app/account/sign-up.component";


const APP_ROUTES : Routes = [
        { path: '', redirectTo : '/movies', pathMatch : 'full'},
        { path: 'movies', component : MoviesComponent, children : MOVIES_ROUTES},
        { path: 'wish', component : WishListComponent},
        { path: 'signup', component : SignUpComponent},
        { path: '**', component : PagenotfoundComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);