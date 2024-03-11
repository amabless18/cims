import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';

type Tabs =
  | 'kt_table_widget_8_tab_1'
  | 'kt_table_widget_8_tab_2'
  | 'kt_table_widget_8_tab_3';

@Component({
  selector: 'app-tables-widget8',
  templateUrl: './tables-widget8.component.html',
})
export class TablesWidget8Component implements OnInit {
  user$: Observable<UserType>;
  constructor(private auth: AuthService,) {}

  activeTab: Tabs = 'kt_table_widget_8_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }
}
