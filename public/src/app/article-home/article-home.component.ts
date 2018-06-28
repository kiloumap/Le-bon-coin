import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Article} from "../model/article.model";

@Component({
  selector: 'app-article-home',
  templateUrl: './article-home.component.html',
  styleUrls: ['./article-home.component.css']
})
export class ArticleHomeComponent {
  selectedPizzas: Article[] = [];

  @Input() pizzas: Article[];

  @Output() addArticle = new EventEmitter<void>();
  @Output() editArticle = new EventEmitter<Article>();
  @Output() deleteArticle = new EventEmitter<void>();

  emit(eventName) {
    switch (eventName) {
      case 'addArticle':
        this.addArticle.emit();
        break;
      case 'editArticle':
        this.editArticle.emit(this.selectedPizzas[0]);
        break;
      case 'deleteArticle':
        this.deleteArticle.emit();
        break;
    }
  }
}
