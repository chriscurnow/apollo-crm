import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as NavigationActions from './navigation.actions';
import * as NavigationFeature from './navigation.reducer';

import { switchMap, catchError, of } from 'rxjs';

@Injectable()
export class NavigationEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NavigationActions.initNavigation),
      switchMap(() =>
        of(NavigationActions.loadNavigationSuccess({ navigation: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(NavigationActions.loadNavigationFailure({ error }));
      })
    )
  );
}
