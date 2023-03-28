import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as NavigationActions from './navigation.actions';
import { NavigationEntity } from './navigation.models';

export const NAVIGATION_FEATURE_KEY = 'navigation';

export interface NavigationState extends EntityState<NavigationEntity> {
  selectedId?: string | number; // which Navigation record has been selected
  loaded: boolean; // has the Navigation list been loaded
  error?: string | null; // last known error (if any)
  addButtonHidden?: boolean;
  addEntity?: boolean;
}

export interface NavigationPartialState {
  readonly [NAVIGATION_FEATURE_KEY]: NavigationState;
}

export const navigationAdapter: EntityAdapter<NavigationEntity> =
  createEntityAdapter<NavigationEntity>();

export const initialNavigationState: NavigationState =
  navigationAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialNavigationState,
  on(NavigationActions.initNavigation, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(NavigationActions.loadNavigationSuccess, (state, { navigation }) =>
    navigationAdapter.setAll(navigation, { ...state, loaded: true })
  ),
  on(NavigationActions.loadNavigationFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(NavigationActions.addEntity, (state) => ({
    ...state,
    addEntity: true,
  })),
  on(NavigationActions.addEntitySuccess, (state) => ({
    ...state,
    addEntity: false,
  })),
  on(NavigationActions.addEntityFailure, (state, { error }) => ({
    ...state,
    addEntity: false,
    error,
  })),
  on(NavigationActions.showAddButton, (state) => ({
    ...state,
    addButtonHidden: false,
  })),
  on(NavigationActions.hideAddButton, (state) => ({
    ...state,
    addButtonHidden: true,
  }))
);

export function navigationReducer(
  state: NavigationState | undefined,
  action: Action
) {
  return reducer(state, action);
}
