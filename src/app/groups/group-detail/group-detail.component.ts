import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Todo } from '../../todos/shared/todo';
import { TodoService } from '../../todos/shared/todo.service';

@Component({
  selector: 'group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  @Input() group: Group;
  @Input() todo: Todo;
  @Input() todos: FirebaseListObservable<Todo[]>
  groupToDisplay;
  constructor(private groupSvc: GroupService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }
  
  getGroup() {
    this.groupSvc.getGroup(this.group.$key).subscribe(data => { 
      this.group = data;
      console.log(this.group)
      console.log(data);
      this.todos = this.groupSvc.getTodoList({
        orderByChild: 'groupKey',
        equalTo: this.group.$key,
      })
      return this.todos
      
      
    })
  }
  updateTimeStamp() {
    let date = new Date().getTime()
    this.groupSvc.updateGroup(this.group.$key, { timeStamp: date })
  }
  
  updateActive(value: boolean) {
    this.groupSvc.updateGroup(this.group.$key, { active: value })
  }

  deleteGroup() {
    this.groupSvc.deleteGroup(this.group.$key)
  }


}
