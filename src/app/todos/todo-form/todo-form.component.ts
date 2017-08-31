import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo: Todo = new Todo();
  constructor(private todoSvc: TodoService) { }

  ngOnInit() {
  }
  
  createTodo() {
    this.todoSvc.createTodo(this.todo)
    this.todo = new Todo()
  }

}
