import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';
import { SelectorComponent } from './components/selector/selector.component';
import { UnlessDirective } from './directives/unless.directive';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { CurrentItemDisplayDirective } from './directives/current-item-display.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    SelectorComponent,
    UnlessDirective,
    ExpansionPanelComponent,
    CurrentItemDisplayDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
