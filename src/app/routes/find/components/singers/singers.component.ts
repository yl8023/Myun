import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../shared/http/http.service';
import { pathUrl } from '../../../../shared/http/path';
import { singerType } from '../../../../base/track';

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
  areas = singerType.areas;
  types = singerType.types;
  initials = singerType.initials;
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
