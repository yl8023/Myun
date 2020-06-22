import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../../shared/http/http.service';
import { pathUrl } from '../../../../shared/http/path';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.less']
})
export class TopListComponent implements OnInit {
  highQualityTops: any = [];
  tops: any = [];
  names: any = [['飙','升榜'],['新','歌榜'],['原','创榜'],['热','歌榜'],['歌','手榜']];
  constructor(
    private router: Router,
    private http: HttpService,
  ) { }

  ngOnInit(): void {
    this.getAllList();
    this.getArList();
  }

  goSongsDetail(type, id): void {
    if(type){
      this.router.navigateByUrl('/lay/find/songs-detail/'+ id);
    }else {
      console.log('歌手');
    }
  }
  
  getAllList(): void {
    this.http.get(pathUrl['top-list']).subscribe(res => {
      if(res.code == 200) {
        res.list.forEach(item => {
          if(item.ToplistType){
            this.highQualityTops.push(item);
          }else {
            this.tops.push(item);
          }
        })
        for(let i=0;i<this.highQualityTops.length;i++){
          this.getTop(i);
        }
        console.log(this.highQualityTops, this.tops);
      }
    })
  }

  getTop(idx): void {
    this.http.post(pathUrl['topList'], {idx}).subscribe(res => {
      if(res.code == 200){
        this.highQualityTops.forEach(val =>{
          if(val.ToplistType == res.playlist.ToplistType){
            val.list = res.playlist.tracks.slice(0,8);
            val.load = true;
          }
        }) 
      }
    })
  }

  getArList(): void {
    this.http.post(pathUrl['toplistArtist'],{type: 1}).subscribe(res => {
      if(res.code == 200){
        const{artists, updateTime} = res.list;
        this.highQualityTops.push({
          updateTime,
          list: artists.slice(0,8),
          load: true
        });
      }
    })
  }

}
