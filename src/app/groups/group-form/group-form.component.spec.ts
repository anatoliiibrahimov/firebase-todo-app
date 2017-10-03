import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFormComponent } from './group-form.component';
import { FormsModule } from '@angular/forms';
import { GroupService } from '../shared/group.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../auth.service';

describe('GroupFormComponent', () => {
  let component: GroupFormComponent;
  let fixture: ComponentFixture<GroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupFormComponent ],
      imports: [
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ],
      providers: [
        GroupService,
        AngularFireAuth,
        AngularFireDatabase,
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
