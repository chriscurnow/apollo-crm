import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  NAVIGATION_FEATURE_KEY,
  NavigationState,
  navigationAdapter,
} from './navigation.reducer';

// Lookup the 'Navigation' feature state managed by NgRx
export const selectNavigationState = createFeatureSelector<NavigationState>(
  NAVIGATION_FEATURE_KEY
);

const { selectAll, selectEntities } = navigationAdapter.getSelectors();

export const selectNavigationLoaded = createSelector(
  selectNavigationState,
  (state: NavigationState) => state.loaded
);

export const selectNavigationError = createSelector(
  selectNavigationState,
  (state: NavigationState) => state.error
);

export const selectAllNavigation = createSelector(
  selectNavigationState,
  (state: NavigationState) => selectAll(state)
);

export const selectNavigationEntities = createSelector(
  selectNavigationState,
  (state: NavigationState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectNavigationState,
  (state: NavigationState) => state.selectedId
);

export const selectEntity = createSelector(
  selectNavigationEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

export const selectAddEntity = createSelector(
  selectNavigationState,
  (state: NavigationState) => state.addEntity
);

export const selectIsAddButtonHidden = createSelector(
  selectNavigationState,
  (state: NavigationState) => state?.addButtonHidden
);
