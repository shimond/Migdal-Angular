import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { loadTasksAction } from './todos-store';

@Injectable()
export class TodosEffects {

  loadEffect = createEffect(() => this.actions$.pipe(
    ofType(loadTasksAction),
    tap(x => {
      console.log('EFFECT', x);
    })), { dispatch: false });

  constructor(private actions$: Actions) {

  }
}
