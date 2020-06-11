import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-audio-slider',
  templateUrl: './audio-slider.component.html',
  styleUrls: ['./audio-slider.component.less']
})
export class AudioSliderComponent implements OnInit {
  @Input() currentTime: any = 0;
  @Input() duration: any = 0;
  @Output() sendMusicSlider = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  sliderChange(val: any): void{
    this.sendMusicSlider.emit(val);
  }

}
