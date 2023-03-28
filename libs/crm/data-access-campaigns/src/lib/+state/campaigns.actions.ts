import { createAction, props } from '@ngrx/store';
import { Campaign } from './campaigns.models';

export const initCampaigns = createAction('[Campaigns Page] Init');

export const loadCampaignsSuccess = createAction(
  '[Campaigns/API] Load Campaigns Success',
  props<{ campaigns: Campaign[] }>()
);

export const loadCampaignsFailure = createAction(
  '[Campaigns/API] Load Campaigns Failure',
  props<{ error: any }>()
);
