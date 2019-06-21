module.exports = {
  rootDir: '../../',
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: [
    '@testing-library/react-native/cleanup-after-each',
    '<rootDir>/config/jest/expect.setup.ts',
    '<rootDir>/config/jest/jest.setup.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,js,tsx,jsx}'],
}
