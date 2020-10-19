import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-string-list',
  templateUrl: './string-list.component.html',
  styleUrls: ['./string-list.component.scss']
})
export class StringListComponent implements OnInit {
  @Input() title: string;
  @Input() values: string[] = [];
  @Input() selectedItem: string = null;
  @Output() selectedItemChangedRequested = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {

  }

  selectItem(item: string): void {
    this.selectedItemChangedRequested.emit(item);
    // this.selectedItem = item;

  }
}
