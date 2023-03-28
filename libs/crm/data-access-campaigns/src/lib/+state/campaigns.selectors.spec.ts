import { CampaignsEntity } from './campaigns.models';
import {
  campaignsAdapter,
  CampaignsPartialState,
  initialCampaignsState,
} from './campaigns.reducer';
import * as CampaignsSelectors from './campaigns.selectors';

describe('Campaigns Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCampaignsId = (it: CampaignsEntity) => it.id;
  const createCampaignsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CampaignsEntity);

  let state: CampaignsPartialState;

  beforeEach(() => {
    state = {
      campaigns: campaignsAdapter.setAll(
        [
          createCampaignsEntity('PRODUCT-AAA'),
          createCampaignsEntity('PRODUCT-BBB'),
          createCampaignsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialCampaignsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Campaigns Selectors', () => {
    it('selectAllCampaigns() should return the list of Campaigns', () => {
      const results = CampaignsSelectors.selectAllCampaigns(state);
      const selId = getCampaignsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = CampaignsSelectors.selectEntity(state) as CampaignsEntity;
      const selId = getCampaignsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectCampaignsLoaded() should return the current "loaded" status', () => {
      const result = CampaignsSelectors.selectCampaignsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectCampaignsError() should return the current "error" state', () => {
      const result = CampaignsSelectors.selectCampaignsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
