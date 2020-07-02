import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/http/http.service';
import { pathUrl } from '../../shared/http/path';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit {
  reload: boolean = true;
  tagIndex: any = -1;
  areas=[
    {t:'全部',s:true},
    {t:'内地',s:false},
    {t:'港台',s:false},
    {t:'欧美',s:false},
    {t:'日本',s:false},
    {t:'韩国',s:false}
  ]
  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
  }

  reloadEl(ev) {
    console.log(ev);
    this.reload = ev.re;
    this.tagIndex = ev.selectIdx;
    this.getvideoGroup(ev.selectId);
    setTimeout(() => this.reload = true);
  }

  getvideoGroup(id): void {
    this.http.post(pathUrl['videoGroup'], {id}).subscribe(
      res => {

      }
    )
  }
}
