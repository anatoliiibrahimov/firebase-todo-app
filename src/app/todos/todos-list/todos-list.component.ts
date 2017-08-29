import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  public todos: FirebaseListObservable<Todo[]>;
  constructor(private todoSvc: TodoService) { }
  ngOnInit() {
    this.todos = this.todoSvc.getTodosList({limitToLast: 5})
  }
}
