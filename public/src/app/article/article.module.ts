import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleHomeComponent} from "./article-home/article-home.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";
import {AppRoutingModule} from "../routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    ArticleHomeComponent,
    ArticleDetailsComponent,
  ],
  exports: [ArticleHomeComponent]
})
export class ArticleModule { }
