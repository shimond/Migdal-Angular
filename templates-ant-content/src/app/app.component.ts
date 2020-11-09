import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShown = false;
  title = 'templates-and-content';
  names: Array<{ name: string, id: number }> = [{ name: 'Shimon', id: 1 },
  { name: 'Naama', id: 2 },
  { name: 'Tal', id: 3 },
  { name: 'Moshe', id: 4 },
  { name: 'David', id: 5 },
  { name: 'Tehila', id: 6 }];

  onSelectionChanged(value: { name: string, id: number }) {
    alert(JSON.stringify(value));
  }

  displayFn(item: { name: string, id: number }): string {
    return `ID = ${item.id} NAME = ${item.name}`;
  }

  showHideTemplate() {
    this.isShown = !this.isShown;
  }
}


