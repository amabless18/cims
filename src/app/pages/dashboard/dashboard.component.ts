import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, interval } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';
import { DataService } from 'src/app/modules/service/data.service';
import { Social } from 'src/app/social';
import { SocialComponent } from '../social/social.component';
import { CreateOrEditSocialComponent } from '../social/createoredit-social.component';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent  implements OnInit {
  user$: Observable<UserType>;
  socials = new Social();
  social:any;

  constructor(
    private auth: AuthService,
    private dataService:DataService, 
    private cdr:ChangeDetectorRef,
    private modalService: NgbModal,

  ) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    this.getAll();

    interval(5000)
      .pipe(
        startWith(0), // emit first value immediately
        switchMap(() => this.dataService.getSocialData())
      )
      .subscribe((res) => {
        this.social = res;
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
}
