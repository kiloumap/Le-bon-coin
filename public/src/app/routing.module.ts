import { NgModule }                   from '@angular/core';
import { RouterModule }               from '@angular/router';
import {  ArticleHomeComponent  }     from "./article-home/article-home.component";

const modulesLocation = 'apps/bobbyzzaiolo-ngrx/src/app';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: ArticleHomeComponent
      },
      {
        path: 'user',
        loadChildren: `${modulesLocation}/admin/admin.module#AdminModule`
      },
      {
        path: 'article',
        loadChildren: `${modulesLocation}/pizzas/pizzas.module#PizzasModule`
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
