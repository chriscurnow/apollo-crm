// FROM https://dev.to/ngrx/announcing-ngrx-v15-standalone-apis-type-safe-projectors-component-and-componentstore-updates-and-more-l7
// To improve support for standalone features,
// all NgRx libraries that register functionality in Angular
// have an equivalent provide* API for compatibility with
// building Angular applications with standalone features.



import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideEffects,  } from '@ngrx/effects';
import { routerReducer, provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    // alternative to `StoreModule.forRoot`
    provideStore(),
    // alternative to `StoreRouterConnectingModule.forRoot`
    provideRouterStore(),
    // alternative to `StoreDevtoolsModule.instrument`
    provideStoreDevtools(),
    // alternative to `EffectsModule.forRoot`
    provideEffects([
    // RouterEffects,
    // AuthEffects
    ]),
    importProvidersFrom(BrowserAnimationsModule)
],
}).catch((err) => console.error(err));
