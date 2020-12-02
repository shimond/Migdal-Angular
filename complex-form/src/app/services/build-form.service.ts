import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, Child } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class BuildFormService {

  constructor(private formBuilder: FormBuilder) { }


  generateChildGroup(child: Child = null): FormGroup {
    return this.formBuilder.group({
      fullName: [],
      homeAddress: this.generateAddressGroup()
    });
  }

  generateAddressGroup(isCityRequired: boolean = true, address: Address = null): FormGroup {
    if (!address) {
      address = { city: null, country: null };
    }
    const group =  this.formBuilder.group({
      city: [address.city, isCityRequired ? [Validators.required] : []],
      country: [address.country]
    });

    return group;
  }
}
