import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {
	public groups: FirebaseListObservable<Group[]>;

  constructor(private groupSvc: GroupService) { }

  ngOnInit() {
  	this.groups = this.groupSvc.getGroupsList({limitToLast: 5})
  }

}
