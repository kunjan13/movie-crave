import { NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from "app/movies/movies.component";
import { WishListComponent } from "app/wish-list/wish-list.component";
import { MOVIES_ROUTES } from "app/movies/movies.routes";
import { PagenotfoundComponent } from "app/error-pages/pagenotfound.component";
import { SignUpComponent } from "app/account/sign-up.component";
import { HomeComponent } from "app/home/home.component";
import { ProfileComponent } from "app/account/profile.component";


const APP_ROUTES : Routes = [
        { path: '', redirectTo : '/home', pathMatch : 'full'},
        { path: 'home', component: HomeComponent},
        { path: 'movies', component : MoviesComponent, children : MOVIES_ROUTES},
        { path: 'wish', component : WishListComponent},
        { path: 'signup', component : SignUpComponent},
        { path: 'profile', component : ProfileComponent},
        { path: '**', component : PagenotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {}