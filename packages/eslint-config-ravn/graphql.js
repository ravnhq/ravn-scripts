module.exports = {
  parser: 'babel-eslint',
  plugins: ['graphql'],
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        tagName: 'gql',
      },
    ],
  },
}
