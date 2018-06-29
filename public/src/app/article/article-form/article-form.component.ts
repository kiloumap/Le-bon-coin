import { SimpleChanges,Component,EventEmitter,Input,OnChanges,OnInit,Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from "../../user/user-interface";
import { Article } from '../article-interface';
@Component({
  selector   : 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls  : ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit, OnChanges {
  articleForm     = new FormGroup({
    title         : new FormControl('', Validators.required),
    description   : new FormControl('', Validators.required),
    price         : new FormControl(10, Validators.required),
    localisation  : new FormControl(5, Validators.required) // pattern="^[a-z0-9_-]{8,15}$"
  });

  articleUser: User[] = [];
  articleImage        = '';

  @Input() article: Article | null;
  @Input() user: User[];

  @Output() ArticleCreated = new EventEmitter<Article>();
  @Output() ArticleSaved = new EventEmitter<{
    id: string;
    article: Partial<Article>;
  }>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['article']) {
      if (this.article) {
        //this.articleForm.patchValue(this.article);
        this.articleUser        = this.article.user;
        this.articleImage       = this.article.image;
      }
    }
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

    myReader.readAsDataURL(event.target.files[0]);

    myReader.onloadend = () => {
      this.articleImage = myReader.result;
    };
  }
}
