import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { EvaluationModule } from 'src/app/modules/courses/evaluation/evaluation.module';
import { CourseModule } from '../credential/courses/course.module';
import { StudentModule } from './students/student.module';
import { CoachModule } from './coaches/coach.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    EvaluationModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    CourseModule,
    CoachModule,
    StudentModule,
    NgbModule,
  ],
})
export class CoursesModule {}
