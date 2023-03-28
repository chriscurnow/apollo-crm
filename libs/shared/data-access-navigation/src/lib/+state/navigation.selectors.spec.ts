import { NavigationEntity } from './navigation.models';
import {
  navigationAdapter,
  NavigationPartialState,
  initialNavigationState,
} from './navigation.reducer';
import * as NavigationSelectors from './navigation.selectors';

describe('Navigation Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getNavigationId = (it: NavigationEntity) => it.id;
  const createNavigationEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as NavigationEntity);

  let state: NavigationPartialState;

  beforeEach(() => {
    state = {
      navigation: navigationAdapter.setAll(
        [
          createNavigationEntity('PRODUCT-AAA'),
          createNavigationEntity('PRODUCT-BBB'),
          createNavigationEntity('PRODUCT-CCC'),
        ],
        {
          ...initialNavigationState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Navigation Selectors', () => {
    it('selectAllNavigation() should return the list of Navigation', () => {
      const results = NavigationSelectors.selectAllNavigation(state);
      const selId = getNavigationId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = NavigationSelectors.selectEntity(
        state
      ) as NavigationEntity;
      const selId = getNavigationId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectNavigationLoaded() should return the current "loaded" status', () => {
      const result = NavigationSelectors.selectNavigationLoaded(state);

      expect(result).toBe(true);
    });

    it('selectNavigationError() should return the current "error" state', () => {
      const result = NavigationSelectors.selectNavigationError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
