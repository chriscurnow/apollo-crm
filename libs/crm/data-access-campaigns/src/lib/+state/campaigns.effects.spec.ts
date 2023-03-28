import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as CampaignsActions from './campaigns.actions';
import { CampaignsEffects } from './campaigns.effects';

describe('CampaignsEffects', () => {
  let actions: Observable<Action>;
  let effects: CampaignsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CampaignsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CampaignsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CampaignsActions.initCampaigns() });

      const expected = hot('-a-|', {
        a: CampaignsActions.loadCampaignsSuccess({ campaigns: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
