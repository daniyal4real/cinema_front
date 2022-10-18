import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Emitters} from "../../emitters/Emitters";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message = '';
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user',
      {withCredentials: true})
      .subscribe(
        (res: any ) => {
          this.message = 'Logged in';
          Emitters.authEmitter.emit(true)
        },
        err => {
          this.message = "Not logged in";
          Emitters.authEmitter.emit(false)
        }
      )
  }

}
