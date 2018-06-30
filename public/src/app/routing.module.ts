import { NgModule }                   from '@angular/core';
import { Routes, RouterModule }       from '@angular/router';
import { ArticleHomeComponent }        from "./article/article-home/article-home.component";
import { ArticleDetailsComponent }      from "./article/article-details/article-details.component";
import { CommonModule }                 from "@angular/common";
import { UserDashboardComponent }       from "./user/user-dashboard/user-dashboard.component";
import { UserLoginComponent }           from "./user/user-login/user-login.component";
import {ArticleFormComponent} from "./article/article-form/article-form.component";

const routes: Routes = [
  {
    path: '',
    component: ArticleHomeComponent
  },
  {
    path: 'home',
    component: ArticleHomeComponent,

  },
  {
    path: 'create',
    component: ArticleFormComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'compte',
    component: UserDashboardComponent
  },
  {
    path: 'article/:title',
    component: ArticleDetailsComponent
  },
  {
    path: 'article/edit/:title',
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
