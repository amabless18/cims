import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvaluationComponent } from './evaluation.component';
import { InlineSVGModule } from 'ng-inline-svg';



@NgModule({
  declarations: [EvaluationComponent],
  imports: [
    CommonModule,
    FormsModule,
    InlineSVGModule
  ]
})
export class EvaluationModule { }
