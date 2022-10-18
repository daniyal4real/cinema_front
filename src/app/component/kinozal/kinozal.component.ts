import {Component, Input, OnInit} from '@angular/core';
import {Kinozal} from "../../model/model";
import {ActivatedRoute} from "@angular/router";
import {KinozalService} from "../../service/kinozal.service";

@Component({
  selector: 'app-kinozal',
  templateUrl: './kinozal.component.html',
  styleUrls: ['./kinozal.component.scss']
})



export class KinozalComponent implements OnInit {
  @Input() kinozal: Kinozal
  id: any
  data: any
  available: true
  constructor(
    private kinozalService: KinozalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getKinozalById(this.id)
  }

  getKinozalById(id: number): void {
    this.kinozalService.getById(this.id)
      .subscribe(
        res => {
          this.data = res
          this.kinozal = this.data
          console.log(this.kinozal)
    })
  }
}
