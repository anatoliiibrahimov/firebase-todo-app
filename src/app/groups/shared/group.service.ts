import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Group } from './group';
import { AuthService } from '../../auth.service'
import { Router } from '@angular/router';
import { Todo } from '../../todos/shared/todo'
import { Observable } from 'rxjs/Observable';
import { User } from '../../user/shared/user';
import * as firebase from 'firebase/app';

@Injectable()
export class GroupService {
	private basePath: string = '/groups';
	groups: FirebaseListObservable<Group[]> = null;
  group: FirebaseObjectObservable<Group> = null;
  todos: FirebaseListObservable<Todo[]> = null;
  todo: FirebaseObjectObservable<Todo> = null;
  user: FirebaseObjectObservable<User> = null;
  users: FirebaseListObservable<User[]> = null;
  userId: string;


  constructor(
  	private firebaseAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    auth: AuthService
  ) {
  	this.firebaseAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
      	
    })
  }

  getGroupsList(query={}): FirebaseListObservable<Group[]> {
  	if (!this.userId) return;
    this.groups = this.db.list(`groups/`, {query:  {orderByChild: 'userId', equalTo: this.userId}});
    console.log(this.groups)
    return this.groups
    
	}

	getGroup(key: string): FirebaseObjectObservable<Group> {
    if (!this.userId) return;
    this.group = this.db.object(`groups/${key}`);
    console.log(this.group);
    return this.group
  }

  createGroup(group: Group): void  {
    group.userId = this.userId
    this.groups.push(group)
      .catch(error => this.handleError(error))
  }

  updateGroup(key: string, value: any): void {
   	this.groups.update(key, value)
     	.catch(error => this.handleError(error))
 	}

  deleteGroup(key: string): void {
    this.groups.remove(key)
      .catch(error => this.handleError(error))
  }

  getTodoList(query ={}): FirebaseListObservable<Todo[]> {
    if (!this.userId) return;
    this.todos = this.db.list('/todos/' ,  {query:  query})
    console.log(query)
    return this.todos
  }

  getUsersList(query={}): FirebaseListObservable<User[]>{
    this.users = this.db.list('users/')
    console.log(this.users)
    return this.users
  }

  addToUser(member_key: string, key: string) {
    const data = { [member_key]: true};
    const members = this.db.object(`groups/${key}/members`);
    
    console.log(members)
    members.update(data)
  }

  addToGroup(group_key: string, userId: string) {
    const data = { [group_key]: true};
    const groups = this.db.object(`users/${userId}/groups`);
    
    console.log(groups)
    groups.update(data)
  }

  getUser(group: Group): FirebaseObjectObservable<User>{
    this.user = this.db.object('/users/'+group.$key);
    console.log(this.user);
    return this.user
  }

  getSharedGroups(query={}): FirebaseListObservable<Group[]>{
    if (!this.userId) return;
    this.groups = this.db.list('/groups/', {query: {  orderByChild: 'members/'+this.userId,equalsTo: true}}) 
    console.log(query)
    return this.groups
  }

  private handleError(error) {
    console.log(error)
 	}
}
