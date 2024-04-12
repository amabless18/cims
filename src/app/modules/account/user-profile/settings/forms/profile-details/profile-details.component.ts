import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';
import { DataService } from 'src/app/modules/service/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
})
export class ProfileDetailsComponent implements OnInit {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  user$: Observable<UserType>;
  user:any;
  users = new User();
  id:any;
  disable = false;
  private unsubscribe: Subscription[] = [];

  constructor(private cdr: ChangeDetectorRef, 
    private auth: AuthService,
    private dataService:DataService,
    private route: ActivatedRoute,
    private router: Router,) {
    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
  }

  ngOnInit(): void {
    this.getAll(this.user$);
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  updateUser() {
    // Display a confirmation dialog before updating user data
    const confirmed = confirm('Are you sure you want to save changes?');
  
    // Proceed with updating user data if user confirms
    if (confirmed) {
      this.dataService.updateUserData(this.id, this.users).subscribe((res) => {
        // Handle success response if needed
      });
  
      // Navigate to the dashboard after updating user data
      this.router.navigate(['/dashboard']);
    }
  }
  

  getAll(user$: Observable<UserType>) {
    user$.subscribe((user) => {
      if(user) {
        this.dataService.getUserDatabyId(user.id).subscribe((res) => {
          // console.log(res)
          this.user = res;
          this.users = this.user;
          this.cdr.detectChanges();
        });
      }
    });
  }
  

  saveSettings() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
