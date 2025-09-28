# Building Express library from Scratch

To help me understand how express actually works behind the scenes. I will use the same code, variable names etc from express itself.

Outline of what a typical Express app does:

1. Require modules

- const express = require('express');

2. Create the Express app

- const app = express();
  -Configure the app (app.set)

3. Mount middleware (app.use)
4. Mount routes
5. Tell the app to listen on port 3000

- app.listen(3000, function() {
  console.log('Listening on port 3000');
  });
