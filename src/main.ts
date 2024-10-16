import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TodoComponent } from './screens/todo/todo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],
  template: `
    <app-todo/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
