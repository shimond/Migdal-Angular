import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StringListComponent } from './components/string-list/string-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StringListComponent // Components, Directives, Pipes
  ],
  imports: [
    BrowserModule, // Reference Modules,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
