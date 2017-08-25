import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo';

@Component({
  selector: 'todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  @Input() todo: Todo;
  constructor(private todoSvc: TodoService) { }
  updateTimeStamp() {
    let date = new Date()
    this.todoSvc.updateTodo(this.todo.$key, { timeStamp: date })
  }
  updateActive(value: boolean) {
    this.todoSvc.updateTodo(this.todo.$key, { active: value })
  }
  deleteTodo() {
    this.todoSvc.deleteTodo(this.todo.$key)
  }
}
