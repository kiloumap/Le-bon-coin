import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from "../../model/article.model";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {ArticleService} from "../../core/service/article.service";

@Component({
  selector: 'app-article-home',
  templateUrl: './article-home.component.html',
  styleUrls: ['./article-home.component.css']
})
export class ArticleHomeComponent {
  constructor( /*private data: ArticleService */) {}
}
