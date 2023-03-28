import { Action } from '@ngrx/store';

import * as CampaignsActions from './campaigns.actions';
import { CampaignsEntity } from './campaigns.models';
import {
  CampaignsState,
  initialCampaignsState,
  campaignsReducer,
} from './campaigns.reducer';

describe('Campaigns Reducer', () => {
  const createCampaignsEntity = (id: string, name = ''): CampaignsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Campaigns actions', () => {
    it('loadCampaignsSuccess should return the list of known Campaigns', () => {
      const campaigns = [
        createCampaignsEntity('PRODUCT-AAA'),
        createCampaignsEntity('PRODUCT-zzz'),
      ];
      const action = CampaignsActions.loadCampaignsSuccess({ campaigns });

      const result: CampaignsState = campaignsReducer(
        initialCampaignsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = campaignsReducer(initialCampaignsState, action);

      expect(result).toBe(initialCampaignsState);
    });
  });
});
