import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrEditLevel1Component } from '../modules/profile/level1/createoreditlevel1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [CreateOrEditLevel1Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class Level1Module { }
