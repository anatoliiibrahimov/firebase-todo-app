import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Todo } from '../../todos/shared/todo';

@Component({
  selector: 'groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {
	selectedGroup: Group;
	public groups: FirebaseListObservable<Group[]>;
  public todo: FirebaseObjectObservable<Todo>;
  constructor(private groupSvc: GroupService,
  				    private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  	this.groups = this.groupSvc.getGroupsList({limitToLast: 5})
  }

  getGroup(group) {
  	this.selectedGroup = group;
  }

}
