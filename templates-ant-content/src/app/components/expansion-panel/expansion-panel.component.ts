import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  @ContentChild(TemplateRef) bodyTemplate: TemplateRef<any>;
  isExpand = false;
  currentValue = 0;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentValue += 100;
    }, 1000);
  }

  changeMode(): void {
    this.isExpand = !this.isExpand;
  }

}
