import { Injectable } from '@angular/core';
import {  FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from '../../auth.service'
import { Todo } from './todo';

@Injectable()
export class TodoService {
  private basePath: string = '/todos';
  todos: FirebaseListObservable<Todo[]> = null;
  todo: FirebaseObjectObservable<Todo> = null;
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
  	this.todos = this.db.list(`todos/${this.userId}`);
  	return this.todos
	}
	
  getTodo(key: string): FirebaseObjectObservable<Todo> {
    const todoPath =  `${this.basePath}/${key}`;
    this.todo = this.db.object(todoPath)
    return this.todo
  }

  createTodo(todo: Todo): void  {
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
 
  deleteAll(): void {
    this.todos.remove()
      .catch(error => this.handleError(error))
 	}
 
  private handleError(error) {
    console.log(error)
  }

}
