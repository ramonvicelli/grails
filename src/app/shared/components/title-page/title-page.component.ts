import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit {

  @Input()
  title = ''

  constructor() { }

  ngOnInit() {
  }

}
