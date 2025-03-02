import { createReducer, on } from '@ngrx/store'

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
    (state): TodoStateType => ({
      ...state,
      todoId: state.todoId + 1,
      todos: [...state.todos, { id: state.todoId, text: state.inputValue, completed: false }],
      inputValue: ''
    })
  ),
  on(
    deleteTodo,
    (state, { payload }): TodoStateType => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== payload)
    })
  ),
  on(
    toggleTodo,
    (state, { payload }): TodoStateType => ({
      ...state,
      todos: state.todos.map((todo) => (todo.id === payload ? { ...todo, completed: !todo.completed } : todo))
    })
  )
)
