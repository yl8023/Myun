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
export class LyricComponent implements OnInit, AfterViewChecked {
  @Input() musicId: any;
  musicCurrentTime = 0;
  private audioDuration = new Subscription();
  private opStopOrPlay = new Subscription();
  nowShow: boolean = false;
  loading: boolean = true;
  nolyric: boolean = false; //无歌词，纯音乐
  qfy: boolean = false; //求翻译
  qgc: boolean = false; // 求歌词
  lyricUser: any; //歌词贡献者
  transUser: any; //翻译贡献者
  lyricItemId: any;
  musicLyric: any;
  constructor(
    private http: HttpService,
    private audioService: AudioService,
    private tool: ToolsService,
    private el: ElementRef
  ) {
    this.audioDuration = this.audioService.sendAudioDuration().subscribe(msg => {
      this.musicCurrentTime = msg.time;
      if (this.canScrollLyric()) {
        this.setLyricTime();
      }
    });

    this.opStopOrPlay = this.audioService.sendOplyric().subscribe(msg => {
      if (msg.op === 'stop') {
        this.tool.pauseTime();
      } else if (msg.op === 'play') {
        this.tool.playTime('继续', '播放', true);
      }
    });
  }

  ngOnInit(): void {
    this.getLyric(this.musicId);
  }

  ngAfterViewChecked(): void {
  }

  onScrollFn(e): void {
    console.log(e.target.scrollTop);
    // this.el.nativeElement.querySelector('#lyricBox').scrollTop = 
  }
  //能否执行歌词滚动
  canScrollLyric(): boolean {
    const canDo = !this.loading && !this.nolyric && !this.qgc;
    return canDo
  }
  //计算滚动条
  setScrollTop(): void {

    const lyricBox = this.el.nativeElement.querySelector('#lyricBox');
    const lyricItem = this.el.nativeElement.querySelector('.now');
    if (lyricItem) {
      const difference = lyricItem.offsetTop - lyricBox.clientHeight / 2;
      if (difference) {
        // lyricItem.scrollIntoView();
        console.log('scroll----',difference);
        lyricBox.scrollTo({
          top: difference,
          left: 0,
          behavior: "smooth" //滚动条平滑滚动
        });
        // lyricBox.scrollTop = difference;
      }
    }

  }

  //计算哪句歌词应该显示以及显示的时长
  setLyricTime() {
    this.musicLyric.forEach((val, idx) => {
      if (idx < this.musicLyric.length - 1) {
        if (this.musicCurrentTime >= val.time && this.musicCurrentTime < this.musicLyric[idx + 1].time) {
          val.showTime = this.musicLyric[idx + 1].time - val.time;
          if (!val.nowShow) {
            val.nowShow = true;
            this.tool.playTime(() => {
              val.nowShow = false;
            }, val.showTime * 1000);
            this.setScrollTop();
          }
        }
      }
    });
  }
  mergeLyric(lyric1: Array<any>, lyric2?: Array<any>) {
    lyric1.forEach((val, idx) => {
      val.lyc_str2 = '';
      if (lyric2) {
        for (const key of lyric2) {
          if (val.time == key.time) {
            lyric1[idx].lyc_str2 = key.lyc_str;
          }
        }
      }
    })
    this.musicLyric = lyric1;
  }
  resolvLyric(lyric: any): Array<any> {
    const { lyric: lyricStr } = lyric;
    let lrc_arr = lyricStr.split('\n');
    let lycArry: Array<any> = [];
    lrc_arr.forEach((lyc) => {
      let lycObj = { lyc_str: '', time: '' };
      let lyc_str = lyc.replace(/\[[\w\W]*\]/, "").replace(/^\s*|\s*$/g, "");//解析出歌词
      let time = lyc.match(/\[[0-9:.]*\]/g); //解析出时间
      if (time !== null && time) {
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
    } catch (a) {
      return 0
    }
  };
  getLyric(id): void {
    this.http.get(pathUrl['lyric'], { id }).subscribe(res => {
      if (res.code == 200) {
        const { nolyric, uncollected, lrc, tlyric, lyricUser, transUser } = res;
        if (nolyric) {
          this.nolyric = nolyric;
          return
        }
        if (uncollected) {
          this.qgc = uncollected;
          return
        }
        this.lyricUser = lyricUser;
        this.transUser = transUser;
        if (tlyric.version > 0) {
          this.mergeLyric(this.resolvLyric(lrc), this.resolvLyric(tlyric));
        } else if (tlyric.version == 0) {
          this.mergeLyric(this.resolvLyric(lrc));
          this.qfy = true;
        }
      }
    },
      error => {

      },
      () => {
        this.loading = false;
      }
    );
  }
}
