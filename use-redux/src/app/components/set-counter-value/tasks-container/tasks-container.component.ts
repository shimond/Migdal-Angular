import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToDoTask } from 'src/app/models/task.model';
import { addTaskAction, loadTasksAction, selectCurrentTask } from 'src/app/store/todos-store';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss']
})
export class TasksContainerComponent implements OnInit {

  formGroup: FormGroup;
  selectedTask$: Observable<ToDoTask>;

  constructor(private formBuilder: FormBuilder, private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(loadTasksAction());
    this.selectedTask$ = this.store.select(selectCurrentTask);
    this.formGroup = this.formBuilder.group({
      title: [''],
      text: [''],
      isDone: [false]
    });
  }

  save() {
    this.store.dispatch(addTaskAction({ newTask: this.formGroup.value }));
    this.formGroup.reset();
  }
}
