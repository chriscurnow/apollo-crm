import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UiMainLayoutComponent } from '@apollo-crm/shared/ui-main-layout'
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'apollo-crm-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
  standalone: true,
  imports: [CommonModule, UiMainLayoutComponent, MatTabsModule, RouterModule],
})
export class MainNavigationComponent {
  links = [
    { routerLink: 'app/crm-feature-campaigns', linkName: 'Campaigns' },
    { routerLink: 'app/feature-lists', linkName: 'Lists' },
    {
      routerLink: 'app/feature-subscribers',
      linkName: 'Subscribers',
    },
  ];
  activeLink = this.links[0].routerLink;
  // implements OnInit

  constructor(private router: Router) {

  }
  // ngOnInit(): void {

  // }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  navigate(link: string) {
    this.router.navigate([link])
    this.activeLink = link;
  }
}
