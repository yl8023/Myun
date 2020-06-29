import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../shared/http/http.service';
import { pathUrl } from '../../../../shared/http/path';

@Component({
  selector: 'app-singers',
  templateUrl: './singers.component.html',
  styleUrls: ['./singers.component.less']
})
export class SingersComponent implements OnInit {
  limit = 30;
  pageIndex = 1;
  loading:boolean = true;
  artists = [];
  areas = [
    {c:-1,t:'全部',s:true},
    {c:7,t:'华语',s:false},
    {c:96,t:'欧美',s:false},
    {c:8,t:'日本',s:false},
    {c:16,t:'韩国',s:false},
    {c:0,t:'其他',s:false},
  ];
  types = [
    {c:-1,t:'全部',s:true},
    {c:1,t:'男歌手',s:false},
    {c:2,t:'女歌手',s:false},
    {c:3,t:'乐队',s:false},
  ];
  initials = [{c:'热门',t:-1,s:true},{c:'a',s:false},{c:'b',s:false},{c:'c',s:false},{c:'d',s:false},{c:'e',s:false},{c:'f',s:false},{c:'g',s:false},{c:'h',s:false},{c:'i',s:false},{c:'j',s:false},{c:'k',s:false},{c:'l',s:false},{c:'m',s:false},{c:'n',s:false},{c:'o',s:false},{c:'p',s:false},{c:'q',s:false},{c:'r',s:false},{c:'s',s:false},{c:'t',s:false},{c:'u',s:false},{c:'v',s:false},{c:'w',s:false},{c:'x',s:false},{c:'y',s:false},{c:'z',s:false},{c:'#',t:0,s:false}];
  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.setParms();
  }

  changeSel(arr: Array<any>, idx: any){
    arr.forEach((val,inx) => {
      if(inx == idx){
        val.s = true;
      }else {
        val.s = false;
      }
    })
    this.setParms();
  }
  
  setParms() {
    const Area = this.areas.filter((v) =>{return v.s});
    const Type = this.types.filter((v) =>{return v.s});
    const Initial = this.initials.filter((v) =>{return v.s});
    const offset = (this.pageIndex-1)*this.limit;
    
    let initial = Initial[0].t<=0 ? Initial[0].t : Initial[0].c;
    let area = Area[0].c;
    let type = Type[0].c;
    this.getSingerList(this.limit,offset,initial,type,area);
  }

  getSingerList(limit, offset, initial, type, area){
    this.loading = true;
    this.http.get(pathUrl['artistList'],{limit,offset,initial,type,area}).subscribe(res => {
      if(res.code == 200) {
        this.artists = res.artists;
      }
    },
    err => {},
    ()=>{
      this.loading = false;
    })
  }
}
