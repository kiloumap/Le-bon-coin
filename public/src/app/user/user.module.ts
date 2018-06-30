import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserLoginComponent  } from "./user-login/user-login.component";
import {AppRoutingModule} from "../routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    UserDashboardComponent,
    UserLoginComponent,
    AppRoutingModule
  ]
})
export class UserModule { }
