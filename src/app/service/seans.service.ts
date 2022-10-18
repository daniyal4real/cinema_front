import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, Observable, throwError} from "rxjs";
import {Seans} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class SeansService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  getById(id: number): Observable<Seans[]> {
    return this.http.get<Seans[]>
    ('http://localhost:8000/api/kinopark/seans/'+id, {
      params: new HttpParams({})
    }).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }
  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(()=> error.message)
  }
}
