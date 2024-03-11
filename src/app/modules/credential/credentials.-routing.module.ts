import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialsComponent } from './credentials.component';
import { BranchComponent } from './branches/branch.component';
import { EditBranchComponent } from './branches/editbranch.component';
import { CourseComponent } from './courses/course.component';
import { EditCourseComponent } from './courses/editcourse.component';

const routes: Routes = [
  { path: 'branches/:id', component: EditBranchComponent },
  { path: 'courses/:id', component: EditCourseComponent },
  {
    path: '',
    component: CredentialsComponent,
    children: [
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
        path: 'courses',
        component:CourseComponent,
      },
      {
        path: 'branches',
        component:BranchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredentialsRoutingModule { }
