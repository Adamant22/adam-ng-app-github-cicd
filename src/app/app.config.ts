
import { ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';

// Make sure the file './app.routes.ts' exists in the same directory.
// If it does not exist, create it or update the path below to the correct location.
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [

  ]
};
