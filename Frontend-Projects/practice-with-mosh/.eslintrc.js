module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  "parser": "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      "modules": true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console": "off",
    "no-param-reassign": [2, { "props": false }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "object-curly-newline": ["error", { "multiline": true }],
    "object-curly-spacing": ["error", "always"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
