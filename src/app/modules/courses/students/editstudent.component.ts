import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/student';





@Component({
  selector: 'app-edit-student',
  templateUrl: './editstudent.component.html',
})
export class EditStudentComponent {
  student: any;
  students = new Student();
  studentForm: FormGroup;
  @Input() studentData: any;
  id:any
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];
  constructor(
    private dataService:DataService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router, ) {
      const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);

  }

  ngOnInit(): void{
    this.id = this.route.snapshot.params.id;
    this.getAll();
    // Refresh data every 5 seconds (adjust the interval as needed)
    interval(2000)
      .pipe(
        startWith(0), // emit first value immediately
        switchMap(() => this.dataService.getStudents())
      )
      .subscribe((res) => {
        this.student = res;
        this.cdr.detectChanges();
      });
  }

  updateStudent(){
    this.dataService.updateStudent(this.id, this.students).subscribe((res) => {
    });

    this.router.navigate(['/crafted/pages/courses/students']);
    
  }

  getAll(){
    this.dataService.getStudent(this.id).subscribe((res) => {
      console.log(res)
      this.students = res;
      this.cdr.detectChanges();
    });
  }

  formatDate(date: any): string {
    if (!date) return ''; // Handle empty dates gracefully
    return new Date(date).toISOString().slice(0, 10); // Format to YYYY-MM-DD
}

  close(){
    this.router.navigate(['/crafted/pages/courses/students']);
  }

 saveSettings(){
  this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
 }
}

