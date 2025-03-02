import { createAction, props } from '@ngrx/store'

const ADD_INPUT_VALUE = '[TODO] Add Input Value'
const ADD_TODO = '[TODO] Add Todo'
const DELETE_TODO = '[TODO] Delete Todo'
const TOGGLE_TODO = '[TODO] Toggle Todo'

export const addInputValue = createAction<typeof ADD_INPUT_VALUE, { payload: string }>(
  ADD_INPUT_VALUE,
  props<{ payload: string }>()
)
export const addTodo = createAction<typeof ADD_TODO>(ADD_TODO)
export const deleteTodo = createAction<typeof DELETE_TODO, { payload: number }>(
  DELETE_TODO,
  props<{ payload: number }>()
)
export const toggleTodo = createAction<typeof TOGGLE_TODO, { payload: number }>(
  TOGGLE_TODO,
  props<{ payload: number }>()
)
