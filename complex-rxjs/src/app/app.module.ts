import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchExComponent } from './search-ex/search-ex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchShowComponent } from './components/search-show/search-show.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchExComponent,
    SearchShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
