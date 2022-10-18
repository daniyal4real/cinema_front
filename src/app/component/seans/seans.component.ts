import {Component, Input, OnInit} from '@angular/core';
import {Seans, SeansSeat} from "../../model/model";
import {SeansService} from "../../service/seans.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-seans',
  templateUrl: './seans.component.html',
  styleUrls: ['./seans.component.scss']
})
export class SeansComponent implements OnInit {

  @Input() seans: Seans
  id: any
  data: any
  available: true
  constructor(
    private seansService: SeansService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getSeansById(this.id)
  }

  getSeansById(id: number): void {
    this.seansService.getById(this.id)
      .subscribe(res => {
        this.data = res
        this.seans = this.data
        console.log(this.seans)
      })
  }

}
