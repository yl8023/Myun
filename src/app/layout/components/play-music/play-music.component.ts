import { Component, OnInit, Input, } from '@angular/core';
import { MusicInfoStuService } from '../../../services/music-info-stu.service';

@Component({
  selector: 'app-play-music',
  templateUrl: './play-music.component.html',
  styleUrls: ['./play-music.component.less']
})
export class PlayMusicComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() musicName: string;
  @Input() singer: any;
  constructor(
    private musicInfoSer: MusicInfoStuService
    ) { }

  ngOnInit(): void {
  }
  
  musicDetail(): void{
    //调用MusicInfoStuService的set方法
    this.musicInfoSer.infoIsShow = true;
  }

}
