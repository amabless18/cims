import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from '../account/account.component';
import { DropdownMenusModule, WidgetsModule } from '../../_metronic/partials';
import { UserComponent } from './user/user.component';
import { UserModule } from 'src/app/user/user.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserProfileRoutingModule } from './user-profile/user-profile-routing.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './user/filter.pipe';
import { SearchPipe } from './user/search.pipe';

@NgModule({
  declarations: [
    AccountComponent,
    UserComponent,
    UserProfileComponent,
    FilterPipe,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    UserProfileRoutingModule,
    InlineSVGModule,
    DropdownMenusModule,
    WidgetsModule,
    UserModule,
    UserProfileModule,
    FormsModule,
  ],
})
export class AccountModule {}
