import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.less']
})
export class ToolsComponent implements OnInit {
  @Input() alia: any = [];
  @Input() tns: any = [];
  @Input() fee: any;
  @Input() mv: any;
  constructor() { }

  ngOnInit(): void {
  }

}
