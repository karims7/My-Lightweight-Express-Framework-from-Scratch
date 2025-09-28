const methods = require("methods");
const Router = require("./router");
const slice = Array.prototype.slice;
const http = require("http");

/*

We're creating a constant object called app. This will be the main object that represents our application. 
init is a method attached to the app object. Calling "app.init()" will reset the internal state of the application. 
app.cache = {}: creates a fresh empty object to store temporary values. 
app.engines = {}: another empty object for tracking template engines like Pug or EJS.
app.settings = {}: holds config values for the app like port, view path, environment.
app._router = undefined: placeholder for the router instance, which will be attached later when routes are created.

*/
const app = {};

app.init = () => {
  app.cache = {};
  app.engines = {};
  app.settings = {};

  app._router = undefined;
};

app.lazyrouter = () => {
  if (!this._router) {
    this._router = new Router();
  }
};

/*

Implementing HTTP methods.

The METHODS library (we are importing above) returns all the http methods in lowercase. We are also creating a variable called slice which we will use in the whole file. 
The HTTP methods are ['post','put','head','delete','options','trace','copy','lock','mkcol','move','purge','propfind','proppatch','unlock','report','mkactivity','checkout','merge','m-search','notify','subscribe','unsubscribe','patch','search','connect'];
We are iterating over the available methods and creating the functions on app. Inside the function, it calls "this.lazyrouter()" which means for the given application we are going to create a Router. 
We are getting app.get, app.post, app.put etc functions. Each method takes a path and one or additional handler functions as parameters because: "app[method] = (path, ...rest) => { ... }"
lazyrouter() is a function that ensures the app has a router. If not, it creates one. Otherwise, it does nothing. It creates app._router object which is an instance of the Router class. 
Inside it had methods like .route(path) which returns a new Route instance for the given path. Input: a string (path) for example: "/home". Output; a Route object for that path.
So, Route object looks like an object with methods for each HTTP verb: {get: function(), post: function(), put: function(), delete: function(), ...}
So route.get(handler) means “register this handler for GET requests on this path.”

*/

methods.forEach((method) => {
  app[method] = (path, ...rest) => {
    app.lazyrouter();
    const route = app._router.route(path); // call the app._router's route method with the path (eg: "/home"). Creates a new Route object for that path.
    route[method](...slice.call(rest, 0)); // rest is an array of handler functions. slice references the Array.prototype.slice method and it returns a copy of rest starting at 0.
    return app;
  };
});

export default app;
