import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginComponent } from './user-login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabase } from 'angularfire2/database';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginComponent ],
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
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
