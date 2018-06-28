import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { User }           from "../../model/user.model";
import { SocketService }  from './socket.service';
import { Observable }     from "rxjs/internal/Observable";

@Injectable()
export class ArticleService {
  private url = 'http://localhost:3000/user';

  articleCreated$: Observable<User>;
  articleUpdated$: Observable<User>;
  articleRemoved$: Observable<User>;

  constructor(private http: HttpClient,
              private socketService: SocketService) {
    this.articleCreated$ = this.socketService.listen('User Created');
    this.articleUpdated$ = this.socketService.listen('User Updated');
    this.articleRemoved$ = this.socketService.listen('User Removed');
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  get(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  post(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  patch(id: string, user: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.url}/${id}`, user);
  }

  delete(id: string): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`);
  }
}
