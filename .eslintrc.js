module.exports = {
  extends: ['airbnb-base', 'plugin:jest/all'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jest/no-hooks': [
      'error',
      {
        allow: ['afterEach', 'afterAll', 'beforeEach', 'beforeAll'],
      },
    ],
  },
  env: {
    'jest/globals': true,
  },
};
