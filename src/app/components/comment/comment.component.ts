import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../shared/http/http.service';
import { pathUrl } from '../../shared/http/path';
import { commentType } from '../../base/track';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {
  @Input() type: number;
  @Input() mid: any;
  loading: boolean = true;
  comment: any;
  constructor(
    private router: Router,
    private http: HttpService
    ) { }

  ngOnInit(): void {
    this.selectType(this.mid);
  }

  goUserInfo(userId: any): void {
    this.router.navigate(['/base/lay/user/user-info', userId]);
  }
  
  selectType(id): void {
    switch (this.type){
      case commentType[0].code:
        this.getMusicComment(id);
        break;
      case commentType[1].code:
        this.getPlaylistComment(id);
        break;
      case commentType[2].code:
        this.getAlbumComment(id);
        break;
      case commentType[3].code:
        this.getMvComment(id);
        break;
      case commentType[4].code:
        this.getDjComment(id);
        break;
      case commentType[5].code:
        this.getVideoComment(id);
        break;
    }
  }
  //歌曲评论
  getMusicComment(id): void {
    this.http.get(pathUrl['commentMusic'], {id}).subscribe(res => {
      if( res.code == 200){
        this.comment = res;
      }
    },
    err => {},
    ()=>{
      this.loading = false;
    });
  }
  //歌单评论
  getPlaylistComment(id): void {
    this.http.get(pathUrl['commentPlaylist'], {id}).subscribe(
      res => {
        if( res.code == 200){
          this.comment = res;
        }
      },
    err=>{},
    ()=>{
      this.loading = false;
    });
  }
  //专辑评论
  getAlbumComment(id): void {
    this.http.get(pathUrl['commentAlbum'], {id}).subscribe(
      res => {
        if( res.code == 200){
          this.comment = res;
        }
      },
    err=>{},
    ()=>{
      this.loading = false;
    });
  }
  //mv评论
  getMvComment(id): void {
    this.http.get(pathUrl['commentMv'], {id}).subscribe(
      res => {
        if( res.code == 200){
          this.comment = res;
        }
      },
    err=>{},
    ()=>{
      this.loading = false;
    });
  }
  //电台评论
  getDjComment(id): void {
    this.http.get(pathUrl['commentDj'], {id}).subscribe(
      res => {
        if( res.code == 200){
          this.comment = res;
        }
      },
    err=>{},
    ()=>{
      this.loading = false;
    });
  }
  //视频评论
  getVideoComment(id): void {
    this.http.get(pathUrl['commentVideo'], {id}).subscribe(
      res => {
        if( res.code == 200){
          this.comment = res;
        }
      },
    err=>{},
    ()=>{
      this.loading = false;
    });
  }
}
