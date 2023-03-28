import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCampaigns from './+state/campaigns.reducer';
import { CampaignsEffects } from './+state/campaigns.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromCampaigns.CAMPAIGNS_FEATURE_KEY,
      fromCampaigns.campaignsReducer
    ),
    EffectsModule.forFeature([CampaignsEffects]),
    StoreModule.forFeature(
      fromCampaigns.CAMPAIGNS_FEATURE_KEY,
      fromCampaigns.campaignsReducer
    ),
  ],
})
export class CrmDataAccessCampaignsModule {}
