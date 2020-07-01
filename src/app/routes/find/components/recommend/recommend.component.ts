import { Component, OnInit, AfterViewInit, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../../shared/http/http.service';
import { pathUrl } from '../../../../shared/http/path';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.less']
})
export class RecommendComponent implements OnInit, AfterViewInit {
  @Input() findIndex : number;
  @Output() linkTabIndex = new EventEmitter<any>();
  date = new Date().getDate();
  weekDay = new Date().getDay();
  week = ['日','一','二','三','四','五','六'];
  loading: boolean = true;
  constructor(
    private http: HttpService, 
    private router: Router) { }
  
  changeTabIndex(index: number) {
    this.linkTabIndex.emit(index);
  }
  ngOnInit(): void {
    this.getBanner();
    this.getPersonalized();
    this.getpersonalizedNewsong();
    this.getpersonalizedMv();
    this.getpersonalizedPrivatecontent();
    // this.getprogramRecommend();
    this.getDjprogram();
  }
  goSongsDetail(id): void {
    this.router.navigateByUrl('/lay/find/songs-detail/'+ id);
  }
  ngAfterViewInit(): void {
  }
  getBanner(): void {
    this.http.get(pathUrl['banner']).subscribe(res => {
      if(res.code == 200){
        this.array = res.banners;
      }
    })
  }
  //推荐歌单
  getPersonalized(): void {
    this.http.get(pathUrl['personalized'],{limit: 9}).subscribe(res => {
      if(res.code == 200){
        this.data[0].children = res.result;
      }
    },
    err=>{},
    ()=>{
      this.loading = false;
    })
  }
  //推荐电台
  getDjprogram() {
    this.http.get(pathUrl['personalizedDjprogram']).subscribe(res => {
      if(res.code == 200){
        this.data[4].children = res.result;
      }
    })
  }

  //推荐mv
  getpersonalizedMv() {
    this.http.get(pathUrl['personalizedMv']).subscribe(res => {
      if(res.code == 200){
        this.data[2].children = res.result;
      }
    })
  }

  //推荐新音乐
  getpersonalizedNewsong() {
    this.http.get(pathUrl['personalizedNewsong']).subscribe(res => {
      if(res.code == 200){
        this.data[1].children = res.result;
      }
    })
  }

   //推荐节目
  getprogramRecommend() {
    this.http.get(pathUrl['programRecommend']).subscribe(res => {
      if(res.code == 200){
        // console.log(res.result);
      }
    })
  }

   //独家放送
   getpersonalizedPrivatecontent() {
    this.http.get(pathUrl['personalizedPrivatecontent']).subscribe(res => {
      if(res.code == 200){
        this.data[3].children = res.result;
      }
    })
  }
  array = [];
  data = [
    {
      title: '推荐歌单',
      link: '',
      code: 'tjgd',
      tabIndex: 1,
      children:[
      ]
    },
    {
      title: '最新音乐',
      link: '',
      code: 'zxyy',
      tabIndex: 5,
      children:[]
    },
    {
      title: '推荐MV',
      link: '',
      code: 'tjmv',
      tabIndex: -1,
      children:[]
    },
    {
      title: '独家放送',
      link: '',
      code: 'djfs',
      tabIndex: -1,
      children:[]
    },
    {
      title: '主播电台',
      link: '',
      code: 'zbdt',
      tabIndex: 2,
      children:[]
    },
    // {
    //   title: '推荐节目',
    //   link: '',
    //   code: 'tjjm',
    //   tabIndex: -1,
    //   children:[]
    // },
  ]

  carouselChange(i): void {
    // console.log(i);
  }

}
