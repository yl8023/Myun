import { Component, OnInit, ViewChild } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { HttpService } from '../../../shared/http/http.service';
import { AudioService } from '../../../services/audio.service';
import { pathUrl } from '../../../shared/http/path';
import { SongModel} from '../../../base/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  constructor(
    private iconService: NzIconService,
    private http: HttpService,
    private audioService: AudioService
    ) { }
  @ViewChild('audioElm') audioElement;
  musicUrl: string;
  playList = [];
  musicIndex: any = 0;
  musicPlayLength: number;
  nowMusic: SongModel;
  footerPlayModel: number;
  childIcon: boolean = false;
  Operations = { //music操作
    'stop': () => {
      this.audioElement.nativeElement.pause();
    },
    'play': () => {
      this.audioElement.nativeElement.play();
      console.log('准备播放');
    },
    'next': () => {
      this.musicIndex < this.musicPlayLength - 1 ? this.musicIndex+=1 : this.musicIndex = 0 ;
      this.audioService.changeIndex(this.musicIndex);
    },
    'previous': () => {
      this.musicIndex == 0 ? this.musicIndex = this.musicPlayLength - 1 : this.musicIndex-=1 ;
      this.audioService.changeIndex(this.musicIndex);
    }
  }
  ngOnInit(): void {
    this.iconService.fetchFromIconfont({scriptUrl: '../../../assets/iconfont/iconfont.js'});// 加载额外iconfont图标
  }
  changeModel(model: any): void{
    this.footerPlayModel = model;
  }
  nowMusicPlay(music) {
    console.log(music);
    this.nowMusic = music;
    this.getMusicUrl(music.id);
  }

  //获取播放列表的数量
  getMusicLength(len: number): void {
    this.musicPlayLength = len;
  }
  //播放操作
  getMusicOperation(operation: any): void {
    console.log(operation);
    this.Operations[operation.code]();
  }
  
  //加载音频//播放音乐并改变子组件的按钮图标
  loadAudio(): void{
    this.audioElement.nativeElement.load();
    this.Operations['play']();
    this.childIcon = !this.childIcon;
    setTimeout(()=>{this.childIcon = true}) ;
    console.log('music加载完成');
  }
  getMusicUrl(id): void{
    this.http.get(pathUrl['songUrl'],{id}).subscribe(res => {
      if( res.code == 200) {
        this.musicUrl = res.data[0].url;
        if(this.musicUrl) {
          this.loadAudio();
        }
      }
    });
  }
}
