import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../../shared/http/http.service';
import { pathUrl } from '../../../shared/http/path';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
  userId: any;
  userIfo: any;
  playList: any;
  constructor(
    private routing: ActivatedRoute,
    private http: HttpService,
  ) {
    this.routing.params.subscribe(par => {
      this.userId = par.id;
      this.getUserDetail(this.userId);
      this.getUserPlaylist(this.userId);
    })
  }

  ngOnInit(): void {
  }

  getUserDetail(uid): void {
    this.http.get(pathUrl['userDetail'], { uid }).subscribe(
      res=>{
        if(res.code == 200) {
          this.userIfo = res;
        }
      }
    )
  }
  
  getUserPlaylist(uid): void {
    this.http.get(pathUrl['userPlaylist'], { uid }).subscribe(
      res => {
        if(res.code == 200) {
          this.playList = res;
        }
      }
    )
  }
  

}
