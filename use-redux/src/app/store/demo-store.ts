import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';

export const demoAreaKey = 'DEMO';
export const demoInit: Demo = { counter: 0 };


export interface Demo {
  counter: number;
}

const demoSelector = createFeatureSelector<Demo>(demoAreaKey);
export const selectCounter = createSelector(demoSelector, state => state.counter);


export const plusAction = createAction('plus');
export const minusAction = createAction('minus');
export const setCountAction = createAction('setCount', props<{ newCountValue: number }>());


export const demoReducer = createReducer(demoInit,
  on(plusAction, (currentState, action) => {
    const newState = { ...currentState, counter: currentState.counter + 1 };
    return newState;
  }),
  on(minusAction, (currentState, action) => {
    const newState = { ...currentState, counter: currentState.counter - 1 };
    return newState;
  }),
  on(setCountAction, (currentState, action) => {
    const newState = { ...currentState, counter: action.newCountValue };
    return newState;
  })

);









// Action
// Reducer
// Store
// State
// selector
