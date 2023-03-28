import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedFeatureToolbarUserComponent } from '@apollo-crm/shared/feature-toolbar-user'
import { ToolbarFabComponent } from '@apollo-crm/shared/ui-main-layout'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'apollo-crm-ui-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    SharedFeatureToolbarUserComponent,
    ToolbarFabComponent,
    RouterModule,
  ],
  templateUrl: './ui-main-layout.component.html',
  styleUrls: ['./ui-main-layout.component.scss'],
})
export class UiMainLayoutComponent {
  @Input() appName = 'Apollo CRM';
  showAddButton = true;
  year = new Date().getFullYear();
}
