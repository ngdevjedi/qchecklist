import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-deployment-list',
  templateUrl: './deployment-list.component.html',
  styleUrls: ['./deployment-list.component.scss']
})
export class DeploymentListComponent implements OnInit {

  list;

  constructor() { }

  ngOnInit() {
    this.list = [
      {
        title: 'Dep title1',
        dateCreated: '4/14/2017',
        deploymentDate: '4/14/2017',
        deploymentStatus: 'Sample Status'
      },
      {
        title: 'Dep title2',
        dateCreated: '4/14/2017',
        deploymentDate: '4/14/2017',
        deploymentStatus: 'Sample Status'
      },
      {
        title: 'Dep title3',
        dateCreated: '4/14/2017',
        deploymentDate: '4/14/2017',
        deploymentStatus: 'Sample Status'
      },
      {
        title: 'Dep title4',
        dateCreated: '4/14/2017',
        deploymentDate: '4/14/2017',
        deploymentStatus: 'Sample Status'
      }
    ];
  }

}
