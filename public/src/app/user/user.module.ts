import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserLoginComponent  } from "./user-login/user-login.component";
import { UserRegisterComponent } from "./user-register/user-register.component";
import {AppRoutingModule} from "../routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    UserDashboardComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AppRoutingModule
  ]
})
export class UserModule { }
