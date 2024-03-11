import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  user$: Observable<UserType>;
  constructor(
    private auth: AuthService,  
  ) {
    
  }

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }
}
