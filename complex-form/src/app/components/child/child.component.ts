import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  childForm: FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.childForm = this.controlContainer.control as FormGroup;
  }

}
