import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import {FormsModule} from '@angular/forms';
import {StyleDirective} from './directives/style.directive';
import {PostFilterPipe} from './pipes/post-filter.pipe';
import {AppCounterService} from './services/app-counter.service';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    PostFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    AppCounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
