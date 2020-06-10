import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-audio-btn',
  templateUrl: './audio-btn.component.html',
  styleUrls: ['./audio-btn.component.less']
})
export class AudioBtnComponent implements OnInit {
  @Input() startTogg: boolean;
  @Output() musicEvent = new EventEmitter<any>();
  constructor() { }
  operations = [
    {code: 'previous', text: '上一首'},
    {code: 'next', text: '下一首'},
    {code: 'play', text: '播放'},
    {code: 'stop', text: '暂停'},
  ]
  
  ngOnInit(): void {
  }

  toggFn(): void {
    this.startTogg = !this.startTogg;
    this.sendOp(this.startTogg ? 2 : 3);
  }
  
  sendOp(index: number): void {
    this.musicEvent.emit(this.operations[index]);
  }

}
