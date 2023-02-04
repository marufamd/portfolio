module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'neon/common',
    'neon/browser',
    'neon/typescript',
    'neon/react',
    'neon/prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  ignorePatterns: ['*.js'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'semi': 1,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'unicorn/prefer-query-selector': 0,
    'react/jsx-sort-props': 0,
    'typescript-sort-keys/interface': 0
  }
}
