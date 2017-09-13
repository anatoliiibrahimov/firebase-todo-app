import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Group } from './group';
import { AuthService } from '../../auth.service'
import { Router } from '@angular/router';
import { Todo } from '../../todos/shared/todo'

@Injectable()
export class GroupService {
	private basePath: string = '/groups';
	groups: FirebaseListObservable<Group[]> = null;
  group: FirebaseObjectObservable<Group> = null;
  todos: FirebaseListObservable<Todo[]> = null;
  todo: FirebaseObjectObservable<Todo> = null;
  userId: string;

  constructor(
  	private firebaseAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    auth: AuthService
  ) {
  	this.firebaseAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
      	this.groups = db.list(this.basePath);
    })
  }

  getGroupsList(query={}): FirebaseListObservable<Group[]> {
  	if (!this.userId) return;
    this.groups = this.db.list(`groups/${this.userId}`);
    return this.groups
	}

	getGroup(userId): FirebaseObjectObservable<Group> {
    if (!this.userId) return;
    this.group = this.db.object('/groups/'+ this.userId);
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

  private handleError(error) {
    console.log(error)
 	}
}
