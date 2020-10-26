import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  @Output() askToSave = new EventEmitter<UserModel>();
  @Input() user: UserModel;
  userForm: FormGroup;
  firstNameControl: FormControl;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [this.user.id],
      userStatus: [this.user.userStatus],
      username: [this.user.username, [Validators.required]],
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      email: [this.user.email, [Validators.email]],
      address: this.formBuilder.group({
        city: [this.user.address.city],
        street: [this.user.address.street]
      })
    }, { validators: [], updateOn: 'change' });

    this.firstNameControl = this.userForm.controls.firstName as FormControl;
  }

  onSave(): void {
    if (this.userForm.valid) {
      this.askToSave.emit(this.userForm.value);
    }
  }

}
