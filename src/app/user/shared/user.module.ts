import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserLoginComponent } from '../user-login/user-login.component';
import { UserSignupComponent } from '../user-signup/user-signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    UserLoginComponent,
    UserSignupComponent,
  ],
  exports: []
})
export class UserModule { }
