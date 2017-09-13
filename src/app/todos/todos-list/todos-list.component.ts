import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Group } from '../../groups/shared/group';

@Component({
  selector: 'todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})

export class TodosListComponent implements OnInit {
  public todos: FirebaseListObservable<Todo[]>;
  public todo: FirebaseObjectObservable<Todo>;
  public groups: FirebaseListObservable<Group[]>;
  public group: FirebaseObjectObservable<Group>;
  constructor(private todoSvc: TodoService) { }
  ngOnInit() {
    this.todos = this.todoSvc.getTodosList({limitToLast: 5})
    this.groups = this.todoSvc.getGroupsList({limitToLast: 5})
  }

  getGroup(todo) {
    return this.todoSvc.getGroup(todo)
  }
}
