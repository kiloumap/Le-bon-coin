import {Component, Injectable, OnChanges, SimpleChanges} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  constructor(private cookieService: CookieService ){}

  ngOnChanges(changes: SimpleChanges): void {
    const value: string = cookieService.get('session');
  }

}
