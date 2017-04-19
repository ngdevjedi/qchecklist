import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-deployment-application',
  templateUrl: './deployment-application.component.html',
  styleUrls: ['./deployment-application.component.scss']
})
export class DeploymentApplicationComponent implements OnInit {

  applications = [];

  constructor() { }

  ngOnInit() {
      this.applications = 
      [ 
          {
            application : "Hiya Pally Application",
            octopusProject : "User Management Application",
            buildSource : "t-fe01\\d_drive\\QpayPub\\ManagementRoot\\User/"          
          },
            {
            application : "Hiya Pally Service",
            octopusProject : "Product Service  Project",
            buildSource : "t-mt01\\d_drive\\QpayPub\\Services\\Product.Service2/"          
          },
            {
            application : "Foor Project 1",
            octopusProject : "Foo Project",
            buildSource : "t-mt01\\d_drive\\QpayPub\\Services\\POS.Service\\"          
          }
      ];

  }

}

/*  MOve to it's own class, once it's working */
