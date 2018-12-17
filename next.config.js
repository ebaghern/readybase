const path = require('path');
const withSass = require('@zeit/next-sass');
const breakpoints = require('./src/lib/data/breakpoints');
const sassBreakpoints = require('./src/lib/utils/breakpointsToString')(
  breakpoints
);
require('dotenv').config();

const spreadEnvVariables = (variables) => {
  let vars = {};
  variables.map((variable) => {
    if (variable === 'NODE_PATH') {
      vars[variable] = path.resolve(__dirname);
    } else {
      vars[variable] = process.env[variable];
    }
  });
  return vars;
};

const publicRuntimeConfig = spreadEnvVariables([]);

const serverRuntimeConfig = spreadEnvVariables([
  'DRIP_API_TOKEN',
  'DRIP_ACCOUNT_ID'
]);

module.exports = withSass({
  serverRuntimeConfig,
  publicRuntimeConfig,
  sassLoaderOptions: {
    data: `$breakpoints: (${sassBreakpoints}); @import "styles/defs";`,
    includePaths: [path.resolve(process.cwd(), 'src')]
  },
  distDir: '../public',
  webpack(cfg) {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();
      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./lib/polyfills.js')
      ) {
        entries['main.js'].unshift('./lib/polyfills.js');
      }

      return entries;
    };

    return cfg;
  }
});
