import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleHomeComponent} from "./article-home/article-home.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";
import {ArticleCreateComponent} from "./article-create/article-create.component";
import {AppRoutingModule} from "../routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    ArticleHomeComponent,
    ArticleDetailsComponent,
    ArticleCreateComponent,
  ],
  exports: [ArticleHomeComponent]
})
export class ArticleModule { }
