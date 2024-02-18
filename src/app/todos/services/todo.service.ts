import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoSignal = signal<TodoInterface[]>([]);
  filterSignal = signal<FilterEnum>(FilterEnum.all);

  changeFilter(filterName: FilterEnum) {
    this.filterSignal.set(filterName);
  }

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      id: Math.random().toString(16),
      isCompleted: false,
    };
    this.todoSignal.update((todos) => [...todos, newTodo]);
  }

  changeTodo(id: string, text: string) {
    this.todoSignal.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  }

  removeTodo(id: string) {
    this.todoSignal.update((todos) => todos.filter((todo) => todo.id !== id));
  }

  toggleTodo(id: string) {
    this.todoSignal.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  toggleAll(isCompleted: boolean) {
    this.todoSignal.update((todos) =>
      todos.map((todo) =>
        ({ ...todo, isCompleted })
      )
    );
  }
}
