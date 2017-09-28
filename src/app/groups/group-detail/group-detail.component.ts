import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Todo } from '../../todos/shared/todo';
import { TodoService } from '../../todos/shared/todo.service';
import { User } from '../../user/shared/user';

@Component({
  selector: 'group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  @Input() group: Group;
  @Input() todo: Todo;
  @Input() todos: FirebaseListObservable<Todo[]>
  @Input() groups: FirebaseListObservable<Group[]>
  @Input() user: User;
  @Input() users: FirebaseListObservable<User[]>;
  constructor(private groupSvc: GroupService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.groupSvc.getUsersList({ limitToLast: 5 })
    console.log(this.users)
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
      return this.todos;
    })
  }

  getSharedGroups() {
    this.groups = this.groupSvc.getSharedGroups({
      orderByChild: 'members',
      equalTo: this.group.members
    })
  }

  updateActive(value: boolean) {
    this.groupSvc.updateGroup(this.group.$key, { active: value })
  }

  deleteGroup() {
    this.groupSvc.deleteGroup(this.group.$key)
  }

  addToUser() {
    this.groupSvc.addToUser(this.user.$key, this.group.$key)
    console.log(this.group.members)
    console.log(this.user)
    console.log(this.group.$key)
    console.log(this.user.$key);
    console.log(this.group.members)
  }

  addToGroup() {
    this.groupSvc.addToGroup(this.group.$key, this.user.$key)
    console.log(this.group)
    console.log(this.group.members)
    console.log(this.user)
  }
}
