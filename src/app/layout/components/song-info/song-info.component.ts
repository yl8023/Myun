import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class SongInfoComponent implements OnInit {
  private watchStatus = new Subscription();//接收是否打开歌曲详情
  animateStatus: boolean;
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
    })
  }

  ngOnInit(): void {
    
  }
  closeInfo(): void{
    this.musicInfoSer.infoIsShow = false;
  }

  setBackground(): void {
    this.musicBackground.nativeElement.style.background = `url(${this.music.al?.picUrl}+?param=280y280) no-repeat 100%`
  }

  

}
