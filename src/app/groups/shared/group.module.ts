import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { GroupService } from './group.service';
import { GroupsListComponent } from '../groups-list/groups-list.component';
import { GroupFormComponent } from '../group-form/group-form.component';
import { GroupDetailComponent } from '../group-detail/group-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule
  ],
  declarations: [
  	GroupsListComponent,
	GroupFormComponent,
	GroupDetailComponent
  ],
  providers: [
    GroupService
  ]
})
export class GroupModule { }
