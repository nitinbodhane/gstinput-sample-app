import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../organization.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  organizationData = [];
  constructor(private organization: OrganizationService) { }

  ngOnInit() {
    this.getOrganization();
  }

  getOrganization () {
    let organizationId = 649249007;
    this.organization.getOrganizations(organizationId, (err, data) => {
      console.log('In component ', data);
      this.organizationData = data.organizations;
    });
  }
}
