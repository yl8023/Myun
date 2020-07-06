import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpService } from '../../../shared/http/http.service';
import { pathUrl } from '../../../shared/http/path';
import { MvViewService } from '../../../services/mv-view.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.less']
})
export class PlayComponent implements OnInit, OnDestroy {
  mvId: any;
  mvUrl: any;
  mvInfo: any;
  constructor(
    private routing: ActivatedRoute,
    private http: HttpService,
    private mvView: MvViewService
  ) {
    this.mvView.openView();
  }

  ngOnInit(): void {
    this.routing.paramMap.pipe(
      switchMap(params =>  of(params.get('id')))
    ).subscribe(data => {
      this.mvId = data;
      console.log(data);
      // this.getmvUrl(data);
      this.getmvDetail(data);
    })
  }
  ngOnDestroy(): void {
    this.mvView.closeView();
  }
  
  backRoute(): void{
    history.go(-1)
  }

  getmvUrl(id): void {
    this.http.get(pathUrl['mvUrl'], { id }).subscribe(
      res => {
        if ( res.code == 200 ){
          this.mvUrl = res.data;
        }
      }
    )
  }
  getmvDetail(mvid): void {
    this.http.get(pathUrl['mvDetail'], { mvid }).subscribe(
      res => {
        if( res.code == 200 ){
          this.mvInfo = res.data;
        }
      }
    )
  }
}
