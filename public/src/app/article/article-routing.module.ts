import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleHomeComponent} from "./article-home/article-home.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";
import {AppRoutingModule} from "../routing.module";

const routes: Routes = [{
    path: '/article',
    component: ArticleDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes),AppRoutingModule],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
