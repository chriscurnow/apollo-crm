import { Action } from '@ngrx/store';

import * as NavigationActions from './navigation.actions';
import { NavigationEntity } from './navigation.models';
import {
  NavigationState,
  initialNavigationState,
  navigationReducer,
} from './navigation.reducer';

describe('Navigation Reducer', () => {
  const createNavigationEntity = (id: string, name = ''): NavigationEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Navigation actions', () => {
    it('loadNavigationSuccess should return the list of known Navigation', () => {
      const navigation = [
        createNavigationEntity('PRODUCT-AAA'),
        createNavigationEntity('PRODUCT-zzz'),
      ];
      const action = NavigationActions.loadNavigationSuccess({ navigation });

      const result: NavigationState = navigationReducer(
        initialNavigationState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = navigationReducer(initialNavigationState, action);

      expect(result).toBe(initialNavigationState);
    });
  });
});
