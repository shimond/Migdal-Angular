import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-user-status-selector',
  templateUrl: './user-status-selector.component.html',
  styleUrls: ['./user-status-selector.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, // injection token
    useExisting: forwardRef(() => UserStatusSelectorComponent),
    multi: true
  }]
})
export class UserStatusSelectorComponent implements OnInit, ControlValueAccessor {

  selectControl: FormControl;
  registerOnChangeFunction: any;
  registerOnTouchedFunction: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.selectControl = this.formBuilder.control(null);
    this.selectControl.valueChanges.subscribe(p => {
      this.registerOnChangeFunction(p);
    });
  }

  writeValue(val: any): void {
    this.selectControl.patchValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.registerOnChangeFunction = fn;
  }

  registerOnTouched(fn: any): void {
    this.registerOnTouchedFunction = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.selectControl.disable();
    } else {
      this.selectControl.enable();
    }
  }

}
