import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
	@Input() group: Group;
  id: any;
  constructor(private groupSvc: GroupService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.groupSvc.getGroup(this.group, this.id).subscribe(data => {
      
      this.group = data;
      console.log(data);
    })
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
