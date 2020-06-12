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
  playIndex:any = 0;//当前播放歌曲index
  opts = {'next': 1,'previous': -1};
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
    });

    this.messageChangeMusic = this.audioService.getChangeIndex().subscribe(message => {
      console.log(message.code);
      switch(message.code){
        case 'next': //手动执行下一首的动作
          this.beforeNextMusic();
          this.sendMusicIndex(this.data[this.playIndex]);
          break;
        case 'auto': //自动执行下一首的动作
          this.beforeAutoNextMusic();
          break; // 不要忘记写break！！！
        case 'previous': //点击上一首的动作
          this.playIndex == 0 ? this.playIndex = this.data.length - 1 : this.playIndex-=1; 
          this.sendMusicIndex(this.data[this.playIndex]);
          break;
      }
      
    })
  }

  ngOnInit(): void {
  }
  
  toggerButton(val) {
    this.toggerDropdown = val;
  }

  //自动播放下一首时
  beforeAutoNextMusic(): void{
    switch(this.listPlayModel){
      case 0: // 0: '顺序播放',
        console.log('顺序播放');
        if(this.playIndex === this.data.length-1){
          console.log('播放完了');
        };
        break;
      case 2: // 2: '单曲循环',
        this.sendMusicIndex(this.data[this.playIndex]);
        break;
      case 3: // 3: '随机播放'
        this.randomPlay();
        this.sendMusicIndex(this.data[this.playIndex]);
        break;
      default:  // 1: '列表循环',
        this.playIndex < this.data.length - 1 ? this.playIndex+=1 : this.playIndex = 0 ;
        this.sendMusicIndex(this.data[this.playIndex]);
    }
  }
  //手动播放下一首时
  beforeNextMusic(): void{
    switch(this.listPlayModel){
      case 3: // 3: '随机播放'
        this.randomPlay();
        break;
      default:
        this.playIndex < this.data.length - 1 ? this.playIndex+=1 : this.playIndex = 0 ;
    }
  }
  //随机播放
  randomPlay(): void {
    const Mindex = this.playIndex;
    while(this.playIndex === Mindex){
      this.playIndex = Math.ceil(Math.random() * this.data.length) - 1; 
    }
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

  //通知父组件当前歌曲
  sendMusicIndex(music: SongModel): void {
    console.log('求求你不要播了!!!!');
    this.musicPlay.emit(music);
  }
}
