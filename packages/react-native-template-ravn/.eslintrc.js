module.exports = {
  root: true,
  extends: [
    '@ravn-dev/eslint-config-ravn/react',
    '@ravn-dev/eslint-config-ravn/react-native',
    '@ravn-dev/eslint-config-ravn/jest',
    '@ravn-dev/eslint-config-ravn/base',
    '@ravn-dev/eslint-config-ravn/typescript',
  ],
  rules: {
    'react-native/no-raw-text': [
      'error',
      {
        // Components that are allowed to take text as children
        // prettier-ignore
        skip: [
          'H1','H2','H3','H4','Button1','Button2','Caption1','Caption2','Body1','Body2','Body3',
        ]
      },
    ],
  },
};
