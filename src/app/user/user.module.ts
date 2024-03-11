import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrEditUserComponent } from '../modules/account/user/createoredituser.component';
import { ViewUserComponent } from '../modules/account/user/viewuser.component';
import { EditUserComponent } from '../modules/account/user/edituser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';



@NgModule({
  declarations: [CreateOrEditUserComponent,ViewUserComponent,EditUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule
  ]
})
export class UserModule { }
