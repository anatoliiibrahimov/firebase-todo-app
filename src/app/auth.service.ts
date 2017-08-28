import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
	user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth,
              private router:Router) { 
  	this.user = firebaseAuth.authState;
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
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  googleLogin() {
    this.firebaseAuth
    	.auth
    	.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  facebookLogin() {
    this.firebaseAuth
    	.auth
    	.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
      this.router.navigate(['/']);
  }

}
