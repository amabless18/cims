import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { User } from 'src/app/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subscription } from 'rxjs';





@Component({
  selector: 'create-or-edit-user',
  templateUrl: './createoredituser.component.html',
})
export class CreateOrEditUserComponent {
  userpic = {
    pic: null, // the image URL
  };
  user: any;
  users = new User();
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  $users = { pic: '' };
  private unsubscribe: Subscription[] = [];
  constructor(
    private dataService:DataService,
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef ) {
      const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);

  }

  ngOnInit(): void{
  }

  onFileChange(event: any): void {
  const file = event.target.files[0];
  if (file) {
    // Check if the file type is either PNG or JPEG
    if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.users.pic = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      console.error('Unsupported file type. Please choose a PNG, JPEG, or JPG file.');
      // You might want to handle this error case or provide feedback to the user.
    }
  }
}




  removeImage(): void {
    this.users.pic = null;
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

