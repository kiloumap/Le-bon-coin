import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserLoginComponent  } from "./user-login/user-login.component";
import { UserRegisterComponent } from "./user-register/user-register.component";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    UserDashboardComponent,
    UserLoginComponent,
    UserRegisterComponent
  ]
})
export class UserModule { }
