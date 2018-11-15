const path = require('path');
const withSass = require('@zeit/next-sass');
const breakpoints = require('./src/lib/data/breakpoints');
const sassBreakpoints = require('./src/lib/utils/breakpointsToString')(breakpoints);

module.exports = withSass(
  {
    sassLoaderOptions: {
      data: `$breakpoints: (${sassBreakpoints}); @import "styles/defs";`,
      includePaths: [path.resolve(process.cwd(), 'src')]
    },
    distDir: '../public'
  },
  {
    webpack: function(cfg) {
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
  }
);
