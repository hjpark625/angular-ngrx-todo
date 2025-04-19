import { createReducer, on } from '@ngrx/store'
import { produce } from 'immer'

import { addInputValue, addTodo, deleteTodo, toggleTodo } from '@/stores/actions/todo.action'

export interface TodoItemType {
  id: number
  text: string
  completed: boolean
}

export interface TodoStateType {
  inputValue: string
  todoId: number
  todos: TodoItemType[]
}

const initialState: TodoStateType = {
  inputValue: '',
  todoId: 1,
  todos: []
}

export const todoReducer = createReducer<TodoStateType>(
  initialState,
  on(addInputValue, (state, { payload }): TodoStateType => ({ ...state, inputValue: payload })),
  on(
    addTodo,
    (state): TodoStateType =>
      produce(state, (draft) => {
        draft.todoId = draft.todoId + 1
        draft.todos.push({ id: draft.todoId, text: draft.inputValue, completed: false })
        draft.inputValue = ''
      })
  ),
  on(
    deleteTodo,
    (state, { payload }): TodoStateType =>
      produce(state, (draft) => {
        draft.todos = draft.todos.filter((todo) => todo.id !== payload)
      })
  ),
  on(
    toggleTodo,
    (state, { payload }): TodoStateType =>
      produce(state, (draft) => {
        draft.todos = draft.todos.map((todo) => (todo.id === payload ? { ...todo, completed: !todo.completed } : todo))
      })
  )
)
