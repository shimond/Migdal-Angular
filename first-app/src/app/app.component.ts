import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-app';
  names = ['Shimon Dahan', 'Moshe Cohen', 'Itay Levi', 'David Levi', 'Naama Tair'];
  selectedName: string;

  ngOnInit(): void {
    this.selectedName = this.names[2];
  }

  onSelectedItemChangedRequested(selectedName: string): void {
    if (selectedName.indexOf('Moshe') === -1) {
      this.selectedName = selectedName;
    } else {

    }

  }
}
