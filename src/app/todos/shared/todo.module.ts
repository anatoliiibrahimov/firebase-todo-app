import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { TodoService } from './todo.service';
import { TodosListComponent } from '../todos-list/todos-list.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoDetailsComponent } from '../todo-details/todo-details.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    TodosListComponent,
    TodoFormComponent,
    TodoDetailsComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
