import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  googleLogin() {
    this.authService.googleLogin();
  }

  facebookLogin() {
    this.authService.facebookLogin();
  }

  logout() {
    this.authService.logout();
  }
}
