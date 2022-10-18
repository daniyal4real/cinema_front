import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './component/list/list.component';
import { LoginComponent } from './component/login/login.component';
import { MovieComponent } from './component/movie/movie.component';
import { RegistrationComponent } from './component/registration/registration.component';
import {MovieDetailComponent} from "./component/movie-detail/movie-detail.component";
import {KinozalComponent} from "./component/kinozal/kinozal.component";
import {HomeComponent} from "./component/home/home.component";
import {SeansComponent} from "./component/seans/seans.component";
import {TicketComponent} from "./component/ticket/ticket.component";

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'movies', component: ListComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'kinozal/:id', component: KinozalComponent},
  {path: 'profile', component: HomeComponent},
  {path: 'seans/:id', component: SeansComponent},
  {path: 'ticket', component: TicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
