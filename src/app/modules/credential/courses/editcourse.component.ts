import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from 'src/app/course';





@Component({
  selector: 'app-edit-course',
  templateUrl: './editcourse.component.html',
})
export class EditCourseComponent {
  course: any;
  courses = new Course();
  courseForm: FormGroup;
  @Input() courseData: any;
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
        switchMap(() => this.dataService.getCourses())
      )
      .subscribe((res) => {
        this.course = res;
        this.cdr.detectChanges();
      });
  }

  updateCourse(){
    this.dataService.updateCourse(this.id, this.courses).subscribe((res) => {
    });

    this.router.navigate(['/crafted/pages/credentials/courses']);
    
  }

  getAll(){
    this.dataService.getCourse(this.id).subscribe((res) => {
      console.log(res)
       this.courses = res;
      this.cdr.detectChanges();
    });
  }

  

  close(){
    this.router.navigate(['/crafted/pages/credentials/courses/course']);
  }

 saveSettings(){
  this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
 }
}

