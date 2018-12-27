const path = require('path');
const withSass = require('@zeit/next-sass');
const breakpoints = require('./src/lib/data/breakpoints');
const sassBreakpoints = require('./src/lib/utils/breakpointsToString')(
  breakpoints
);
require('dotenv').config();

const spreadEnvVariables = (variables = []) =>
  variables.reduce((obj, variable) => {
    return {
      ...obj,
      [variable]:
        variable === 'NODE_PATH'
          ? path.resolve(__dirname)
          : process.env[variable],
    };
  }, {});
const publicRuntimeConfig = spreadEnvVariables([]);
const serverRuntimeConfig = spreadEnvVariables([
  'DRIP_API_TOKEN',
  'DRIP_ACCOUNT_ID',
]);

module.exports = withSass({
  serverRuntimeConfig,
  publicRuntimeConfig,
  sassLoaderOptions: {
    data: `$breakpoints: (${sassBreakpoints}); @import "styles/defs";`,
    includePaths: [path.resolve(process.cwd(), 'src')],
  },
  distDir: '../public',
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
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
  },
});
