import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { TodosService } from '../services/todos.service';
import { loadTasksAction, setTasksAction } from './todos-store';

@Injectable()
export class TodosEffects {

  loadEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasksAction),
      switchMap(x => this.todosService.loadAllTasks()),
      map(x => setTasksAction({ allTasks: x }))));


  constructor(private actions$: Actions, private todosService: TodosService) {

  }
}
