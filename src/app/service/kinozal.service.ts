import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, Observable, throwError} from "rxjs";
import {Kinozal} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class KinozalService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  getById(id: number): Observable<Kinozal[]> {
    return this.http.get<Kinozal[]>
    ('http://localhost:8000/api/kinopark/kinozal/'+id, {
      params: new HttpParams({
      })
    }).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
