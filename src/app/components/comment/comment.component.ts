import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/http/http.service';
import { pathUrl } from '../../shared/http/path';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

}
