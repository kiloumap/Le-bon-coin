import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {ArticleHomeComponent} from "./article/article-home/article-home.component";
import {ArticleDetailsComponent} from "./article/article-details/article-details.component";
import {UserDashboardComponent} from "./user/user-dashboard/user-dashboard.component";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./routing.module";
import {UserService} from "./core/service/user.service";
import {ArticleService} from "./core/service/article.service";
import {SocketService} from "./core/service/socket.service";
import {ArticleFormComponent} from "./article/article-form/article-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {NavbarComponent} from "./core/navbar/navbar.component";

@NgModule({
  declarations: [
    UserLoginComponent,
    UserDashboardComponent,
    ArticleDetailsComponent,
    ArticleHomeComponent,
    ArticleFormComponent,
    NavbarComponent,
    AppComponent

  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    ArticleService,
    UserService,
    SocketService,
    CookieService,

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

