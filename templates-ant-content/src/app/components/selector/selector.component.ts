import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  @Output() selectionChanged = new EventEmitter<any>();
  @Input() values: any[] = [];
  @Input() displayFunction: any = (item) => item;

  constructor() { }

  ngOnInit(): void {
  }


  onSelectItem(item): void {
    this.selectionChanged.emit(item);
  }

}
