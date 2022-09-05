import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { NavigationEvent } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'midterm2022-ui';
  currentUrl:string;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.handleRouteChanges();
  }

  navigate(route:string) {
    this.router.navigate([route]);
  }

  handleRouteChanges() {
    this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationStart) {
        this.currentUrl = event.url;
      }
    });
  }
}
