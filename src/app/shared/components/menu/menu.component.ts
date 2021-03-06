import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => {
      if (_.url) {
        this.currentUrl = _.url;
      }
    });
  }

  ngOnInit() {
  }
}
