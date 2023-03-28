import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CAMPAIGNS_FEATURE_KEY,
  CampaignsState,
  campaignsAdapter,
} from './campaigns.reducer';

// Lookup the 'Campaigns' feature state managed by NgRx
export const selectCampaignsState = createFeatureSelector<CampaignsState>(
  CAMPAIGNS_FEATURE_KEY
);

const { selectAll, selectEntities } = campaignsAdapter.getSelectors();

export const selectCampaignsLoaded = createSelector(
  selectCampaignsState,
  (state: CampaignsState) => state.loaded
);

export const selectCampaignsError = createSelector(
  selectCampaignsState,
  (state: CampaignsState) => state.error
);

export const selectAllCampaigns = createSelector(
  selectCampaignsState,
  (state: CampaignsState) => selectAll(state)
);

export const selectCampaignsEntities = createSelector(
  selectCampaignsState,
  (state: CampaignsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectCampaignsState,
  (state: CampaignsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectCampaignsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
