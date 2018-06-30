import { SimpleChanges,Component,EventEmitter,Input,OnChanges,OnInit,Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from "../../user/user-interface";
import { Article } from '../article-interface';
import {ArticleService} from "../../core/service/article.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector   : 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls  : ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit, OnChanges {

  articleUser: User[] = [];
  articleImage        = '';

  @Input() article: Article | null;
  @Input() user: User[];

  @Output() ArticleCreated = new EventEmitter<Article>();
  @Output() ArticleSaved = new EventEmitter<{
    id: string;
    article: Partial<Article>;
  }>();

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {}
  initialArticle: any;

  ngOnInit(): void {
    const title = (this.route.snapshot.paramMap.get('title'));
    if (title){
      this.articleService.get(title).subscribe(res =>{
        this.initialArticle = res;
      });
      this.initialArticle.image = atob(this.article.image);
    }else{
      this.initialArticle = false;
    }
  }
  articleForm     = new FormGroup({
    title         : new FormControl('', Validators.required),
    description   : new FormControl('', Validators.required),
    price         : new FormControl('', Validators.required),
    localisation  : new FormControl('', Validators.required)
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['article']) {
      if (this.article) {
        this.articleForm.patchValue(this.article);
        this.articleUser        = this.article.user;
      }
    }
    console.log(this.articleForm);
  }

  onSubmit(): void {
    const article: Article = {
      title:        this.articleForm.value.title,
      localisation: this.articleForm.value.localisation,
      description:  this.articleForm.value.description,
      price:        this.articleForm.value.price,
      image:        this.articleImage,
      user:         []
    };

    this.articleUser = article.user;

    if (this.article) {
      this.ArticleSaved.emit({
        id   : this.article._id,
        article: article
      });
    } else {
      this.ArticleCreated.emit(article);
    }
  }

  onChangeImage(event): void {
    const myReader = new FileReader();
    myReader.onload =this._handleReaderLoaded.bind(this);
    myReader.readAsBinaryString(event.target.files[0]);
    myReader.onloadend = () => {
      this.articleImage = myReader.result;
    };
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.articleImage= btoa(binaryString);
  }
}
