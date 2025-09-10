/**
 * Nothing fancy here — we are exporting the function called `createApplication`.
 *
 * - The function defines a reference called `app`, which itself is a function
 *   expecting `(req, res, next)`.
 * - `req` is the incoming HTTP request.
 * - `res` is the HTTP response object.
 * - `next` is an Express-specific function for passing control to the next middleware.
 *
 * The `createApplication` function returns `app`. This returned `app` is what the
 * end user receives when they call `express()`. Later, we will add methods like
 * `get`, `post`, etc. to this `app` object so it can handle routes.
 *
 * @function createApplication
 * @returns {Function} app - A function `(req, res, next)` that will become the core of the app.
 */

const createApplication = () => {
  const app = (req, res, next) => {};

  return app;
};

export default createApplication;
