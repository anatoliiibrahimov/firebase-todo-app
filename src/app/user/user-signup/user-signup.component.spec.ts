import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignupComponent } from './user-signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabase } from 'angularfire2/database';

describe('UserSignupComponent', () => {
  let component: UserSignupComponent;
  let fixture: ComponentFixture<UserSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSignupComponent ],
      imports: [
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ],
      providers: [
        AuthService,
        AngularFireAuth,
        AngularFireDatabase
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
