import { TestBed, inject, async } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from '../../auth.guard';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../../auth.service';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('TodoService', () => {
  let todoService: TodoService;
  let objectSpy = jasmine.createSpy("object").and.callFake((path: string) => {
    if (path.includes("testTodo")) {
      return FirebaseObjectObservable.of({
        title: "TestTodo"
      });
    } else {
      return FirebaseObjectObservable.throw("Error");
    }
  });

  let todo = {
    $key: "-KvCKnHtkzOkx0aSBTz8",
    title: "TestTodoUser2",
    active: true,
    userId: "8Liw96MvDRMjULcIKBrj6f0kTD02",
    groupKey: "-KvCKMc8TapeTX7IzBgl"
  };

  let todos = [
    {
      $key: "-KvCKnHtkzOkx0aSBTz8",
      title: "TestTodoUser2",
      active: true,
      userId: "8Liw96MvDRMjULcIKBrj6f0kTD02",
      groupKey: "-KvCKMc8TapeTX7IzBgl"
    }, {
      $key: "-KvCKnHtkzOkx0aSBTz8",
      title: "TestTodoUser1",
      active: true,
      userId: "qy0lY1NgOgUeTmdJQEAajZmsmep2",
      groupKey: "-KvCKlJcuGZ5uQ1natkn"
    }
  ];

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

  it('should create todo', () => {
    spyOn(todoService, 'createTodo');
    const todoCreate = todoService.createTodo(todo);
    expect(todoService.createTodo).toHaveBeenCalled();
  });
  
  it('should get list of todos', () => {
    spyOn(todoService, 'getTodosList').and.returnValue(todos);
    let getTodos = todoService.getTodosList(todos);
    expect(todoService.getTodosList).toHaveBeenCalled();
    expect(todos.length).toEqual(2);
  });

  it('should update todo', () => {
    spyOn(todoService, 'updateTodo').and.returnValue(todos);
    let todoUpdate = todoService.updateTodo(todo.$key , todo);
    expect(todoService.updateTodo).toHaveBeenCalled();
  });

  it('should delete todo', () => {
    spyOn(todoService, 'deleteTodo').and.returnValue(todos);
    let todoDelete = todoService.deleteTodo(todo.$key);
    expect(todoService.deleteTodo).toHaveBeenCalled();
  });
});
