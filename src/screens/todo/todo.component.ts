import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo.model';
import { TodoStore } from './services/todo.store';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [TodoStore, TodoService],
})
export class TodoComponent {
  todoStore = inject(TodoStore);
  todo: Todo = {};

  // Method to add a new todo
  addTodo() {
    this.todoStore.addTodo(this.todo);
  }

  // Method to remove a todo
  removeTodo(id: number = -1) {
    this.todoStore.removeTodo(id);
  }
}
