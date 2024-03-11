import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { FormsModule, } from '@angular/forms';
import { StudentComponent } from './student.component';
import { EditStudentComponent } from './editstudent.component';
import { CreateOrEditStudentComponent } from './createoreditstudent.component';



@NgModule({
  declarations: [StudentComponent, EditStudentComponent, CreateOrEditStudentComponent],
  imports: [CommonModule, InlineSVGModule, FormsModule],
})
export class StudentModule {}
