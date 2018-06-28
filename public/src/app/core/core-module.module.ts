import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './service/article.service';
import { UserService } from './service/user.service';
import { SocketService } from './service/socket.service';

@NgModule({
  imports: [CommonModule],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        SocketService,
        ArticleService,
        UserService,
      ]
    };
  }
}
