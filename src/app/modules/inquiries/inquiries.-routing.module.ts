import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { EmploymentComponent } from './employment/employment.component';
import { InquiriesComponent } from './inquiries.component';

const routes: Routes = [
  //{ path: 'drums/:id', component: EditDrumsComponent },
  //{ path: 'guitar/:id', component: EditGuitarComponent },
  {
    path: '',
    component: InquiriesComponent,
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
        path: 'employment',
        component:EmploymentComponent,
      },
      {
        path: 'enrollment',
        component:EnrollmentComponent,
      },
      {
        path: 'enrollment/:id',
        component:EnrollmentComponent,
      },
      {
        path: 'employment',
        component:EmploymentComponent,
      },
      {
        path: 'employment/:id',
        component:EmploymentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InquiriesRoutingModule { }
