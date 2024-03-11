import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CredentialsRoutingModule } from './credentials.-routing.module';
import { CredentialsComponent } from './credentials.component';
import { BranchModule } from './branches/branch.module';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [CredentialsComponent],
  imports: [
    CommonModule,
    CredentialsRoutingModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    CourseModule,
    BranchModule,
    NgbModule,
  ],
})
export class CredentialsModule {}
