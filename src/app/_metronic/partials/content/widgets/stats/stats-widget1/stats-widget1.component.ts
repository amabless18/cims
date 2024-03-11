import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';

@Component({
  selector: 'app-stats-widget1',
  templateUrl: './stats-widget1.component.html',
})
export class StatsWidget1Component {
  user$: Observable<UserType>;
  constructor(private auth: AuthService,) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }
}
