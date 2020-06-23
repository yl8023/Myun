import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { toMusicInfoAnimation } from '../../../animations/music-animation';
import { MusicInfoStuService } from '../../../services/music-info-stu.service';
import { pathUrl } from '../../../shared/http/path';
import { HttpService } from '../../../shared/http/http.service';
import { SongModel} from '../../../base/common';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.less'],
  animations:[toMusicInfoAnimation]
})
export class SongInfoComponent implements OnInit, OnDestroy {
  private watchStatus = new Subscription();//接收是否打开歌曲详情
  animateStatus: boolean;
  animeAfterload: Observable<any>;
  startLoad: boolean = false;
  @ViewChild('MusicBG') musicBackground: ElementRef;
  @Input() music: SongModel ;
  buttons = [
    {text:'喜欢', icon:'heart'},
    {text:'收藏', icon:'folder-add'},
    {text:'vip下载', icon:'download'},
    {text:'分享', icon:'share-alt'},
  ]
  musicLyric: any;
  constructor(
    private musicInfoSer: MusicInfoStuService,
    private http: HttpService
  ) {
    this.watchStatus = this.musicInfoSer.getStatus().subscribe(msg =>{
      //接收是否打开歌曲详情boolean 并赋值
      this.animateStatus = msg.isShow;
      if(this.animateStatus) {
        this.animeAfterload.subscribe(v => {
          this.startLoad = v;
          this.setBackground();
        })
      }else {
        this.startLoad = false;
      }
    })
  }

  ngOnInit(): void {
    this.afterAnimation();
  }
  
  afterAnimation(): void {
    this.animeAfterload = Observable.create(observer => {
      setTimeout(() => {
        observer.next(true);
        observer.complete();
      },500);
      
    })
  }
  
  closeInfo(): void{
    this.musicInfoSer.infoIsShow = false;
  }

  setBackground(): void {
    this.musicBackground.nativeElement.style.background = `url(${this.music.al?.picUrl}+?param=280y280) no-repeat 100%`
  }

  ngOnDestroy(): void {
    this.watchStatus.unsubscribe();
  }

}
