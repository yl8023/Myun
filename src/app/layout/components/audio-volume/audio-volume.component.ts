import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-audio-volume',
  templateUrl: './audio-volume.component.html',
  styleUrls: ['./audio-volume.component.less']
})
export class AudioVolumeComponent implements OnInit {
  @Input() volumeValue: number = 80;
  @Output() sendMusicVolume = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  //改音量大小
  changeVolume(val: any): void{
    this.sendMusicVolume.emit(val);
  }
  
}
