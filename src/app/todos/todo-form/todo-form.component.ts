import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo: Todo = new Todo();
  constructor(private todoSvc: TodoService, public authService: AuthService) { }

  ngOnInit() {
  }
  
  createTodo() {
    this.todoSvc.createTodo(this.todo)
    this.todo = new Todo()
  }

  logout() {
    this.authService.logout();
  }

}
