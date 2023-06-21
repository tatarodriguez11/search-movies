module.exports = {
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
      "^.+\\.svg$": "jest-svg-transformer",
"\\.(css|less|scss)$": "identity-obj-proxy",
},
setupFilesAfterEnv: ['./setupTests.js'],
};