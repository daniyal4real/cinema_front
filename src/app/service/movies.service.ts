import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Movie } from '../model/model';
import { ErrorService } from './error.service';
import * as http from "http";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }


  errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(()=>error.message)
  }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>
    ('http://localhost:8000/api/kinopark/films', {
      params: new HttpParams({
      })
    }).pipe(
        catchError(this.errorHandler.bind(this))
    )
  }

  getById(id: number): Observable<Movie[]> {
    return this.http.get<Movie[]>
    ('http://localhost:8000/api/kinopark/film/'+id, {
      params: new HttpParams({
      })
    }).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }
}
