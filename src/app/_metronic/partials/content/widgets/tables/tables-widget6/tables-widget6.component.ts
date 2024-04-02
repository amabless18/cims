import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { EditUserComponent } from 'src/app/modules/account/user/edituser.component';
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
  user: any;
  student: any[];
  students: any[] = [];
  id: any
  user$: Observable<UserType>;
  constructor(
    private auth: AuthService,
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
    private modalService: NgbModal,
    private router: Router,
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

  openEditView(id: any) {
    this.router.navigate(['/crafted/account/user', id]);
    
  }

  print() {
    const printContentElement = document.getElementById("printContent");
    if (printContentElement) {
      const printContent = printContentElement.innerHTML;
  
      // Create a hidden iframe
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      const doc = iframe.contentWindow?.document || iframe.contentDocument;
      
      // Set iframe content
      if (doc) {
        doc.open();
        doc.write(
          `
          <html>
          <head>
            <style>
              @media print {
                /* Include your print-specific CSS styles here */
                table {
                  width: 100%;
                  border-collapse: collapse;
                }
                th, td {
                  border: 1px solid black;
                  padding: 8px;
                  text-align: left;
                }
                th {
                  background-color: #f2f2f2;
                }
                button, img, span {
                  display: none;
                }
                .user-icon {
                  display: none;
                }
              }
            </style>
          </head>
          <body>
            <div>
              <div *ngIf="user$ | async as _user">
                <p style="text-align: center;">List of Students</p>
                <p style="text-align: left;">Fullname&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Course&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Level</p> 
                ${printContent}
              </div>
            </div>
            
          </body>
        </html>
      `
        );
        doc.close();
  
        // Wait for iframe to load before printing
        iframe.onload = function() {
          iframe.contentWindow?.focus();
          iframe.contentWindow?.print();
          document.body.removeChild(iframe);
        };
      }
    } else {
      console.error("Element with id 'printContent' not found.");
    }
  }
  


}
