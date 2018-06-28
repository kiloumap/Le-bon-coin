import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleHomeComponent} from "../article/article-home/article-home.component";

const routes: Routes = [
  { path: '',                   component: ArticleHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
