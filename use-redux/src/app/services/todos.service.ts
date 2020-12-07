import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ToDoTask } from '../models/task.model';
import { setIsLoadingAction, setTasksAction, Todos } from '../store/todos-store';

@Injectable({
  providedIn: 'root'
})
export class TodosService {


  delay(timeout = 2000): Promise<any> {
    return new Promise<any>(((res, rej) => {
      setTimeout(() => {
        res();
      }, timeout);
    }));
  }

  loadAllTasks(): Observable<ToDoTask[]> {
    const tasksFromServer: ToDoTask[] = [
      { id: 1, title: 'task 1', text: 'text1', isDone: false },
      { id: 2, title: 'task 2', text: 'text2', isDone: false },
      { id: 3, title: 'task 3', text: 'text3', isDone: true },
      { id: 4, title: 'task 4', text: 'text4', isDone: false },
      { id: 5, title: 'task 5', text: 'text5', isDone: true },
      { id: 6, title: 'task 6', text: 'text6', isDone: false }
    ];

    return of(tasksFromServer).pipe(delay(2000));
  }

  constructor(private store: Store<any>) { }
}
