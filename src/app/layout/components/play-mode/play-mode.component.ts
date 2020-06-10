import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { playingModel } from '../../../base/track';

@Component({
  selector: 'app-play-mode',
  templateUrl: './play-mode.component.html',
  styleUrls: ['./play-mode.component.less']
})
export class PlayModeComponent implements OnInit {
  @Output() playModel = new EventEmitter<any>();
  iconSel = 0;
  iconList = [
    {icon: 'icon-list', text: playingModel[0]},
    {icon: 'icon-xunhuan', text: playingModel[1]},
    {icon: 'icon-danquxunhuan', text: playingModel[2]},
    {icon: 'icon-random', text: playingModel[3]}
  ];
  constructor() { }

  ngOnInit(): void {
    this.sendModel();
  }
  //更换播放模式
  sendModel(): void {
    this.playModel.emit(this.iconSel);
  }
  checkDrop(index): void {
    this.iconSel = index;
    this.sendModel();
  }
}
