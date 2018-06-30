import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private hasToken: boolean;
  constructor( private router: Router, private cookieService: CookieService){}

  ngOnInit(): void {

    this.hasToken = !!(this.cookieService.get('session'));
    @Injectable()
    class authentChecker {
      static isAuth: boolean;
    }
    authentChecker.isAuth = this.hasToken;
  }
}


