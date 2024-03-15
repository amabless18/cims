import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { DataService } from '../../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
})
export class EvaluationComponent implements OnInit {
  isLoading = false;
  users = new User();
  user: any;
  saved: boolean;
  coachNumber: string;
  studentNumber: string;
  id: any;
  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    // interval(2000)
    //   .pipe(
    //     startWith(0), // emit first value immediately
    //     switchMap(() => this.dataService.getCoaches())
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //     //this.user = res;
    //     this.cdr.detectChanges();
    //   });
  }


  getAllCoach() {
    this.dataService.getCoach(this.id).subscribe((res) => {
      console.log(res)
      this.users = res;
      this.cdr.detectChanges();
    });
    this.cdr.detectChanges();
  }

  getAllStudent() {
    this.dataService.getStudent(this.id).subscribe((res) => {
      console.log(res)
      this.users = res;
      this.cdr.detectChanges();
    });
    this.cdr.detectChanges();
  }

  deleteData(id: any) {
    this.dataService.deleteStudent(id).subscribe((res) =>{
      this.getAllCoach();
      this.cdr.detectChanges();
    });
  }



  search() {
    if (this.coachNumber && this.studentNumber) {
      this.router.navigate(['/crafted/pages/courses/evaluation/', this.coachNumber, 'students', this.studentNumber ])
      .then(() => {
        window.location.reload();
      });
    } 
    
  }

  



  updateData() {
    if (confirm('Are you sure you want to enroll this user?')) {
      // Proceed with updating data
      this.dataService.updateUserAppointment(this.id, this.users).subscribe((res) => {
        // Handle success or any further actions after updating data
        alert('User successfully enrolled!');
      });
    } else {
      // Cancel enrollment
      console.log('Enrollment cancelled.');
    }
  }
  
}
