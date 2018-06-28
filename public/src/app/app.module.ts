import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ArticleHomeComponent} from "./article/article-home/article-home.component";
import {ArticleCreateComponent} from "./article/article-create/article-create.component";
import {ArticleDetailsComponent} from "./article/article-details/article-details.component";
import {ArticleModifyComponent} from "./article/article-modify/article-modify.component";
import {UserDashboardComponent} from "./user/user-dashboard/user-dashboard.component";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {ArticleModule} from "./article/article.module";
import {UserModule} from "./user/user.module";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./routing.module";

@NgModule({
  declarations: [
    UserRegisterComponent,
    UserLoginComponent,
    UserDashboardComponent,

    ArticleModifyComponent,
    ArticleDetailsComponent,
    ArticleCreateComponent,
    ArticleHomeComponent,

    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
