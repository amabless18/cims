import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CreateOrEditCourseComponent } from './createoreditcourse.component';
import { EditCourseComponent } from './editcourse.component';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
})
export class CourseComponent {
  courses: any[] = [];
  course: any[] = [];
  id:any;
  showCreateButton: boolean = true;
  showOtherButton: boolean = true;
  nameFilter = '';
  data: any[] = [];
  filter: string = '';
  selectedRole: string = '';
  selectedCourse: string = '';
  filterOptions = { roles: '', course: '' };
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
        switchMap(() => this.dataService.getCourses())
      )
      .subscribe((res) => {
        this.courses = res;
        //console.log(res);
        this.cdr.detectChanges();
      });
  }



  getAll(){
    this.dataService.getCourses().subscribe((res) => {
      //console.log(res)
      this.courses = res;
      this.cdr.detectChanges();
    });
  }


 

  openCreateOrEditModal() {
    const modalRef = this.modalService.open(CreateOrEditCourseComponent, {
      size: 'xl'
    });
  }

  openEditView(id: any) {
    this.router.navigate(['/crafted/pages/credentials/courses', id]);
    
  }

  openViewModal() {
    const modalRef = this.modalService.open(EditCourseComponent, {
      size: 'xl'
      
    });
  }

  deleteData(id: any) {
    if (confirm("Are you sure you want to delete this item?")) {
      this.dataService.deleteCourse(id).subscribe((res) =>{
        this.getAll();
        this.cdr.detectChanges();
      });
    } else {
      // Do nothing if the user cancels the deletion
    }
  }

  
  

  

}

