import { Injectable } from '@angular/core';
import {  FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireAuth } from 'angularfire2/auth';

import { Todo } from './todo';
@Injectable()
export class TodoService {
  private basePath: string = '/todos';
  todos: FirebaseListObservable<Todo[]> = null;
  todo: FirebaseObjectObservable<Todo> = null;
  constructor(
  	private afa: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }

  getTodosList(query={}): FirebaseListObservable<Todo[]> {
  	this.todos = this.db.list(this.basePath, {
    	query: query
  	});
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
