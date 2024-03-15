import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { StudentComponent } from './students/student.component';
import { EditStudentComponent } from './students/editstudent.component';
import { CoachComponent } from './coaches/coach.component';
import { EditCoachComponent } from './coaches/editcoach.component';

const routes: Routes = [
  { path: 'students/:id', component: EditStudentComponent },
  { path: 'coaches/:id', component: EditCoachComponent },
  // { path: 'coaches/:id', component: EditStudentComponent },
  //{ path: 'drums/:id', component: EditDrumsComponent },
  //{ path: 'guitar/:id', component: EditGuitarComponent },
  // { path: 'courses/:id', component: EditCourseListComponent },
  {
    path: '',
    component: CoursesComponent,
    children: [

       {
         path: 'coaches/:id',
         component: CoachComponent,
       },
      // {
      //   path: 'drums',
      //   component: DrumsComponent,
      // },
      // {
      //   path: 'guitar',
      //   component: GuitarComponent,
      // },
      // {
      //   path: 'keyboard',
      //   component: KeyboardComponent,
      // },
       {
        path: 'evaluation',
        component: EvaluationComponent,
      },
      {
        path: 'course',
        component: CoursesComponent,
      },
      {
        path: 'coaches',
        component: CoachComponent,
      },
      {
        path: 'students',
        component: StudentComponent,
      },
      {
        path: 'evaluation/:id/students/:id',
        component:EvaluationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule { }
