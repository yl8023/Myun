import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../shared/http/http.service';
import { pathUrl } from '../../../../shared/http/path';

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.less']
})
export class NewSongComponent implements OnInit {
  newSongStu: boolean = true;
  tabsetIndex: number = 0;
  loading: boolean;
  newSongs: any;
  limit: number = 50;
  pageIndex: number= 1;
  albums: any;
  areas = [
    {c:0,t:'全部'},
    {c:7,t:'华语'},
    {c:96,t:'欧美'},
    {c:8,t:'日本'},
    {c:16,t:'韩国'},
  ];
  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.getNewSongList(this.areas[this.tabsetIndex].c);
  }
  getNewSongList(type): void {
    this.loading = true;
    this.newSongs = [];
    this.http.post(pathUrl['topSong'],{type}).subscribe(res => {
      if(res.code == 200) {
        this.newSongs = res.data;
      }
    },
    err=>{},
    ()=>{
      this.loading = false;
    })
  }
  getTopAlbum(limit, offset): void {
    this.loading = true;
    this.http.post(pathUrl['topAlbum'],{limit, offset}).subscribe(res => {
      if(res.code == 200) {
        console.log(res);
        this.albums = res.albums;
      }
    },
    err=>{},
    ()=>{
      this.loading = false;
    })
  }
  selectChange(e): void {
    if(this.newSongStu){
      this.getNewSongList(this.areas[e].c);
    }else {
      const offset = (this.pageIndex - 1) * this.limit;
      this.getTopAlbum(this.limit,offset);
    }
  }
  clickChange(val: boolean): void {
    this.newSongStu = val;
    if(this.newSongStu){
      this.getNewSongList(this.areas[this.tabsetIndex].c);
    }else {
      const offset = (this.pageIndex - 1) * this.limit;
      this.getTopAlbum(this.limit,offset);
    }
  }
}
