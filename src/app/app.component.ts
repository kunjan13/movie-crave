import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'movcrav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public location = '';

  constructor(private router: Router) {

    router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        this.location = event.url;
      }
    });
  }

  ngOnInit() {

  }
}
