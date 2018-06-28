import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../core/service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: any;
  constructor(private data: ArticleService) { }

  ngOnInit() {
    this.data.get.subscribe( res => {
      this.articles = res;
    });
  }

}
