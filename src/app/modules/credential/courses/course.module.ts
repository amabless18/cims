import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { FormsModule, } from '@angular/forms';
import { CourseComponent } from './course.component';
import { EditCourseComponent } from './editcourse.component';
import { CreateOrEditCourseComponent } from './createoreditcourse.component';



@NgModule({
  declarations: [CourseComponent, EditCourseComponent, CreateOrEditCourseComponent],
  imports: [CommonModule, InlineSVGModule, FormsModule],
})
export class CourseModule {}
