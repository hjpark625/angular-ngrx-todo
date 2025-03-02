import { createSelector } from '@ngrx/store'

import type { TodoStateType } from '@/stores/reducers/todo.reducer'

const todoSelector = (state: { root: { todos: TodoStateType } }) => state.root

export const selectTodos = createSelector(todoSelector, (state) => state.todos.todos)
export const selectInputValue = createSelector(todoSelector, (state) => state.todos.inputValue)
