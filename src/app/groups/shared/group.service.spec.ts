import { TestBed, inject } from '@angular/core/testing';

import { GroupService } from './group.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from '../../auth.guard';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../auth.service';

describe('GroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GroupService,
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

  it('should be created', inject([GroupService], (service: GroupService) => {
    expect(service).toBeTruthy();
  }));
});
