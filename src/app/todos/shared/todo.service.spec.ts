import { TestBed, inject, async } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from '../../auth.guard';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../auth.service';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('TodoService', () => {
  let todoService: TodoService;
  
  let objectSpy = jasmine.createSpy("object").and.callFake((path: string) => {
    if (path.includes("testTodo")) {
      return Observable.of({
        title: "TestTodo"
      });
    } else {
      return Observable.throw("Error");
    }
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoService,
        AuthGuard,
        AngularFireAuth,
        AngularFireDatabase,
        AuthService
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ]
    });
  });

  beforeEach(inject([TodoService], (todoServiceInjected: TodoService) => {
    todoService = todoServiceInjected;
  }));

  it('should be created', () => {
    expect(todoService).toBeTruthy();
  });

  it("should get a todo", () => {
    todoService.getTodo("TestTodo").subscribe((todo: any) => {
      expect(objectSpy).toHaveBeenCalled();
      expect(todo.title).toBe("TestTodo");
    });
  });
  
});
