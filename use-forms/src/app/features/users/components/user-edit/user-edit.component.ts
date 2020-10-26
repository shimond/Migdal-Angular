import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  @Input() user: UserModel;
  searchControl: FormControl;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchControl = this.formBuilder.control('1234', [Validators.maxLength(10), Validators.required, Validators.email]);
    this.searchControl.valueChanges
      .pipe(filter(x => x.length > 3),
        debounceTime(300))
      .subscribe(x => console.log(x));
  }

  changeMode() {
    if (this.searchControl.disabled) {
      this.searchControl.enable();
    } else {
      this.searchControl.disable();
    }
  }

}
