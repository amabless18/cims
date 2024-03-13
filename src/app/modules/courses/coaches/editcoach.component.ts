import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Coach } from 'src/app/coach';





@Component({
  selector: 'app-edit-coach',
  templateUrl: './editcoach.component.html',
})
export class EditCoachComponent {
  coach: any;
  coaches = new Coach();
  coachForm: FormGroup;
  @Input() coachData: any;
  id:any
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];
  constructor(
    private dataService:DataService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router, ) {
      const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);

  }

  ngOnInit(): void{
    this.id = this.route.snapshot.params.id;
    this.getAll();
    // Refresh data every 5 seconds (adjust the interval as needed)
    interval(2000)
      .pipe(
        startWith(0), // emit first value immediately
        switchMap(() => this.dataService.getCoaches())
      )
      .subscribe((res) => {
        this.coach = res;
        this.cdr.detectChanges();
      });
  }

  updateCoach(){
    this.dataService.updateCoach(this.id, this.coaches).subscribe((res) => {
    });

    this.router.navigate(['/crafted/pages/courses/coaches']);
    
  }

  getAll(){
    this.dataService.getCoach(this.id).subscribe((res) => {
      //console.log(res)
      this.coaches = res;
      this.cdr.detectChanges();
    });
  }

  formatDate(date: any): string {
    if (!date) return ''; // Handle empty dates gracefully
    return new Date(date).toISOString().slice(0, 10); // Format to YYYY-MM-DD
}

  close(){
    this.router.navigate(['/crafted/pages/courses/coaches']);
  }

 saveSettings(){
  this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
 }
}

