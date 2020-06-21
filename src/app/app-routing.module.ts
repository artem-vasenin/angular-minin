import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './posts/post/post.component';
import {AboutExtraComponent} from './about/about-extra/about-extra.component';
import {ErrorComponent} from './error/error.component';
import {AuthGuard} from './auth.guard';
import {PostResolver} from './posts/post.resolver';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
    {path: 'extra', component: AboutExtraComponent},
  ]},
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {
    path: 'posts/:id',
    component: PostComponent,
    canActivate: [AuthGuard],
  },
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
