import { TestBed, inject, async } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from '../../auth.guard';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../auth.service';

describe('TodoService', () => {
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

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});
