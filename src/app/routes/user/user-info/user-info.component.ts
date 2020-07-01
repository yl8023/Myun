import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
  userId: any;
  constructor(
    private routing: ActivatedRoute
  ) {
    this.routing.params.subscribe(par => {
      this.userId = par.id;
    })
  }

  ngOnInit(): void {
  }

}
