import { Component } from '@angular/core';
import { AuthService, UserType } from '../../auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  user$: Observable<UserType>;
  constructor(
    private auth: AuthService,    
  ) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }
}
