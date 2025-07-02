import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';


// Make sure the file './app.config.ts' exists in the same directory.
// If it does not exist, create it or update the path below to the correct location.
import { appConfig } from './app.config';
//import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [

  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
