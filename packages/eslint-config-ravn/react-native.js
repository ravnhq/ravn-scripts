module.exports = {
  extends: ['./react.js'],
  plugins: ['react-native'],
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'no-console': [
      'error',
      { allow: ['info', 'warn', 'error', 'ignoredYellowBox'] },
    ],

    'react-native/no-unused-styles': 'error',
    'react-native/no-raw-text': [
      'error',
      {
        // Should be set in the project config
        skip: [],
      },
    ],
  },
}
