import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpService } from '../../shared/http/http.service';
import { pathUrl } from '../../shared/http/path';

@Component({
  selector: 'app-tabs-select',
  templateUrl: './tabs-select.component.html',
  styleUrls: ['./tabs-select.component.less']
})
export class TabsSelectComponent implements OnInit {
  @Input() tabIndex: any = 0;
  @Output() reload = new EventEmitter<any>();
  @Input() hostTags: Array<any>;
  btnLoading: boolean = true;
  buttonText: any;
  all: any;
  tagClass: any = ['global', 'appstore-add', 'coffee', 'smile', 'appstore'];
  tagList: any;
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

  //按钮显示的值
  setText(): void {
    if (this.tabIndex === 0) {
      this.buttonText = this.all;
    } else {
      this.buttonText = this.tagList[this.tabIndex[0]].items[this.tabIndex[1]];
    }
  }
  //重新渲染组件
  toReload(): void {
    this.reload.emit({
      re: false,
      select: this.buttonText.name,
      selectIndex: this.tabIndex
    });
  }
  ngOnInit(): void {
    this.getCatList();
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
  //获取所有标签
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
      () => { this.btnLoading = false }
    )
  }

}
