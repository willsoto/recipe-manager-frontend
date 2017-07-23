const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'build', 'webpack.base.conf.js')
      }
    }
  },
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:vue/recommended'],
  plugins: ['html', 'import'],
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    quotes: ['error', 'single'],
    semi: 2,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never'
      }
    ],
    'no-console': 1,
    // allow debugger during development
    'no-debugger': isProduction ? 2 : 1,
    'no-unused-vars': isProduction ? 2 : 1
  }
};
