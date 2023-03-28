import { Route } from '@angular/router';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

export const appRoutes: Route[] = [
  {
    path: 'app',
    component: MainNavigationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'crm-feature-campaigns',
      },

      {
        path: 'crm-feature-campaigns',
        loadChildren: () =>
          import('@apollo-crm/crm/feature-campaigns').then(
            (m) => m.crmFeatureCampaignsRoutes
          ),
      },
      {
        path: 'feature-subscribers',
        loadChildren: () =>
          import('@apollo-crm/crm/feature-subscribers').then(
            (m) => m.crmFeatureSubscribersRoutes
          ),
      },
      {
        path: 'feature-lists',
        loadChildren: () =>
          import('@apollo-crm/crm/feature-lists').then(
            (m) => m.crmFeatureListsRoutes
          ),
      },
    ],
  },
];
