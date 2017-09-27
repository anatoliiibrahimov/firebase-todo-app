import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from '../../auth.service'
import { Todo } from './todo';
import { Group } from '../../groups/shared/group'

@Injectable()
export class TodoService {
  private basePath: string = '/todos';
  todos: FirebaseListObservable<Todo[]> = null;
  todo: FirebaseObjectObservable<Todo> = null;
  groups: FirebaseListObservable<Group[]> = null;
  group: FirebaseObjectObservable<Group> = null;
  userId: string;
  constructor(
  	private firebaseAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    auth: AuthService
  ) {
    this.firebaseAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  getTodosList(query={}): FirebaseListObservable<Todo[]> {
    if (!this.userId) return;
  	this.todos = this.db.list(`todos/`, {query:  {orderByChild: 'userId', equalTo: this.userId}})
  	return this.todos
	}
	
  getTodo(key: string): FirebaseObjectObservable<Todo> {
    const todoPath =  `${this.basePath}/${key}`;
    this.todo = this.db.object(todoPath)
    return this.todo
  }

  createTodo(todo: Todo): void  {
    todo.userId = this.userId
    this.todos.push(todo)
       .catch(error => this.handleError(error))
  }

  updateTodo(key: string, value: any): void {
    this.todos.update(key, value)
      .catch(error => this.handleError(error))
  }
 
  deleteTodo(key: string): void {
    this.todos.remove(key)
      .catch(error => this.handleError(error))
 	}

  getGroupsList(query={}): FirebaseListObservable<Group[]> {
    if (!this.userId) return;
    this.groups = this.db.list(`groups/`, {query:  {orderByChild: 'userId', equalTo: this.userId}} );
    return this.groups
  }

  getGroup(todo: Todo): FirebaseObjectObservable<Group> {
    if (!this.userId) return;
    this.group = this.db.object('/groups/'+ todo.groupKey);
    console.log(this.group);
    return this.group
  }
 
  private handleError(error) {
    console.log(error)
  }

}
