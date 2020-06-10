import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../shared/http/http.service';
import { pathUrl } from '../../shared/http/path';
import { AudioService } from '../../services/audio.service';

import { SongsModel } from '../../base/common';

@Component({
  selector: 'app-songs-detail',
  templateUrl: './songs-detail.component.html',
  styleUrls: ['./songs-detail.component.less']
})
export class SongsDetailComponent implements OnInit {

  constructor(
    private actRouter: ActivatedRoute,
    private http: HttpService,
    ) {
      this.actRouter.params.subscribe(par => {
        this.songsId = par.id;
      })
      
    }
  @ViewChild ('songList') songList: any;
  songsId: any;
  sonsDetail: SongsModel;
  ngOnInit(): void {
    this.getSongsDetail();
  }
  //获取歌单详情
  getSongsDetail(): void {
    this.http.get(pathUrl['playlistDetail'],{id: this.songsId}).subscribe(res => {
      if (res.code == 200) {
        this.sonsDetail = res.playlist;
      }
    });
  }

}
