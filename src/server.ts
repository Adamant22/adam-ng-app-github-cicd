import { join } from 'node:path';


import express from 'express';
import { Express } from 'express-serve-static-core';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();


/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response: Response | null) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Checks if the current module is the main entry point.
 */
function isMainModule(metaUrl: string): boolean {
  return typeof process.argv[1] === 'string' && process.argv[1] === new URL(metaUrl).pathname;
}

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
export const angularApp = {
  handle: async (req: import('express').Request) => {
    // Implement server-side rendering or request handling logic here
    return null;
  },
};

export function writeResponseToNodeResponse(response: any, res: any) {
  // Implement logic to write the Angular response to the Express response
  res.send(response);
}
function createNodeRequestHandler(app: Express) {
  throw new Error('Function not implemented.');
}

