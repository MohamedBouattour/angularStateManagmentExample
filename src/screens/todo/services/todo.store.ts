import { effect, inject, Injectable, signal } from '@angular/core';
import { Todo } from '../../../models/todo.model';
import { TodoService } from './todo.service';

@Injectable()
export class TodoStore {
  private _todos = signal<Todo[]>([]);
  private todoService = inject(TodoService);

  // Effect: Log the todos whenever they change (for debugging)
  constructor() {
    this.fetchTodos();
    effect(() => {
      console.log('Todos updated:', this._todos());
    });
  }

  // Get all todos
  get todos() {
    return this._todos();
  }

  // Fetch todos from the API
  fetchTodos() {
    this.todoService
      .getTodos()
      .subscribe((todos: Todo[]) => this._todos.set(todos));
  }

  // Add a new todo (POST to API)
  addTodo(newTodo: Todo) {
    this._todos.set([newTodo, ...this._todos()]);
  }

  // Remove a todo (DELETE from API)
  removeTodo(id: number) {
    this._todos.set([...this._todos()].filter((todo) => todo.id !== id));
  }
}
