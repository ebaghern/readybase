const path = require('path');

module.exports = (config, configType) => {
  config.output.publicPath =
    configType === 'DEVELOPMENT' ? '' : '/static/storybook/';

  config.resolve.alias = {
    src: path.resolve(__dirname, '../src'),
    components: path.resolve(__dirname, '../src/components'),
    data: path.resolve(__dirname, '../src/data'),
    pages: path.resolve(__dirname, '../src/pages'),
    styles: path.resolve(__dirname, '../src/styles'),
    static: path.resolve(__dirname, '../src/static'),
    images: path.resolve(__dirname, '../src/static/images'),
    lib: path.resolve(__dirname, '../src/lib')
  };

  config.module.rules.push({
    test: /\.(scss|sass|css)$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          data: '@import "styles/defs"; @import "styles/style";',
          includePaths: [path.resolve(__dirname, '../src/')]
        }
      }
    ]
  });

  return config;
};
