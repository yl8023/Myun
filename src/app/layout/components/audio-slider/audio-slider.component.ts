import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audio-slider',
  templateUrl: './audio-slider.component.html',
  styleUrls: ['./audio-slider.component.less']
})
export class AudioSliderComponent implements OnInit {
  @Input() currentTime: any;
  @Input() duration: any;
  constructor() { }

  ngOnInit(): void {
  }

}
