import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { BranchComponent } from './branch.component';
import { FormsModule, } from '@angular/forms';
import { EditBranchComponent } from './editbranch.component';
import { CreateOrEditBranchComponent } from './createoreditbranch.component';


@NgModule({
  declarations: [BranchComponent, EditBranchComponent, CreateOrEditBranchComponent],
  imports: [CommonModule, InlineSVGModule, FormsModule],
})
export class BranchModule {}
