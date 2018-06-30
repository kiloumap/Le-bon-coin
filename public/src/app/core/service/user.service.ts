import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { User }           from "../../model/user.model";
import { Observable }     from "rxjs/internal/Observable";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class UserService {
  private url = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient, private router: Router,private cookieService: CookieService ) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  get(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  post(user: any): Observable<User> {
    if(typeof User === user)
      return this.http.post<User>(this.url, user);
    else{
      return this.http.post<String>(this.url+'/login',
        { email: user.email,
          password: user.password}).subscribe(
        response => {
          const token = response.token;
          this.cookieService.set( 'session', token );
          this.router.navigate(['/']);
        });
    }
  }

  patch(id: string, user: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.url}/${id}`, user);
  }

  delete(id: string): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`);
  }
}
