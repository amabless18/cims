import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { EditCoachComponent } from './editcoach.component';
import { CreateOrEditCoachComponent } from './createoreditcoach.component';



@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
})
export class CoachComponent {
  coaches: any[] = [];
  userId: any;
  coach: any[] = [];
  id:any;
  showCreateButton: boolean = true;
  showOtherButton: boolean = true;
  nameFilter = '';
  data: any[] = [];
  filter: string = '';
  selectedRole: string = '';
  selectedCoach: string = '';
  filterOptions = { roles: '', coach: '' };
  searchTerm = '';
  constructor(
    private dataService:DataService, 
    private cdr:ChangeDetectorRef,
    private modalService: NgbModal,
    private router: Router, ) {
  }

  ngOnInit(): void{
    this.getAll();
    // Refresh data every 5 seconds (adjust the interval as needed)
    interval(5000)
      .pipe(
        startWith(0), // emit first value immediately
        switchMap(() => this.dataService.getCoaches())
      )
      .subscribe((res) => {
        this.coaches = res;
        //console.log(res);
        this.cdr.detectChanges();
      });
  }



  getAll(){
    this.dataService.getCoaches().subscribe((res) => {
      //console.log(res)
      this.coaches = res;
      this.cdr.detectChanges();
    });
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
                #printdisplay{
                  display: none;
                }
              }
            </style>
          </head>
          <body>
            <div>
              <div *ngIf="user$ | async as _user">
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
 

  openCreateOrEditModal() {
    const modalRef = this.modalService.open(CreateOrEditCoachComponent, {
      size: 'xl'
    });
  }

  openEditView(id: any) {
    this.router.navigate(['/crafted/pages/courses/coaches', id]);
    
  }

  openViewModal() {
    const modalRef = this.modalService.open(EditCoachComponent, {
      size: 'xl'
      
    });
  }

  deleteData(id: any,) {
    if (confirm("Are you sure you want to delete this item?")) {
      this.dataService.deleteCoach(id ).subscribe((res) =>{
        this.getAll();
        this.cdr.detectChanges();
      });
    } else {
      // Do nothing if the user cancels the deletion
    }
  }

  
  

  

}

