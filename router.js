/*
The Router.js file defines a function to create a router instance with specific configurations.
When you call createRouter(options), it builds & returns a router function that can handle HTTP requests.
The router function has properties like stack, params etc. and inherits methods from proto. 
The result: an object/function that stores routes and knows how to process requests. 
*/

export const proto = {}; // will hold router methods (use, route, handle etc.)

const createRouter = (options = {}) => {
  // input: options object. empty if nothing is passed.
  // three settings flags below that control how the router behaves when matching routes. // false = default values if not provided in options.
  const {
    caseSensitive = false, // if true, router treats URLs as case-sensitive.
    mergeParams = false, // used when you have nested routers. If true, the router will merge the params from the parent router into the child router.
    strict = false, // controls whether a trailing slash matters. if true, router adds a trailing slash to URLs.
  } = options;

  const router = (req, res, next) => {
    router.handle(req, res, next);
  };

  Object.setPrototypeOf(router, proto); // router can now access methods defined in proto object.

  router.params = {};
  router._params = [];
  router.caseSensitive = caseSensitive;
  router.mergeParams = mergeParams;
  router.strict = strict;
  router.stack = []; // really important property. stores list of "layers" (routes + middleware) that the router will use to match incoming requests.

  return router;
};

export default createRouter;
