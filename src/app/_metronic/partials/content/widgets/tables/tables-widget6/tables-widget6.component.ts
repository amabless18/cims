import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserModel, UserType } from 'src/app/modules/auth';
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
  user: any;
  student: any[];
  students: any[] = [];
  id: any
  user$: Observable<UserType>;
  constructor(
    private auth: AuthService,
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
  ) { }

  activeTab: Tabs = 'kt_table_widget_6_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {
    this.auth.currentUserSubject.subscribe(user => {
      if (user && user.id) {
        const userId = user.id;
  
        // Fetch student relationship data for the logged-in user
        this.dataService.getStudentRelationship(userId).subscribe(
          data => {
            console.log('Data:', data); // Log the entire data object
            this.students = data.student;
            this.cdr.detectChanges();
            console.log(this.students);
          },
          error => {
            console.error('Error fetching student relationship data:', error);
          }
        );
      }
    });
  }
}
