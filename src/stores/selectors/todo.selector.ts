import { createSelector } from '@ngrx/store'

import type { RootState } from '@/stores'

const todoSelector = (state: { root: RootState }) => state.root

export const selectTodos = createSelector(todoSelector, (state) => state.todos.todos)
export const selectInputValue = createSelector(todoSelector, (state) => state.todos.inputValue)
