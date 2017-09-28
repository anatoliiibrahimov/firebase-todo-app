import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../user/shared/user';

@Component({
  selector: 'groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {
	selectedGroup: Group;
  public groups: FirebaseListObservable<Group[]>;
  public users: FirebaseListObservable<User[]> = null;
  user: FirebaseObjectObservable<User> = null;
  constructor(private groupSvc: GroupService,
  				    private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.groups = this.groupSvc.getGroupsList({})
    this.users = this.groupSvc.getUsersList({limitToLast: 5})
    console.log(this.users)
    
    
  }

  getGroup(group) {
  	this.selectedGroup = group;
  }

  getUser(group) {
    return this.groupSvc.getUser(group)
  }
  
}
