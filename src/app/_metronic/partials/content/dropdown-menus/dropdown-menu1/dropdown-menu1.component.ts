import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu1',
  templateUrl: './dropdown-menu1.component.html',
})
export class DropdownMenu1Component implements OnInit {
  @Output() roleSelected = new EventEmitter<string>();
  selectedRole: any | null = null;
  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown w-250px w-md-300px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  constructor() {}

  ngOnInit(): void {}

  onSelectRole() {
    const selectedRole = this.selectedRole || null;
    this.roleSelected.emit(selectedRole || '');  
  }
}
