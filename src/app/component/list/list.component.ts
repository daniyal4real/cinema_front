import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/model';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {

  term = ''
  movies$!: Observable<Movie[]>

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.movies$ = this.moviesService.getAll()
    console.log(this.movies$)
  }

}
