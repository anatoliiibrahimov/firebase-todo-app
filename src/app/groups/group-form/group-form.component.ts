import { Component, OnInit } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
	group: Group = new Group();

  constructor(private groupSvc: GroupService) { }

  ngOnInit() {
  }

  createGroup() {
    this.groupSvc.createGroup(this.group)
    this.group = new Group()
  }

}
