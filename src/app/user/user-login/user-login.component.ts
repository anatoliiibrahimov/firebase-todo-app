import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService,
              private router: Router) {}

  private afterSignIn(): void {
    // Do after login stuff here, such router redirects, toast messages, etc.
    this.router.navigate(['/todos']);
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';  
  }

  googleLogin(): void {
    this.authService.googleLogin()
      .then(() => this.afterSignIn());
  }

  facebookLogin(): void {
    this.authService.facebookLogin()
    .then(() => this.afterSignIn());
  }

  logout() {
    this.authService.logout();
  }
}
