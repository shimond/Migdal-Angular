import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { AddressComponent } from './components/address/address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoReadOnlyOnBlurDirective } from './directives/auto-read-only-on-blur.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    AddressComponent,
    AutoReadOnlyOnBlurDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
