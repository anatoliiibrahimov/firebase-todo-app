import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosListComponent } from './todos/todos-list/todos-list.component';

const routes: Routes = [
  { path: 'todos', component: TodosListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
