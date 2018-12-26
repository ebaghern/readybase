module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            { removeAttrs: { attrs: '(data-name)' } },
            { removeMetadata: true },
            //{ removeTitle: true },
            { cleanupIDs: true },
            { inlineStyles: true },
            { mergePaths: false },
          ],
        },
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          components: './src/components',
          context: './src/context',
          data: './src/data',
          pages: './src/pages',
          server: './src/server',
          styles: './src/styles',
          static: './src/static',
          images: './src/static/images',
          lib: './src/lib',
        },
      },
    ],
  ],
};
