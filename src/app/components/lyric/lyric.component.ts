import { Component, OnInit, Input, AfterViewChecked, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { pathUrl } from '../../shared/http/path';
import { HttpService } from '../../shared/http/http.service';
import { AudioService } from '../../services/audio.service';
import { ToolsService } from '../../services/tools.service';

@Component({
  selector: 'app-lyric',
  templateUrl: './lyric.component.html',
  styleUrls: ['./lyric.component.less']
})
export class LyricComponent implements OnInit,AfterViewChecked {
  @Input() musicId: any;
  musicCurrentTime = 0;
  private audioDuration = new Subscription();
  private opStopOrPlay = new Subscription();
  nowShow: boolean = false;
  loading: boolean = true;
  lyricItemId: any;
  musicLyric: any;
  constructor(
    private http: HttpService,
    private audioService:AudioService,
    private tool: ToolsService,
    private el: ElementRef
  ) {
    this.audioDuration = this.audioService.sendAudioDuration().subscribe(msg => {
      this.musicCurrentTime = msg.time;
      if(!this.loading) {
        this.setLyricTime();
      }
    });

    this.opStopOrPlay = this.audioService.sendOplyric().subscribe(msg => {
      if(msg.op === 'stop') {
        this.tool.pauseTime();
      }else if(msg.op === 'play') {
        this.tool.playTime('继续','播放',true);
      }
    });
  }

  ngOnInit(): void {
    this.getLyric(this.musicId);
  }
  
  ngAfterViewChecked(): void {
  }

  onScrollFn(e): void {
    // console.log(e);
  }

  //计算滚动条
  setScrollTop(): void {
    
    const lyricBox = this.el.nativeElement.querySelector('#lyricBox');
    const lyricItem = this.el.nativeElement.querySelector('.now');
    if(lyricItem) {
      const difference = lyricItem.offsetTop - lyricBox.clientHeight/2;
      if(difference){
        console.log('scroll----');
        let stepNum = difference / 10;
        const lastStep =  difference % 10;
        const scrollInterval = setInterval(()=>{
          lyricBox.scrollTop > difference ? false : lyricBox.scrollTop += 10;
          stepNum --;
          if(!stepNum && lyricBox.scrollTop > difference) {
            lyricBox.scrollTop += lastStep;
            clearTimeout(scrollInterval);
          }
        },50)
      }
    }
    
  }
  
  //计算哪句歌词应该显示以及显示的时长
  setLyricTime(){
    const nowTime = this.musicCurrentTime;
    const timeSlot = this.musicCurrentTime - 0.5;
    this.musicLyric.forEach((val, idx) => {
      if(nowTime > val.time && val.time > timeSlot){
        val.showTime = this.musicLyric[idx + 1].time - val.time;
        if(!val.nowShow) {
          val.nowShow = true;
          this.tool.playTime(() => {
            val.nowShow = false;
          }, val.showTime * 1000);
          this.setScrollTop();
        }
      }
    });
  }
  mergeLyric(lyric1: Array<any>, lyric2: Array<any>){
    let lyricArry = [];
    lyric1.forEach((val, index) => {
      if(val.time == lyric2[index].time){
        const obj = {
          str1: val.lyc_str,
          str2: lyric2[index].lyc_str,
          time: val.time
        }
        lyricArry.push(obj);
      }
    })
    this.musicLyric = lyricArry;
  }
  resolvLyric(lyric: any): Array<any>{
    const { lyric: lyricStr} = lyric;
    let lrc_arr = lyricStr.split('\n');
    let lycArry: Array<any> = [];
    lrc_arr.forEach((lyc) => {
      let lycObj = {lyc_str: '', time:''};
      let lyc_str = lyc.replace(/\[[\w\W]*\]/, "").replace(/^\s*|\s*$/g, "");//解析出歌词
      let time = lyc.match(/\[[0-9:.]*\]/g); //解析出时间
      if(time !== null && time) {
        lycObj.lyc_str = lyc_str;
        let timeSecond;
        for (let x in time) {
          let tim = time[x].replace(/\[|\]/g, "");
          timeSecond = this.time2second(tim).toFixed(2);//将时间转化为秒数
        }
        lycObj.time = timeSecond;
        lycArry.push(lycObj);
      }
    });
    return lycArry;
  }
  time2second(time) {
    try {
      var b = time.split(":");
      return parseInt(b[0]) * 60 + parseFloat(b[1])
    } catch(a) {
      return 0
    }
  };
  getLyric(id): void{
    this.http.get(pathUrl['lyric'],{ id }).subscribe(res => {
      if(res.code == 200){
        const { lrc, tlyric } = res;
        this.mergeLyric( this.resolvLyric(lrc), this.resolvLyric(tlyric) );
        this.loading = false;
      }
    });
  }
}
