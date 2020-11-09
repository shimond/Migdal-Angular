import { AfterContentInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit, AfterContentInit {

  @Output() selectionChanged = new EventEmitter<any>();
  @Input() values: any[] = [];
  @Input() emptyTemplate: TemplateRef<any>;
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;
  @ContentChild(BoxComponent) refToAppBox: BoxComponent;

  @Input() displayFunction: any = (item) => item;
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit refToAppBox', this.refToAppBox);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit refToAppBox', this.refToAppBox);


  }

  onSelectItem(item): void {
    this.selectionChanged.emit(item);
  }

}
