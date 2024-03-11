import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SocialComponent } from './social.component';
import { WidgetsModule } from '../../_metronic/partials';
import { InlineSVGModule } from 'ng-inline-svg';
import { CreateOrEditSocialComponent } from './createoredit-social.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SocialComponent, CreateOrEditSocialComponent],
  imports: [
    CommonModule,
    InlineSVGModule,
    RouterModule.forChild([
      {
        path: '',
        component: SocialComponent,
      },
    ]),
    WidgetsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SocialModule {}
