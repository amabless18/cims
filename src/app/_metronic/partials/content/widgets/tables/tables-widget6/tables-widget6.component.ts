import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';
import { DataService } from 'src/app/modules/service/data.service';

type Tabs =
  | 'kt_table_widget_6_tab_1'
  | 'kt_table_widget_6_tab_2'
  | 'kt_table_widget_6_tab_3';

@Component({
  selector: 'app-tables-widget6',
  templateUrl: './tables-widget6.component.html',
})
export class TablesWidget6Component implements OnInit {
  students: any;
  user$: Observable<UserType>;
  constructor(private auth: AuthService, private dataService: DataService, private cdr: ChangeDetectorRef) {}

  activeTab: Tabs = 'kt_table_widget_6_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    this.user$.subscribe(user => {
      if (user && user.id) {
        this.dataService.getStudentsbyEnrollment(user.id).subscribe(
          userData => {
            console.log('User with students:', userData);
            this.students = userData;
            this.students = Object.values(userData.students);
            this.cdr.detectChanges();
          },
          error => {
            console.error('Error fetching user data:', error);
          }
        );
      }
    });
  }
}