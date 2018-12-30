module.exports = {
  rootDir: __dirname,
  roots: [__dirname],
  coverageThreshold: null,
  setupTestFrameworkScriptFile: require.resolve('./jest.setup.js'),
  moduleNameMapper: {
    '^.+\\.(css|scss|sass)$': '<rootDir>/__mocks__/__styles.js',
    '^.+\\.(svg)$': '<rootDir>/__mocks__/__svg.js',
  },
  testRegex: '\\.test\\.js$',
  testPathIgnorePatterns: [
    '<rootDir>/public/',
    '<rootDir>/out/',
    '<rootDir>/node_modules/',
    '<rootDir>/.storybook/',
    '<rootDir>/.vscode/',
  ]
};
