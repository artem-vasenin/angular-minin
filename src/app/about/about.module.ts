import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AboutExtraComponent} from './about-extra/about-extra.component';
import {AboutComponent} from './about.component';
import {AuthGuard} from '../auth.guard';

@NgModule({
  declarations: [
    AboutComponent,
    AboutExtraComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AboutComponent, canActivateChild: [AuthGuard], children: [
        {path: 'extra', component: AboutExtraComponent},
      ]},
    ])
  ],
  exports: [
    RouterModule,
  ]
})
export class AboutModule {

}
