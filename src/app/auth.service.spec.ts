import { TestBed, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { MockUser} from './user/shared/user-mock';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('AuthService', () => {
  beforeEach(() => {
    const authState: MockUser = {
      $key: "17WvU2Vj58SnTz8v7EqyYYb0WRc2",
      email: "test@mail.com",
      userId: '17WvU2Vj58SnTz8v7EqyYYb0WRc2'
    };

    const mockAngularFireAuth: any = {
      auth: jasmine.createSpyObj('auth', {
        'login': Promise.reject({
          code: 'auth/operation-not-allowed'
        }),
      }),
      authState: Observable.of(authState)
    };
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

  it('should get authenticated user', inject([ AuthService ], (service: AuthService) => {
    Reflect.set(service, 'authState', this.authState);

    expect(service.authenticated).toBe(true);
  }));
});
