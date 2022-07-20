import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogResolver } from '@core/guards/blog.resolver';

export enum ROUTE_PATH {
  NONE = '',
  BLOG = 'blog'
}

const routes: Routes = [
  {
    path: ROUTE_PATH.NONE,
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule)
  },
  {
    path: ROUTE_PATH.BLOG,
    loadChildren: () => import('./features/blog/blog.module').then(b => b.BlogModule),
    resolve: { posts: BlogResolver }
  },
  { path: '**', redirectTo: ROUTE_PATH.NONE }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
