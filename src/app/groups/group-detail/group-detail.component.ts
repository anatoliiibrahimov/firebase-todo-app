import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';

@Component({
  selector: 'group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
	@Input() group: Group;
  constructor(private groupSvc: GroupService) { }

  ngOnInit() {
  }

  updateTimeStamp() {
    let date = new Date().getTime()
    this.groupSvc.updateGroup(this.group.$key, { timeStamp: date })
  }
  
  updateActive(value: boolean) {
    this.groupSvc.updateGroup(this.group.$key, { active: value })
  }

  deleteGroup() {
    this.groupSvc.deleteGroup(this.group.$key)
  }

}
