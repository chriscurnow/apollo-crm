import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNavigation from './+state/navigation.reducer';
import { NavigationEffects } from './+state/navigation.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromNavigation.NAVIGATION_FEATURE_KEY,
      fromNavigation.navigationReducer
    ),
    EffectsModule.forFeature([NavigationEffects]),
    StoreModule.forFeature(
      fromNavigation.NAVIGATION_FEATURE_KEY,
      fromNavigation.navigationReducer
    ),
  ],
})
export class SharedDataAccessNavigationModule {}
