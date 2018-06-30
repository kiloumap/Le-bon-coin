import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { Article }        from "../../model/article.model";
import { SocketService }  from './socket.service';
import { Observable }     from "rxjs/internal/Observable";

@Injectable()
export class ArticleService {
  private url = 'http://localhost:3000/api/article';

  ArticleCreated: Observable<Article>;
  ArticleSaved: Observable<Article>;
  ArticleDeleted: Observable<Article>;

  constructor(private http: HttpClient,
              private socketService: SocketService) {
    this.ArticleCreated = this.socketService.listen('ArticleCreated');
    this.ArticleSaved   = this.socketService.listen('ArticleSaved');
    this.ArticleDeleted = this.socketService.listen('ArticleDeleted');
  }

  getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }

  get(title: string): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${title}`);
  }

  post(article: Article): Observable<Article> {
    return this.http.post<Article>(this.url, article);
  }

  patch(id: string, article: Partial<Article>): Observable<Article> {
    return this.http.patch<Article>('${this.url}/${id}', article);
  }

  delete(id: string): Observable<Article> {
    return this.http.delete<Article>('${this.url}/${id}');
  }
}
