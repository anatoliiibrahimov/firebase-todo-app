import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { User } from './user/shared/user';

@Injectable()
export class AuthService {
	user: FirebaseObjectObservable<User>
  users: FirebaseListObservable<User[]> = null;
  constructor(private firebaseAuth: AngularFireAuth,
              private router:Router,
              private db: AngularFireDatabase) { 
                this.firebaseAuth.authState.subscribe((user) => {
                  if (user != null) {
                    this.user = db.object('users/' + user.uid);
                  }
                });
               this.users = db.list('users/');
  }

  get authenticated(): boolean {
    return this.firebaseAuth.authState !== null;
  }

  get currentUser(): any {
    return this.authenticated ? this.firebaseAuth.authState : null;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.db.list('users').push({email})
        
        this.router.navigate(['/todos']);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.router.navigate(['/todos']);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  googleLogin() {
    this.firebaseAuth
    	.auth
    	.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((data) => {
        this.router.navigate(['/todos']);
      })
  }

  facebookLogin() {
    this.firebaseAuth
    	.auth
    	.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((data) => {
        this.router.navigate(['/todos']);
      })
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
      this.router.navigate(['/']);
  }

}
