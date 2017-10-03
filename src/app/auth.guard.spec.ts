import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from './auth.guard';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        AngularFireAuth
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
