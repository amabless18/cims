import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { User } from 'src/app/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Router } from '@angular/router';





@Component({
  selector: 'app-view-user',
  templateUrl: './viewuser.component.html',
})
export class ViewUserComponent {
  user: any;
  users = new User();
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];
  constructor(
    private dataService:DataService,
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef,
    private router: Router ) {
      const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);

  }

  ngOnInit(): void{
  }

  InsertData(){
    this.dataService.insertUserData(this.users).subscribe((res) => {
    });
    this.modalService.dismissAll();
  }

  close(){
    this.modalService.dismissAll();
  }

 saveSettings(){
  this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
 }
}

