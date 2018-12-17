const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const argv = require('minimist')(process.argv.slice(2));
const Router = require('./routes').Router;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';
const port = parseInt(argv.port || process.env.PORT || '3000', 10);
const controllers = require('./controllers');
const logger = require('./utils/logger');

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());

    // Controllers
    controllers.forEach((controller) =>
      server.use(
        `/api/v1/${controller}`,
        require(`./controllers/${controller}`)
      )
    );

    // Routing
    Router.forEachPrettyPattern((page, pattern, defaultParams) =>
      server.get(pattern, (req, res) =>
        app.render(
          req,
          res,
          `/${page}`,
          Object.assign({}, defaultParams, req.query, req.params)
        )
      )
    );
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    // Listening
    server.listen(port, host, (err) => {
      if (err) return logger.error(err.message);
      logger.appStarted(port, prettyHost);
    });
  })
  .catch((ex) => {
    console.error(ex.stack); // eslint-disable-line
    process.exit(1);
  });
