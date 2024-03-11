import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';

@Component({
  selector: 'app-feeds-widget2',
  templateUrl: './feeds-widget2.component.html',
})
export class FeedsWidget2Component implements OnInit {
  user$: Observable<UserType>;
  constructor(private auth: AuthService,) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }
}
