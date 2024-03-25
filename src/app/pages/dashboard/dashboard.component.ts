import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, interval } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';
import { DataService } from 'src/app/modules/service/data.service';
import { Social } from 'src/app/social';
import { SocialComponent } from '../social/social.component';
import { CreateOrEditSocialComponent } from '../social/createoredit-social.component';
import { map, startWith, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent  implements OnInit {
  user$: Observable<UserType>;
  socials = new Social();
  social:any;
  coachFullName: any;
  
  constructor(
    private auth: AuthService,
    private dataService:DataService, 
    private cdr:ChangeDetectorRef,
    private modalService: NgbModal,

  ) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    this.getAll();
    this.getCoach();
    interval(5000)
      .pipe(
        startWith(0), // emit first value immediately
        switchMap(() => this.dataService.getSocialData())
      )
      .subscribe((res) => {
        this.social = res;
        //this.coachFullName = this.getCoachFullName(res.coach_id);
        this.cdr.detectChanges();
      });
  }

  createPost(){
    const modalRef = this.modalService.open(CreateOrEditSocialComponent, {
      size: 'xl'
    });
  }

  getAll(){
    this.dataService.getSocialData().subscribe((res) => {
      console.log(res)
      this.social = res;
      this.cdr.detectChanges();
    });
  }

  getCoach() {
    this.user$.subscribe((_user) => {
      if (_user && _user.coach_id) {
        this.getCoachFullName(_user.coach_id).subscribe((coachFullName) => {
          this.coachFullName = coachFullName;
          //console.log('Coach Full Name:', this.coachFullName);
          // Now you can do whatever you want with the coachFullName, like storing it in a variable to use in the template
          this.cdr.detectChanges();
        });
      }
    });
  }

  getCoachFullName(coachId: any): Observable<any> {
    return this.dataService.getUserDatabyId(coachId).pipe(
      tap((userData: any) => {
        //console.log('User Data:', userData);
      }),
      map((userData: any) => {
        if (userData && userData.firstname && userData.lastname) {
          return userData.firstname + ' ' + userData.middlename + ' ' + userData.lastname;
        } else {
          return 'Coach'; // Default to 'Coach' if full name is not available
        }
      })
    );
  }
  
  
}
