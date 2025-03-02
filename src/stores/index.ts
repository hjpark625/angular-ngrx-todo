import { combineReducers } from '@ngrx/store'

import { todoReducer } from '@/stores/reducers/todo.reducer'

export const rootReducer = combineReducers({
  todos: todoReducer
})
