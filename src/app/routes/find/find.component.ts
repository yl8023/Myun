import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.less']
})
export class FindComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) { }
  tabsetIndex = 5;
  onChangeIndex(index) {
    console.log(index);
    this.tabsetIndex = index;
  }

  ngOnInit(): void {
    
  }

}
