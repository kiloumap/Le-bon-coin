import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../../model/user.model";
import {ArticleService} from "../../core/service/article.service";
import {UserService} from "../../core/service/user.service";
import { Router } from '@angular/router';
import {Article} from "../../model/article.model";
@Component({
  selector: 'app-article-home',
  templateUrl: './article-home.component.html',
  styleUrls: ['./article-home.component.css']
})
export class ArticleHomeComponent implements OnInit{

  constructor( private router: Router, private articleService: ArticleService, private userService: UserService) {}

  articles: any;
  users: Observable<User>;

  ngOnInit(): void {
    this.articleService.getAll().subscribe( res => {
      this.articles = res;
    });
  }

  selectedArticle: Article[] = [];

  @Input() Article: Article[];

  @Output() ArticleSaved = new EventEmitter<void>();
  @Output() ArticleCreated = new EventEmitter<Article>();
  @Output() ArticleDeleted = new EventEmitter<Article | Article[]>();

  emit(event) {
    switch (event) {
      case 'ArticleSaved':
        this.ArticleSaved.emit();
        break;
      case 'ArticleCreated':
        this.ArticleCreated.emit(this.selectedArticle[0]);
        break;
      case 'ArticleDeleted':
        this.ArticleDeleted.emit(this.selectedArticle);
        break;
    }
  }
}
