import { TestBed, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabase } from 'angularfire2/database';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        AngularFireAuth,
        AngularFireDatabase
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
