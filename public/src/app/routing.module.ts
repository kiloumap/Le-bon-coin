import { NgModule }                   from '@angular/core';
import { Routes, RouterModule }       from '@angular/router';
import { ArticleHomeComponent}        from "./article/article-home/article-home.component";
import {ArticleRoutingModule}         from "./article/article-routing.module";
import {ArticleDetailsComponent}      from "./article/article-details/article-details.component";
import {CommonModule} from "@angular/common";


const routes: Routes = [
  {
    path: '',
    component: ArticleHomeComponent
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'article',
    component: ArticleDetailsComponent
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
