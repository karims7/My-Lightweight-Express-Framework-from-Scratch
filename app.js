const methods = require("methods");

const app = {};

app.init = () => {
  app.cache = {};
  app.engines = {};
  app.settings = {};

  app._router = undefined;
};

const slice = Array.prototype.slice;

methods.forEach((method) => {
  app[method] = (path, ...rest) => {
    app.lazyrouter();

    const route = app._router.route(path);
    route[method](...slice.call(rest, 0));
    return app;
  };
});

export default app;
