import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import { MovieComponent } from './component/movie/movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './component/list/list.component';
import { FilterMoviesPipe } from './pipe/filter-movies.pipe';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { KinozalComponent } from './component/kinozal/kinozal.component';
import { GlobalErrorComponent } from './component/global-error/global-error.component';
import { SeansComponent } from './component/seans/seans.component';
import { TicketComponent } from './component/ticket/ticket.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NavComponent,
    MovieComponent,
    ListComponent,
    FilterMoviesPipe,
    MovieDetailComponent,
    KinozalComponent,
    GlobalErrorComponent,
    SeansComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
