import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
import { ToDoTask } from '../models/task.model';
export const todosAreaKey = 'TODO';

export interface Todos {
  tasks: ToDoTask[];
  currentTask: ToDoTask;
  isLoading: boolean;

}

export const todosInit: Todos = { tasks: [], currentTask: null, isLoading: false };

// selectors:
const todosSelector = createFeatureSelector<Todos>(todosAreaKey);
export const selectTasks = createSelector(todosSelector, state => state.tasks);
export const selectCurrentTask = createSelector(todosSelector, state => state.currentTask);
export const selectIsLoading = createSelector(todosSelector, state => state.isLoading);


// Actions
export const addTaskAction = createAction('add-task', props<{ newTask: ToDoTask }>());
export const removeTaskAction = createAction('remove-task', props<{ taskToRemove: ToDoTask }>());
export const updateTaskAction = createAction('update-task', props<{ taskToUpdate: ToDoTask }>());
export const setCurrentTaskAction = createAction('set-current-task', props<{ selectedTask: ToDoTask }>());
export const setTasksAction = createAction('set-tasks', props<{ allTasks: ToDoTask[] }>());
export const setIsLoadingAction = createAction('set-is-loading', props<{ isLoading: boolean }>());
export const loadTasksAction = createAction('load-tasks');





// Reducer
export const todosReducer = createReducer(todosInit,
  on(setIsLoadingAction, (currentState, action) => {
    const newState = { ...currentState, isLoading: action.isLoading };
    return newState;
  }),
  on(setTasksAction, (currentState, action) => {
    const newState = { ...currentState, tasks: [...action.allTasks] };
    return newState;
  }),
  on(setCurrentTaskAction, (currentState, action) => {
    const newState = { ...currentState, currentTask: action.selectedTask };
    return newState;
  }),
  on(addTaskAction, (currentState, action) => {
    const newTask = { ...action.newTask, id: currentState.tasks.length + 1 };
    const newState = { ...currentState, tasks: [...currentState.tasks, newTask] };
    return newState;
  }),
  on(removeTaskAction, (currentState, action) => {
    const tasks = currentState.tasks.filter(x => x.id !== action.taskToRemove.id);
    let currentTask = currentState.currentTask;
    if (currentTask && currentTask.id === action.taskToRemove.id) {
      currentTask = null;
    }
    const newState = { ...currentState, tasks: [...tasks], currentTask };
    return newState;
  }),
  on(updateTaskAction, (currentState, action) => {
    const tasks = currentState.tasks.map(x => {
      if (action.taskToUpdate.id !== x.id) {
        return x;
      } else {
        return { ...x, isDone: action.taskToUpdate.isDone };
      }
    });
    return { ...currentState, tasks };
  })
);



