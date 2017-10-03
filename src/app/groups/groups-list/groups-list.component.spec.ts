import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsListComponent } from './groups-list.component';
import { GroupFormComponent } from '../group-form/group-form.component';
import { GroupDetailComponent } from '../group-detail/group-detail.component';
import { FormsModule } from '@angular/forms';
import { GroupService } from '../shared/group.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../auth.service';

describe('GroupsListComponent', () => {
  let component: GroupsListComponent;
  let fixture: ComponentFixture<GroupsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GroupsListComponent,
        GroupFormComponent,
        GroupDetailComponent
      ],
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
    fixture = TestBed.createComponent(GroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
