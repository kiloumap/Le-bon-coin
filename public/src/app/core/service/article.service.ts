import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { Article }        from "../../model/article.model";
import { SocketService }  from './socket.service';
import { Observable }     from "rxjs/internal/Observable";

@Injectable()
export class ArticleService {
  private url = 'http://localhost:3000/article';

  articleCreated$: Observable<Article>;
  articleUpdated$: Observable<Article>;
  articleRemoved$: Observable<Article>;

  constructor(private http: HttpClient,
              private socketService: SocketService) {
    this.articleCreated$ = this.socketService.listen('Article Created');
    this.articleUpdated$ = this.socketService.listen('Article Updated');
    this.articleRemoved$ = this.socketService.listen('Article Removed');
  }

  getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }

  get(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${id}`);
  }

  post(article: Article): Observable<Article> {
    return this.http.post<Article>(this.url, article);
  }

  patch(id: string, article: Partial<Article>): Observable<Article> {
    return this.http.patch<Article>(`${this.url}/${id}`, article);
  }

  delete(id: string): Observable<Article> {
    return this.http.delete<Article>(`${this.url}/${id}`);
  }
}
