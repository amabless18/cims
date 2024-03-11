import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { EditUserComponent } from './user/edituser.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'user/:id', component: EditUserComponent },
  // { path: ':id/students/:id', component: EditStudentComponent },
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
      },
      // {
      //   path: 'user/:id/students',
      //   component: StudentComponent,
      // },
      {
        path: 'user-profile',
        component: UserProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
