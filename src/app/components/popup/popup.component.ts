import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit {

  @Input() popupMode!: string
  @Input() selectedUserDetails!: any

  @Output() close = new EventEmitter<any>()
  @Output() newUserDetails = new EventEmitter<any>()

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl(''),
    address: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    if (this.popupMode == 'edit') {
      this.userForm.patchValue({
        firstName: this.selectedUserDetails.firstName,
        lastName: this.selectedUserDetails.lastName,
        age: this.selectedUserDetails.age,
        address: this.selectedUserDetails.address
      })
    }
  }

  saveOrAddUser() {
    this.newUserDetails.emit({
      id: this.popupMode == 'edit' ? this.selectedUserDetails.id : 'N/A',
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      age: this.userForm.value.age,
      address: this.userForm.value.address
    })
    this.closePopup()
  }

  closePopup() {
    this.close.emit()
  }
}
