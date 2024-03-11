import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Course } from 'src/app/course';

@Component({
  selector: 'create-or-edit-course',
  templateUrl: './createoreditcourse.component.html',
})
export class CreateOrEditCourseComponent {
  course: any;
  courses = new Course();
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];
  constructor(
    private dataService: DataService,
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef
  ) {
    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
  }

  ngOnInit(): void {}

  InsertData() {
    this.dataService.createCourse(this.courses).subscribe((res) => {});
    this.modalService.dismissAll();
  }

  close() {
    this.modalService.dismissAll();
  }

  saveSettings() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
  }
}
