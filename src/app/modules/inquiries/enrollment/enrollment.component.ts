import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { DataService } from '../../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss'],
})
export class EnrollmentComponent implements OnInit {
  isLoading = false;
  users = new User();
  user: any;
  saved: boolean;
  appointmentNumber: string;
  id: any;
  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getAll();

    interval(2000)
      .pipe(
        startWith(0), // emit first value immediately
        switchMap(() => this.dataService.getUsers())
      )
      .subscribe((res) => {
        console.log(res);
        //this.user = res;
        this.cdr.detectChanges();
      });
  }


  getAll() {
    this.dataService.getUserAppointment(this.id).subscribe((res) => {
      console.log(res)
      this.users = res;
      this.cdr.detectChanges();
    });
    this.cdr.detectChanges();
  }



  search() {
    if (this.appointmentNumber) {
      // Navigate to the user/enrollment/:number route
      this.router.navigate(['/cims/crafted/pages/inquiries/enrollment', this.appointmentNumber])
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
