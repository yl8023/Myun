import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit, AfterViewInit {
  @Input() Path: string;
  @ViewChild('videoPlay') videoEl: any;
  duration: any;
  currentTime: any;
  volume: number = 100;
  videoLoading: boolean = true;
  playOver: boolean = false;
  playing: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }
  loadStart(): void {
    console.log('视频开始加载');
    this.videoLoading = true;
  }
  timeChange(e): void {
    this.currentTime = e.target.currentTime;
  }
  loadOver(): void {
    console.log('视频加载好了');
    this.videoLoading = false;
    this.duration = this.videoEl.nativeElement.duration;
    this.currentTime = this.videoEl.nativeElement.currentTime;
    this.volume = this.videoEl.nativeElement.volume * 100;
  }
  playVideoFn(val?): void {
    this.playing = val? val : !this.playing;
    this.playing ? this.videoEl.nativeElement.play() : this.videoEl.nativeElement.pause();
  }
  sliderChange(e): void {
    this.videoEl.nativeElement.currentTime = e;
  }

  volumeChange(e): void {
    this.videoEl.nativeElement.volume = e / 100;
  }

}
