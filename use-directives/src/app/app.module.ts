import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SetColorDirective } from './directives/set-color.directive';
import { OnlyHebrewDirective } from './directives/only-hebrew.directive';
import { PlayWithPipesComponent } from './components/play-with-pipes/play-with-pipes.component';
import { SuffixPipe } from './pipes/suffix.pipe';
import { FilterArrayPipe } from './pipes/filter-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SetColorDirective,
    OnlyHebrewDirective,
    PlayWithPipesComponent,
    SuffixPipe,
    FilterArrayPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
