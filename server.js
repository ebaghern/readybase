const express = require('express');
const next = require('next');
const chalk = require('chalk');
const ip = require('ip');
const argv = require('minimist')(process.argv.slice(2));
const Router = require('./src/controllers/routes').Router;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';
const port = parseInt(argv.port || process.env.PORT || '3000', 10);

// fancy logger!
const divider = chalk.gray('\n-----------------------------------');
const logger = {
  // Called whenever there's an error on the server we want to print
  error: (err) => {
    console.error(chalk.red(err));
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host) => {
    console.log(`Server started ! ${chalk.green('✓')}`);

    console.log(`
${chalk.bold('Access URLs:')}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  }
};

app
  .prepare()
  .then(() => {
    const server = express();

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
    server.listen(port, host, (err) => {
      if (err) return logger.error(err.message);
      logger.appStarted(port, prettyHost);
    });
  })
  .catch((ex) => {
    console.error(ex.stack); // eslint-disable-line
    process.exit(1);
  });
