import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { HttpService } from '../../shared/http/http.service';
import { pathUrl } from '../../shared/http/path';

@Component({
  selector: 'app-tabs-select',
  templateUrl: './tabs-select.component.html',
  styleUrls: ['./tabs-select.component.less']
})
export class TabsSelectComponent implements OnInit {
  @Input() tabIndex: any = 0;
  @Input() videoTagIndex: any = -1;
  @Input() type: any;
  @Output() reload = new EventEmitter<any>();
  @Input() hostTags: Array<any>;
  @ViewChild('contentTemplate') contentTemplate;
  @ViewChild('videoTemplate') videoTemplate;
  tplTxt: string;
  btnLoading: boolean = true;
  buttonText: any;
  all: any;
  tagClass: any = ['global', 'appstore-add', 'coffee', 'smile', 'appstore'];
  tagList: any;
  videoTagList: any;
  constructor(
    private http: HttpService,
  ) { }
  tabSelected(tabClass: any, index?: any) {
    if (!index && index != 0) {
      this.tabIndex = tabClass;
    } else {
      this.tabIndex = [tabClass, index];
    }
    this.setText();
    this.toReload();
  }
  toReload(): void {
    this.reload.emit({
      re: false,
      select: this.buttonText.name,
      selectIndex: this.tabIndex
    });
  }
  //按钮显示的值
  setText(): void {
    if (this.tabIndex === 0) {
      this.buttonText = this.all;
    } else {
      this.buttonText = this.tagList[this.tabIndex[0]].items[this.tabIndex[1]];
    }
  }
  //重新渲染组件
  
  ngOnInit(): void {
    console.log(this.type);
    switch(this.type){
      case 'gd':
        this.getCatList();
        break;
      case 'sp': this.getvideoGroupList();
        break;
    }
  }
  
  setSubClass(cls, list) {
    let clsList = [];
    for(const key in cls){
      let item = {
        text:cls[key],
        icon: this.tagClass[key],
        items: []
      };
      for(const val of list) {
        if(key == val.category){
          item.items.push(val);
        }
      }
      clsList.push(item);
    }
    
    return clsList;
  }
  //获取所有歌单标签
  getCatList(): void {
    this.http.get(pathUrl['playlistCatlist']).subscribe(
      res => {
        if(res.code == 200) {
          const {all, categories, sub} = res;
          this.all = all;
          this.tagList = this.setSubClass(categories, sub);
          this.setText();
        }
      },
      err => {},
      () => { 
        this.btnLoading = false;
        this.tplTxt = this.contentTemplate;
       }
    )
  }
  
  videoSelect(idx: any): void {
    this.videoTagIndex = idx;
    this.videoSetText();
    this.videotoReload();
  }
  videoSetText() {
    if(this.videoTagIndex == -1) {
      this.buttonText = {name: '全部视频'};
    } else {
      this.buttonText = this.videoTagList[this.videoTagIndex];
    }
  }
  videotoReload(): void {
    let videoTagId; 
    if (this.videoTagIndex == -1) {
      videoTagId = 0;
    }else{
      videoTagId = this.videoTagList[this.videoTagIndex].id
    }
    this.reload.emit({
      re: false,
      selectIdx: this.videoTagIndex,
      selectId: videoTagId
    });
  }
  //获取所有视频标签
  getvideoGroupList(): void {
    this.http.get(pathUrl['videoGroupList']).subscribe(
      res => {
        if(res.code == 200) {
          this.videoTagList = res.data;
        }
      },err=>{},
      ()=>{
        this.videoSetText();
        this.btnLoading = false;
        this.tplTxt = this.videoTemplate;
      }
    )
  }

}
