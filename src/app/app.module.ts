import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PostFormComponent} from './post-form/post-form.component';
import {PostComponent} from './post/post.component';
import {StyleDirective} from './directives/style.directive';
import {PostFilterPipe} from './pipes/post-filter.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {AppRoutingModule} from './app-routing.module';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    PostFilterPipe,
    HomeComponent,
    AboutComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
