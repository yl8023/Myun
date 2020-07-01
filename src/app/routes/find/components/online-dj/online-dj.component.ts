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
  loading: boolean = true;
  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.getDjbanner();
    this.getdjCatelist();
  }

  getDjbanner() {
    this.http.get(pathUrl['djBanner']).subscribe(res => {
      if( res.code == 200 ){
        this.djBanner = res.data;
      }
    },()=>{

    },
    ()=>{this.loading = false;})
  }

  getdjCatelist() {
    this.http.get(pathUrl['djCatelist']).subscribe(res => {
      console.log(res);
    })
  }
  carouselChange(e){

  }

}
