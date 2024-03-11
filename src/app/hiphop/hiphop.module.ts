import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { EditHiphopComponent } from '../modules/courses/coach/editcoach.component';
import { CreateOrEditHiphopComponent } from '../modules/courses/coach/createoreditcoach.component';



@NgModule({
  declarations: [EditHiphopComponent, CreateOrEditHiphopComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule
  ]
})
export class HiphopModule { }
