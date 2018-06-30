import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user-interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../core/service/article.service";
import {UserService} from "../../core/service/user.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent{
  @Input() user: User | null;

  userForm = new FormGroup({
    name    : new FormControl(''),
    email   : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private cookieService: CookieService) { }
  onSubmit(): void{
    const user: User = {
      name    : this.userForm.value.name,
      email   : this.userForm.value.email,
      password: this.userForm.value.password,
  };

    this.userService.post({
      email: user.email,
      password: user.password});
  }




}
