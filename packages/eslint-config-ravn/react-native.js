const { testFiles } = require('./fileBlobs')

module.exports = {
  plugins: ['react-native', 'react-native-a11y'],
  extends: ['./react.js'],
  rules: {
    'no-console': [
      ERROR,
      { allow: ['info', 'warn', 'error', 'ignoredYellowBox'] },
    ],

    'react-native/no-unused-styles': ERROR,
    'react-native/no-raw-text': [
      ERROR,
      {
        // Components that are allowed to take text as children
        // prettier-ignore
        skip: []
      },
    ],
  },
  overrides: [
    {
      /* NOT test files */
      files: ['**/*.ts', '**/*.js', '**/*.tsx'],
      excludedFiles: [...testFiles],
      ...require('eslint-plugin-react-native-a11y/lib/index').configs
        .recommended,
    },
  ],
  env: {
    'react-native/react-native': true,
  },
}
