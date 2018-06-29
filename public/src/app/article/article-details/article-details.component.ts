import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../core/service/article.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private articleService: ArticleService ) {}

  article: any;

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    if (title)
      this.articleService.get(title).subscribe(res =>{
        this.article = res;
      });



  }
}
