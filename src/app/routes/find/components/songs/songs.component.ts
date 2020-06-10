import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.less']
})
export class SongsComponent implements OnInit {
  reload: boolean = true;
  textIndex: any = 0;
  tabs = ['流行', '摇滚', '民谣', '学习', '工作', '清新', '浪漫'];
  data = [];
  constructor() { }
  
  reloadEl(ev) {
    this.reload = ev.re;
    this.textIndex = ev.selectIndex;
    setTimeout(() => this.reload = true);
  }

  ngOnInit(): void {
    for (let i = 0; i<30; i++){
      this.data.push({
        image: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4233057963,2452252953&fm=26&gp=0.jpg',
        text: '[华语速爆]新歌推荐',
        number: 9999
      })
    }
    
  }
  
}
