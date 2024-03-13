import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentComponent } from './enrollment.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EnrollmentComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EnrollmentModule { }
