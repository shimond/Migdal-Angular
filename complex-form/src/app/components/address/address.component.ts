import { Component, Input, OnInit, Optional } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() fieldName = 'address';
  addressForm: FormGroup;
  constructor(@Optional() private controlContainer: ControlContainer) {
    if (!controlContainer) {
      throw new Error('WHERE IS THE FORM GROUP!!!!');
    }
  }

  ngOnInit(): void {

    const parentGroup = this.controlContainer.control as FormGroup;
    this.addressForm = parentGroup.controls[this.fieldName] as FormGroup;
  }

}
