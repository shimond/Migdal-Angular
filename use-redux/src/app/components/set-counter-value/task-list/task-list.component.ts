import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToDoTask } from 'src/app/models/task.model';
import { removeTaskAction, selectCurrentTask, selectTasks, setCurrentTaskAction } from 'src/app/store/todos-store';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<ToDoTask[]>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.tasks$ = this.store.select(selectTasks);
  }


  removeTask(task: ToDoTask) {
    this.store.dispatch(removeTaskAction({ taskToRemove: task }));
  }

  selectTask(task: ToDoTask) {
    this.store.dispatch(setCurrentTaskAction({ selectedTask: task }));

  }

}
