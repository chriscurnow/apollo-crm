import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsService } from '@apollo-crm/crm/data-access-campaigns';
import { Store } from '@ngrx/store';
// import { CampaignsPartialState,
//          initCampaigns
// } from '@apollo-crm/ crm/data-access-campaigns';

import { CampaignsPartialState, initCampaigns, CampaignsActions, selectAllCampaigns } from '@apollo-crm/crm/data-access-campaigns';
import { Campaign } from '@apollo-crm/crm/data-access-campaigns';


@Component({
  selector: 'apollo-crm-crm-feature-campaigns',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crm-feature-campaigns.component.html',
  styleUrls: ['./crm-feature-campaigns.component.scss'],
})
export class CrmFeatureCampaignsComponent implements OnInit{


  constructor(private store: Store<CampaignsPartialState>){
  //  this.store.select(selectAllCampaigns)
  //   .subscribe((campaigns: Campaign[]) => {
  //     console.log('Campaigns returned', campaigns)
  //   })
  }
  ngOnInit(){
    this.store.dispatch(CampaignsActions.initCampaigns());
  }
}
