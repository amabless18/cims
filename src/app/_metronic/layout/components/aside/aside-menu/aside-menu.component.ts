import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent implements OnInit {
  user$: Observable<UserType>;
  appAngularVersion: string = environment.appVersion;
  appPreviewChangelogUrl: string = environment.appPreviewChangelogUrl;

  constructor(
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }
}

