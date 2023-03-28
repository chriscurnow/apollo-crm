import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as CampaignsActions from './campaigns.actions';
import * as CampaignsFeature from './campaigns.reducer';
import { CampaignsService } from './campaigns.service';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';
import { Campaign } from './campaigns.models';



@Injectable()
export class CampaignsEffects {
  private actions$ = inject(Actions);

  constructor(private cs: CampaignsService) {}

  initCampaignList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CampaignsActions.initCampaigns
      ),
      fetch({
        // provides an action
        run: (
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          _action: ReturnType<
            | typeof CampaignsActions.initCampaigns
          >
        ) => {
          return this.cs.getCampaignsList().pipe(
            map((campaigns: Campaign[]) => {
              return CampaignsActions.loadCampaignsSuccess({
                campaigns
              });
            })
          );
        },

        onError: (_action, error: any) => {
          return CampaignsActions.loadCampaignsFailure({ error });
        },
      })
    )
  );
}
