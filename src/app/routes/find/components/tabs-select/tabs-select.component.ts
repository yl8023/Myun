import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-select',
  templateUrl: './tabs-select.component.html',
  styleUrls: ['./tabs-select.component.less']
})
export class TabsSelectComponent implements OnInit {
  @Input() tabIndex: any = 0;
  @Output() reload = new EventEmitter<any>();
  buttonText: any = '全部歌单';
  constructor() { }
  tabSelected(tabClass: any, index?: any) {
    if (!index && index != 0) {
      this.tabIndex = tabClass;
    } else {
      this.tabIndex = [tabClass, index];
    }
    this.toReload();
  }

  setText(): void {
    if (this.tabIndex === 0) {
      this.buttonText = '全部歌单';
    } else {
      this.buttonText = this.data[this.tabIndex[0]].items[this.tabIndex[1]];
    }
  }
  //重新渲染组件
  toReload(): void {
    this.reload.emit({
      re: false,
      selectIndex: this.tabIndex
    });
  }
  ngOnInit(): void {
    this.setText();
  }

  data = [
    {
      text: '语种',
      icon: 'global',
      items: ['华语', '欧美', '日语', '韩语', '粤语']
    },
    {
      text: '风格',
      icon: 'appstore-add',
      items: ['流行', '摇滚', '民谣', '电子', '舞曲', '说唱', '轻音乐', '爵士']
    },
    {
      text: '场景',
      icon: 'coffee',
      items: ['清晨', '夜晚', '学习', '工作', '午休', '下午茶', '地铁', '驾车']
    },
    {
      text: '情感',
      icon: 'smile',
      items: ['怀旧', '清新', '浪漫', '伤感', '治愈', '放松', '孤独']
    },
    {
      text: '主题',
      icon: 'appstore',
      items: ['综艺', '影视原声', 'ACG', '儿童', '校园', '游戏', '70后', '80后', '90后']
    }
  ];

}
