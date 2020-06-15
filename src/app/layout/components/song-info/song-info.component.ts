import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { toMusicInfoAnimation } from '../../../animations/music-animation';
import { MusicInfoStuService } from '../../../services/music-info-stu.service';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.less'],
  animations:[toMusicInfoAnimation]
})
export class SongInfoComponent implements OnInit {
  private watchStatus = new Subscription();//接收是否打开歌曲详情
  animateStatus: boolean;
  constructor(
    private musicInfoSer: MusicInfoStuService
  ) {
    this.watchStatus = this.musicInfoSer.getStatus().subscribe(msg =>{
      //接收是否打开歌曲详情boolean 并赋值
      this.animateStatus = msg.isShow
    })
  }

  ngOnInit(): void {
  }
  
  closeInfo(): void{
    this.musicInfoSer.infoIsShow = false;
  }

}
