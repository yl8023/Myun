import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-volume',
  templateUrl: './audio-volume.component.html',
  styleUrls: ['./audio-volume.component.less']
})
export class AudioVolumeComponent implements OnInit {
  volumeValue = 80;
  constructor() { }

  ngOnInit(): void {
  }

}
