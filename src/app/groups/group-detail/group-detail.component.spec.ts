import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailComponent } from './group-detail.component';
import { FormsModule } from '@angular/forms';
import { GroupService } from '../shared/group.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../auth.service';

describe('GroupDetailComponent', () => {
  let component: GroupDetailComponent;
  let fixture: ComponentFixture<GroupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDetailComponent ],
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
    fixture = TestBed.createComponent(GroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
