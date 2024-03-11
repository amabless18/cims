import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';
import { CreateOrEditSocialComponent } from './createoredit-social.component';
import { Social } from 'src/app/social';
import { DataService } from 'src/app/modules/service/data.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  socials = new Social();
  social:any;
  user$: Observable<UserType>;
  constructor(
    private auth: AuthService,
    private dataService:DataService, 
    private cdr:ChangeDetectorRef,
    private modalService: NgbModal,
  ) { }
  

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();

    this.getAll();

    // Refresh data every 5 seconds (adjust the interval as needed)
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

  getAll(){
    this.dataService.getSocialData().subscribe((res) => {
      console.log(res)
      this.social = res;
      this.cdr.detectChanges();
    });
  }


  createPost(){
    const modalRef = this.modalService.open(CreateOrEditSocialComponent, {
      size: 'xl'
    });
  }

}
