import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../shared/http/http.service';
import { pathUrl } from '../../shared/http/path';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {
  @Input() musicId: any;
  loading: boolean = true;
  comment: any;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(){
    this.http.get(pathUrl['commentMusic'], {id: this.musicId}).subscribe(res => {
      if( res.code == 200){
        this.comment = res;
      }
    },
    err => {},
    ()=>{
      this.loading = false;
    });
  }
}
