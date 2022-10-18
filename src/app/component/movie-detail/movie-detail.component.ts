import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../model/model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../service/movies.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {


  @Input() movie: Movie
  id: any
  data: any

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getMovieDetailById(this.id)
  }

  getMovieDetailById(id: number): void {
    this.movieService.getById(this.id)
      .subscribe(res => {
        this.data = res
        this.movie = this.data
      })
  }

}
