import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/modules/service/data.service';
import { Social } from 'src/app/social';

@Component({
  selector: 'app-createoredit-social',
  templateUrl: './createoredit-social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class CreateOrEditSocialComponent implements OnInit {
  socials = new Social();
  constructor(
    private dataService:DataService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {

  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Check if the file type is either PNG or JPEG
      if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.socials.media = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        console.error('Unsupported file type. Please choose a PNG, JPEG, or JPG file.');
        // You might want to handle this error case or provide feedback to the user.
      }
    }
  }
  
  
    removeImage(): void {
      this.socials.media = null;
    }

  InsertData(){
    this.dataService.insertSocialData(this.socials).subscribe((res) => {
    });
    this.modalService.dismissAll();
  }

  close(){
    this.modalService.dismissAll();
  }
}