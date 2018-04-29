// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'for-direction': 'error',
    // 'no-cond-assign': 'always',
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-extra-semi': 2,
    //'no-unused-vars': 'error',
    //'capitalized-comments': ['error', 'always'],
    //'semi': [2, 'always'],
    'space-before-function-paren': [2, 'always']
  }
};
