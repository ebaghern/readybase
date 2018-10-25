const path = require('path');

module.exports = {
  plugins: {
    'postcss-svg': {
      svgo: process.env.NODE_ENV === 'production',
      dirs: [path.resolve(process.cwd(), 'src/static/images')]
    },
    'postcss-preset-env': {},
    'postcss-font-smoothing': {}
  }
};
