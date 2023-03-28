import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CampaignsActions from './campaigns.actions';
import { Campaign } from './campaigns.models';

export const CAMPAIGNS_FEATURE_KEY = 'campaigns';

export interface CampaignsState extends EntityState<Campaign> {
  selectedId?: string; // which Campaigns record has been selected
  loaded: boolean; // has the Campaigns list been loaded
  error?: string | null; // last known error (if any)
}

export function selectCampaignId(a: Campaign){
  return a.CampaignID;
}

export interface CampaignsPartialState {
  readonly [CAMPAIGNS_FEATURE_KEY]: CampaignsState;
}

export const campaignsAdapter: EntityAdapter<Campaign> =
  createEntityAdapter<Campaign>({
    selectId: selectCampaignId
  });

export const initialCampaignsState: CampaignsState =
  campaignsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialCampaignsState,
  on(CampaignsActions.initCampaigns, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CampaignsActions.loadCampaignsSuccess, (state, { campaigns }) =>{
    return campaignsAdapter.setAll(campaigns, { ...state, loaded: true })}
  ),
  on(CampaignsActions.loadCampaignsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function campaignsReducer(
  state: CampaignsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
