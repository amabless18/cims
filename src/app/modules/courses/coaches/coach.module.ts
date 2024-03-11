import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { FormsModule, } from '@angular/forms';
import { CoachComponent } from './coach.component';
import { EditCoachComponent } from './editcoach.component';
import { CreateOrEditCoachComponent } from './createoreditcoach.component';



@NgModule({
  declarations: [CoachComponent, EditCoachComponent, CreateOrEditCoachComponent],
  imports: [CommonModule, InlineSVGModule, FormsModule],
})
export class CoachModule {}
