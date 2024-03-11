import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Branch } from 'src/app/branch';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subscription } from 'rxjs';





@Component({
  selector: 'create-or-edit-branch',
  templateUrl: './createoreditbranch.component.html',
})
export class CreateOrEditBranchComponent {

  branch: any;
  branchs = new Branch();
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
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

  




  

  InsertData(){
    this.dataService.createBranch(this.branchs).subscribe((res) => {
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

