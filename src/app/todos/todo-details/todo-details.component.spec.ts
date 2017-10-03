import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailsComponent } from './todo-details.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../shared/todo.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('TodoDetailsComponent', () => {
  let component: TodoDetailsComponent;
  let fixture: ComponentFixture<TodoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailsComponent ],
      imports: [
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ],
      providers: [
        TodoService,
        AngularFireAuth,
        AngularFireDatabase,
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
