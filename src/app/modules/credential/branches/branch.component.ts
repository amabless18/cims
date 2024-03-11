import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CreateOrEditBranchComponent } from './createoreditbranch.component';
import { EditBranchComponent } from './editbranch.component';



@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
})
export class BranchComponent {
  branchs: any[] = [];
  branch: any[] = [];
  id:any;
  showCreateButton: boolean = true;
  showOtherButton: boolean = true;
  nameFilter = '';
  data: any[] = [];
  filter: string = '';
  selectedRole: string = '';
  selectedCourse: string = '';
  filterOptions = { roles: '', course: '' };
  searchTerm = '';
  constructor(
    private dataService:DataService, 
    private cdr:ChangeDetectorRef,
    private modalService: NgbModal,
    private router: Router, ) {


  }

  ngOnInit(): void{
    this.getAll();
    // Refresh data every 5 seconds (adjust the interval as needed)
    interval(5000)
      .pipe(
        startWith(0), // emit first value immediately
        switchMap(() => this.dataService.getBranches())
      )
      .subscribe((res) => {
        this.branchs = res;
        //console.log(res);
        this.cdr.detectChanges();
      });
  }



  getAll(){
    this.dataService.getBranches().subscribe((res) => {
      //console.log(res)
      this.branchs = res;
      this.cdr.detectChanges();
    });
  }


 

  openCreateOrEditModal() {
    const modalRef = this.modalService.open(CreateOrEditBranchComponent, {
      size: 'xl'
    });
  }

  openEditView(id: any) {
    this.router.navigate(['/crafted/pages/credentials/branches', id]);
    
  }

  openViewModal() {
    const modalRef = this.modalService.open(EditBranchComponent, {
      size: 'xl'
      
    });
  }

  deleteData(id: any) {
    if (confirm("Are you sure you want to delete this item?")) {
      this.dataService.deleteBranch(id).subscribe((res) =>{
        this.getAll();
        this.cdr.detectChanges();
      });
    } else {
      // Do nothing if the user cancels the deletion
    }
  }

  
  

  

}

