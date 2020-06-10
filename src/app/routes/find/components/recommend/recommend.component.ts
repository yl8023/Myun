import { Component, OnInit, AfterViewInit, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../../shared/http/http.service';
import { pathUrl } from '../../../../shared/http/path';
import { AudioService } from '../../../../services/audio.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.less']
})
export class RecommendComponent implements OnInit, AfterViewInit {
  @Input() findIndex : number;
  @Output() linkTabIndex = new EventEmitter<any>();
  loading: boolean = true;
  constructor(
    private http: HttpService, 
    private audioService: AudioService, 
    private router: Router) { }
  
  changeTabIndex(index: number) {
    this.linkTabIndex.emit(index);
  }
  ngOnInit(): void {
    this.getBanner();
    this.getPersonalized();
  }
  goSongsDetail(id): void {
    this.router.navigateByUrl('/lay/find/songs-detail/'+ id);
  }
  ngAfterViewInit(): void {
  }
  getBanner(): void {
    this.http.get(pathUrl['banner']).subscribe(res => {
      this.array = res.banners;
    })
  }
  getPersonalized(): void {
    this.http.get(pathUrl['personalized'],{limit: 9}).subscribe(res => {
      this.data[0].children = res.result;
      this.loading = false;
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
      title: '主播电台',
      link: '',
      code: 'zbdt',
      tabIndex: 2,
      children:[]
    },
  ]

  carouselChange(i): void {
    // console.log(i);
  }

}
