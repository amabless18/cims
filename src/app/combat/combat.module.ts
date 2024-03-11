import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CreateOrEditCombatComponent } from '../modules/courses/courselist/createoreditcombat.component';
import { ViewCombatComponent } from '../modules/courses/courselist/viewcourselist.component';
import { EditCombatComponent } from '../modules/courses/courselist/editcourselist.component';



@NgModule({
  declarations: [CreateOrEditCombatComponent, ViewCombatComponent, EditCombatComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule
  ]
})
export class CombatModule { }
