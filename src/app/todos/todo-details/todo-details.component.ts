import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo';
import { Group } from '../../groups/shared/group';

@Component({
  selector: 'todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  @Input() todo: Todo;
  @Input() group: Group;
  @Input() groups: Group[];
  constructor(private todoSvc: TodoService) { }
  updateActive(value: boolean) {
    this.todoSvc.updateTodo(this.todo.$key, { active: value })
  }
  deleteTodo() {
    this.todoSvc.deleteTodo(this.todo.$key)
  }

  addToGroup() {
    this.todoSvc.updateTodo(this.todo.$key, { groupKey: this.group.$key })
    console.log(this.todo);
    console.log(this.group);
  }
}
