import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  inputValue = '';
  urlList = [];
  urlIndex = 0;
  urlLast = 0;
  history = history;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        this.urlIndex = this.history.length - 1 ;
        console.log(this.urlIndex);
      }
      
    })
  }

  goUrl(num: number){
    if (this.history.length > 1) {
      this.history.go(num);
    }
  }

  onChange(e) {

  }
}
