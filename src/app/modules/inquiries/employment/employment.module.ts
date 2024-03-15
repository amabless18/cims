import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { EmploymentComponent } from './employment.component';



@NgModule({
  declarations: [EmploymentComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmploymentModule { }
