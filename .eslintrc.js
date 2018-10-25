module.exports = {
  extends: ['prettier', 'prettier/react'],
  env: {
    node: true,
    browser: true,
    es6: true
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    }
  }
};
