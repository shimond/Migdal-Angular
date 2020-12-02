import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { BuildFormService } from '../../services/build-form.service';
import { PeopleService } from '../../services/people.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  personForm: FormGroup;
  isLastNameReadOnly = false;

  get children(): FormArray {
    return this.personForm.controls.children as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private formService: BuildFormService,
    private peopleService: PeopleService) { }

  async ngOnInit(): Promise<void> {
    this.personForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.email]],
      homeAddress: this.formService.generateAddressGroup(false),
      workAddress: this.formService.generateAddressGroup(),
      children: this.formBuilder.array([]),
      fullName: []
    });

    // this.personForm.controls.lastName.disable();

    this.handleFormChanges();

    const personToEdit = await this.peopleService.getPersonToEdit();
    for (const child of personToEdit.children) {
      this.addChild();
    }
    this.personForm.patchValue(personToEdit);

  }

  handleFormChanges(): void {
    combineLatest([this.personForm.controls.firstName.valueChanges, this.personForm.controls.lastName.valueChanges])
      .pipe(filter(() => !this.personForm.pristine))
      .subscribe(([firstName, lastName]) => {
        console.log('VALUE CHANGES');
        this.personForm.controls.fullName.patchValue(`${firstName} ${lastName}`);
      });

  }

  addChild(): void {
    this.children.push(this.formService.generateChildGroup());
  }

  removeChild(childForm: FormGroup): void {
    const idx = this.children.controls.indexOf(childForm);
    if (idx !== -1) {
      this.children.removeAt(idx);
    }
  }

}
