import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AudioService } from '../../../services/audio.service';
import { Subscription } from 'rxjs';

import { SongModel} from '../../../base/common';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.less']
})
export class PlayListComponent implements OnInit {
  @Input() listPlayModel: number = 0; //播放模式
  @Output() musicPlay = new EventEmitter<any>(); //通知当前歌曲
  @Output() musicLength = new EventEmitter<any>(); //通知播放列表数量
  playIndex:any = 0;//当前播放歌曲index
  toggerDropdown: boolean = true;
  data:SongModel[] = [];
  tableLoading: boolean = false; 
  messageAddMusic = new Subscription();//接收添加歌曲的消息
  messageChangeMusic = new Subscription();//接收上一首/下一首的消息
  constructor(private audioService: AudioService) {
    //添加歌曲到播放列表
    this.messageAddMusic  = this.audioService.getToPlay().subscribe( message => {
      
      if( message.music instanceof Array){
        //添加整个歌单
        const nowSonsData = this.data;
        this.data = nowSonsData.concat(message.music);
        this.checkMusic();
      }else {
        //添加单曲
        this.data.splice(this.playIndex, 0, message.music);
        this.sendMusicIndex(message.music);
      }
      console.log(this.data);
      this.sendLength();

    });

    this.messageChangeMusic = this.audioService.getChangeIndex().subscribe(message => {
      this.playIndex = message.index;
      this.sendMusicIndex(this.data[this.playIndex]);
    })
  }

  ngOnInit(): void {
  }
  
  toggerButton(val) {
    this.toggerDropdown = val;
  }

  //播放列表中添加歌单时默认播放的歌 index
  checkMusic(){
    console.log('播放模式'+this.listPlayModel);
    if (this.listPlayModel < 3){
      this.playIndex = 0
    } else {
      this.playIndex = Math.ceil(Math.random() * this.data.length) - 1
    }
    this.sendMusicIndex(this.data[this.playIndex]);
  }

  //通知父组件当前播放列表的长度
  sendLength(): void {
    this.musicLength.emit(this.data.length);
  }
  //通知父组件当前歌曲
  sendMusicIndex(music: SongModel): void {
    this.musicPlay.emit(music);
  }
}
