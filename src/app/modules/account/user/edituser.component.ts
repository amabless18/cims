import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { User } from 'src/app/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, UserType } from '../../auth';





@Component({
  selector: 'app-edit-user',
  templateUrl: './edituser.component.html',
})
export class EditUserComponent {
  user: any;
  users = new User();
  userForm: FormGroup;
  @Input() userData: any;
  id:any
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];
  user$: Observable<UserType>;
  constructor(
    private dataService:DataService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService, ) {
      const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);

  }

  ngOnInit(): void{
    this.id = this.route.snapshot.params.id;
    this.getAll();
    this.user$ = this.auth.currentUserSubject.asObservable();
    // Refresh data every 5 seconds (adjust the interval as needed)
    interval(2000)
      .pipe(
        startWith(0), // emit first value immediately
        switchMap(() => this.dataService.getUserData())
      )
      .subscribe((res) => {
        this.user = res;
        this.cdr.detectChanges();
      });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Check if the file type is either PNG or JPEG
      if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.users.pic = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        console.error('Unsupported file type. Please choose a PNG, JPEG, or JPG file.');
        // You might want to handle this error case or provide feedback to the user.
      }
    }
  }
  
  
    removeImage(): void {
      this.users.pic = null;
    }

  updateUser(){
    this.dataService.updateUserData(this.id, this.users).subscribe((res) => {
    });

    this.router.navigate(['/crafted/account/user']);
    
  }

  getAll(){
    this.dataService.getUserDatabyId(this.id).subscribe((res) => {
      //console.log(res)
      this.user = res;
      this.users = this.user;
      this.cdr.detectChanges();
    });
  }

  openCoachView(id: any) {
    this.router.navigate(['/crafted/account/user', id, 'students']);
    
  }

  close(){
    this.router.navigate(['/crafted/account/user']);
  }

 saveSettings(){
  this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
 }
}

