import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-head',
  templateUrl: './panel-head.component.html',
  styleUrls: ['./panel-head.component.css']
})
export class PanelHeadComponent implements OnInit {

  @Input()
  title = ''

  constructor() { }

  ngOnInit() {
  }

}
