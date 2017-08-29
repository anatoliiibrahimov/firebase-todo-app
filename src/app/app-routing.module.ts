import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: UserLoginComponent, },
  { path: 'signup', component: UserSignupComponent, },
  { path: 'todos', component: TodosListComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
