import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent  {
@Input() movie: Movie   
}
