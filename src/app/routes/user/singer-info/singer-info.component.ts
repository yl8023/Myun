import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singer-info',
  templateUrl: './singer-info.component.html',
  styleUrls: ['./singer-info.component.less']
})
export class SingerInfoComponent implements OnInit {
  singerId: any;
  constructor(
    private routing: ActivatedRoute
  ) {
    this.routing.params.subscribe(par => {
      this.singerId = par.id;
    })
  }

  ngOnInit(): void {
  }

}
