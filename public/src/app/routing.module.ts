import { NgModule }                   from '@angular/core';
import { Routes, RouterModule }       from '@angular/router';
import { ArticleHomeComponent }        from "./article/article-home/article-home.component";
import { ArticleDetailsComponent }      from "./article/article-details/article-details.component";
import { CommonModule }                 from "@angular/common";
import { UserRegisterComponent }        from "./user/user-register/user-register.component";
import { UserDashboardComponent }       from "./user/user-dashboard/user-dashboard.component";
import { UserLoginComponent }           from "./user/user-login/user-login.component";
import {ArticleFormComponent} from "./article/article-form/article-form.component";


const routes: Routes = [
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'compte',
    component: UserDashboardComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: '',
    component: ArticleHomeComponent
  },
  {
    path: 'article/:title',
    component: ArticleDetailsComponent
  },
  {
    path: 'article/edit/:title',
    component: ArticleFormComponent
  },
  {
    path: 'create',
    component: ArticleFormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
