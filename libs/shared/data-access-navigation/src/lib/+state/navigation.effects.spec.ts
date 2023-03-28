import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as NavigationActions from './navigation.actions';
import { NavigationEffects } from './navigation.effects';

describe('NavigationEffects', () => {
  let actions: Observable<Action>;
  let effects: NavigationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        NavigationEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(NavigationEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: NavigationActions.initNavigation() });

      const expected = hot('-a-|', {
        a: NavigationActions.loadNavigationSuccess({ navigation: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
