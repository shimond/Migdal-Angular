import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodosEffects } from 'src/app/store/todos.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { demoAreaKey, demoReducer } from 'src/app/store/demo-store';
import { todosAreaKey, todosReducer } from 'src/app/store/todos-store';
import { SetCounterValueComponent } from './components/set-counter-value/set-counter-value.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksContainerComponent } from './components/set-counter-value/tasks-container/tasks-container.component';
import { TaskListComponent } from './components/set-counter-value/task-list/task-list.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    SetCounterValueComponent,
    TasksContainerComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      [demoAreaKey]: demoReducer,
      [todosAreaKey]: todosReducer
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([TodosEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
