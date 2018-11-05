const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  sassLoaderOptions: {
    data: '@import "styles/defs";',
    includePaths: [path.resolve(process.cwd(), 'src')]
  },
  distDir: '../public'
});
