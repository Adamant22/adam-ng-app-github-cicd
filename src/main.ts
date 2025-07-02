import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';

// Make sure the file exists at this path, or update the path if needed
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
