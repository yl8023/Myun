import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../../shared/http/http.service';
import { pathUrl } from '../../../../shared/http/path';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.less']
})
export class SongsComponent implements OnInit {
  reload: boolean = true;
  textIndex: any = 0;
  selectTag: any = '全部歌单';
  hostTags: Array<any>;
  hotIdx = -1;
  songsList: any;
  total: any = 0;
  pageIndex: any = 1;
  limit: any = 60;
  isLoading: boolean = true;
  constructor(
    private http: HttpService,
    private router: Router
  ) { }
  
  reloadEl(ev) {
    console.log(ev);
    this.reload = ev.re;
    this.textIndex = ev.selectIndex;
    this.selectTag = ev.select;
    this.toGetSongsDate();
    setTimeout(() => this.reload = true);
  }

  ngOnInit(): void {
    this.getHotCats();
    this.toGetSongsDate();
  }
  //选中热门标签
  clickTag(idx){
    this.hotIdx = idx;
    this.hostTags.forEach((val, i)=>{
      if(idx == i) {
        val.activity = true;
      } else {
        val.activity = false;
      }
    })
  }
  //请求歌单数据
  toGetSongsDate(): void {
    const offset = (this.pageIndex-1)*this.limit;
    this.getSongsDate(this.selectTag, this.limit, offset);
  } 
  //热门分类
  getHotCats(): void {
    this.http.get(pathUrl['playlistHotCat']).subscribe(res => {
      if(res.code == 200) {
        this.hostTags = res.tags;
      }
    })
  }

  //当前页数改变时
  changePage(page): void {
    this.pageIndex = page;
    this.toGetSongsDate();
  }

  getSongsDate(cat: any, limit: any, offset: any, order?: any): void {
    this.isLoading = true;
    this.http.get(pathUrl['topPlaylist'], {cat, limit, offset, order}).subscribe(res => {
      if(res.code == 200) {
        console.log(res);
        const {playlists, total} = res;
        this.songsList = playlists;
        this.total = total;
      }
    },
    err => {},
    () => {this.isLoading = false;}
    )
  }

  goSongsDetail(id): void {
    this.router.navigateByUrl('/lay/find/songs-detail/'+ id);
  }
}
