import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../shared/http/http.service';
import { pathUrl } from '../../../../shared/http/path';

@Component({
  selector: 'app-online-dj',
  templateUrl: './online-dj.component.html',
  styleUrls: ['./online-dj.component.less']
})
export class OnlineDjComponent implements OnInit {
  djBanner: any;
  categories: any;
  loading: boolean = true;
  categorieIndex: number = 0;
  topPaylimit: number = 4;
  nowList: any;
  recommend: any;
  categorieRecommend: any;
  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.getDjbanner();
    this.getdjToplistPay(this.topPaylimit);
    this.getdjRecommend();
  }

  getDjbanner() {
    this.http.get(pathUrl['djBanner']).subscribe(res => {
      if (res.code == 200) {
        this.djBanner = res.data;
      }
    }, () => {

    },
      () => {
        this.getdjCatelist();
      })
  }
  //电台分类
  getdjCatelist() {
    this.http.get(pathUrl['djCatelist']).subscribe(res => {
      if (res.code == 200) {
        this.categories = res.categories;
        this.categorieRecommend = this.categories.slice(0,5);
      }
    },
      err => { },
      () => {
        this.loading = false;
        this.categorieRecommend.forEach((val,ind)=>{
          this.getdjRecommendType(val)
        })
        console.log(this.categorieRecommend);
      })
  }
  //电台精选
  getdjToplistPay(limit): void {
    this.http.get(pathUrl['djPaygift'], {limit}).subscribe(res => {
      if (res.code == 200) {
        this.nowList = res.data.list;
      }
    })
  }
  //电台推荐
  getdjRecommend(): void {
    this.http.get(pathUrl['djRecommend']).subscribe(res => {
      if(res.code == 200) {
        this.recommend = res.djRadios;
      }
    })
  }
//电台分类推荐
getdjRecommendType(cr): void {
  this.http.get(pathUrl['djRecommendType'],{type: cr.id}).subscribe(res=>{
    if(res.code == 200) {
      cr.djRadios = res.djRadios;
    }
  })
}

  cilckChangeIndex(val) {
    this.categorieIndex += val;
  }
  carouselChange(e) {

  }

}
