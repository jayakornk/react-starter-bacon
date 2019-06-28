module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'react-app',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-debugger': 0,
    'no-alert': 0,
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.js',
          '.jsx'
        ]
      }
    ],
    'no-unused-vars': [
      1,
      {
        'ignoreSiblings': true,
        'argsIgnorePattern': 'res|next|^err'
      }
    ],
    'prefer-const': [
      'error',
      {
        'destructuring': 'all',
      }
    ],
    'no-console': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': true,
      }
    ],
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
  },
};
