import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InquiriesRoutingModule } from './inquiries.-routing.module';
import { InquiriesComponent } from './inquiries.component';
import { EmploymentModule } from './employment/employment.module';
import { EnrollmentModule } from './enrollment/enrollment.module';

@NgModule({
  declarations: [InquiriesComponent],
  imports: [
    CommonModule,
    InquiriesRoutingModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    EmploymentModule,
    EnrollmentModule,
    NgbModule,
  ],
})
export class InquiriesModule {}
