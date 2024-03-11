import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { EditStudentComponent } from './editstudent.component';
import { CreateOrEditStudentComponent } from './createoreditstudent.component';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent {
  students: any[] = [];
  userId: any;
  student: any[] = [];
  id:any;
  showCreateButton: boolean = true;
  showOtherButton: boolean = true;
  nameFilter = '';
  data: any[] = [];
  filter: string = '';
  selectedRole: string = '';
  selectedStudent: string = '';
  filterOptions = { roles: '', student: '' };
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
        switchMap(() => this.dataService.getStudents())
      )
      .subscribe((res) => {
        this.students = res;
        //console.log(res);
        this.cdr.detectChanges();
      });
  }



  getAll(){
    this.dataService.getStudents().subscribe((res) => {
      //console.log(res)
      this.students = res;
      this.cdr.detectChanges();
    });
  }


 

  openCreateOrEditModal() {
    const modalRef = this.modalService.open(CreateOrEditStudentComponent, {
      size: 'xl'
    });
  }

  openEditView(id: any) {
    this.router.navigate(['/crafted/pages/courses/students', id]);
    
  }

  openViewModal() {
    const modalRef = this.modalService.open(EditStudentComponent, {
      size: 'xl'
      
    });
  }

  deleteData(id: any,) {
    if (confirm("Are you sure you want to delete this item?")) {
      this.dataService.deleteStudent(id ).subscribe((res) =>{
        this.getAll();
        this.cdr.detectChanges();
      });
    } else {
      // Do nothing if the user cancels the deletion
    }
  }

  
  

  

}

