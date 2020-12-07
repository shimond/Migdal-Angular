import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setCountAction } from 'src/app/store/demo-store';

@Component({
  selector: 'app-set-counter-value',
  templateUrl: './set-counter-value.component.html',
  styleUrls: ['./set-counter-value.component.scss']
})
export class SetCounterValueComponent implements OnInit {

  formControl: FormControl;
  constructor(private fb: FormBuilder, private store: Store<any>) { }

  ngOnInit(): void {
    this.formControl = this.fb.control('');
  }

  save() {
    const newValue = this.formControl.value;
    this.store.dispatch(setCountAction({ newCountValue: newValue }));
  }

}
