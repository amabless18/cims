import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { CreateOrEditUserComponent } from './createoredituser.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { EditUserComponent } from './edituser.component';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AuthService, UserType } from '../../auth';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  users: any[] = [];
  user: any[] = [];
  @Input() userRoles: string[] = [];
  @Output() userSelected = new EventEmitter<string>();
  showCreateButton: boolean = true;
  showOtherButton: boolean = true;
  nameFilter = '';
  user$: Observable<UserType>;
  data: any[] = [];
  filter: string = '';
  selectedRole: string = '';
  selectedCourse: string = '';
  filterOptions = { userType: '', course: '' };
  searchTerm = '';
  constructor(
    private dataService:DataService, 
    private cdr:ChangeDetectorRef,
    private modalService: NgbModal,
    private router: Router,
    private http: HttpClient,
    private auth: AuthService, ) {


  }

  ngOnInit(): void{
    this.getAll();
    this.user$ = this.auth.currentUserSubject.asObservable();
    // Refresh data every 5 seconds (adjust the interval as needed)
    interval(5000)
      .pipe(
        startWith(0), // emit first value immediately
        switchMap(() => this.dataService.getUserData())
      )
      .subscribe((res) => {
        this.user = res;
        this.cdr.detectChanges();
      });
  }



  getAll(){
    this.dataService.getUserData().subscribe((res) => {
      console.log(res)
      this.user = res;
      this.cdr.detectChanges();
    });
  }


 

  openCreateOrEditModal() {
    const modalRef = this.modalService.open(CreateOrEditUserComponent, {
      size: 'xl'
    });
  }

  openEditView(id: any) {
    this.router.navigate(['/crafted/account/user', id]);
    
  }

  hasCreatePermission(): boolean {
    // Only show the button for users with the "coach" role
    return this.userRoles.includes('Coach');
  }

  hasOtherPermission(): boolean {
    // Adjust this method based on other roles if needed
    return false; // No other button for this example
  }

  openViewModal() {
    const modalRef = this.modalService.open(EditUserComponent, {
      size: 'xl'
      
    });
  }

  deleteData(id: any) {
    this.dataService.deleteUserData(id).subscribe((res) =>{
      this.getAll();
      this.cdr.detectChanges();
    });
  }

  
  

  

}

