import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'

import { selectInputValue, selectTodos } from '@/stores/selectors/todo.selector'
import { addInputValue, addTodo, deleteTodo, toggleTodo } from '@/stores/actions/todo.action'

import type { OnInit } from '@angular/core'

@Component({
  templateUrl: './todo.component.html',
  imports: [CommonModule]
})
export class TodoComponent implements OnInit {
  store = inject(Store)

  inputVal$ = this.store.select(selectInputValue)
  todos$ = this.store.select(selectTodos)

  onAddInputValue(event: Event) {
    const target = event.target
    if (target instanceof HTMLInputElement) {
      const value = target.value
      this.store.dispatch(addInputValue({ payload: value }))
      return
    } else return
  }

  onAddTodo(event: Event) {
    event.preventDefault()
    this.store.dispatch(addTodo())
    return
  }

  onDeleteTodo(todoId: number) {
    this.store.dispatch(deleteTodo({ payload: todoId }))
  }

  onToggleTodo(todoId: number) {
    this.store.dispatch(toggleTodo({ payload: todoId }))
  }

  ngOnInit(): void {
    this.todos$.subscribe((val) => console.log(val))
    this.inputVal$.subscribe((val) => console.log(val))
  }
}
