module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "globals": {
    "route": true,
    "axios": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "vue",
    "promise",
  ],
  "rules": {
    "linebreak-style": [
      "error",
      "unix",
    ],
    "quotes": [
      "error",
      "double",
    ],
    "semi": [
      "error",
      "always",
    ],
    "vue/no-multiple-template-root": 0,
    "vue/multi-word-component-names": 0,
    "vue/require-prop-types": 0,
    "vue/html-closing-bracket-newline":
      ["error", {
        "singleline": "never",
        "multiline": "never",
      }],
    "vue/max-attributes-per-line": [
      "error",
      {
        "singleline": 3,
        "multiline": 2,
      },
    ],
    "vue/no-unused-components": [
      "warn",
    ],
    "vue/no-v-html": 2,
    "no-multiple-empty-lines": [
      "error", {
        "max": 1,
      },
    ],
    "comma-dangle": ["error", "always-multiline"],
    "no-unused-vars": ["warn"],
    "lines-around-comment": ["off"],
    "no-trailing-spaces": ["warn"],
    "template-curly-spacing": ["off"],
    "indent": [
      "error",
      2,
      {
        "ignoredNodes": [
          "TemplateLiteral",
        ],
        "SwitchCase": 1,
      },
    ],
    "prefer-const": 2,
    "prefer-arrow-callback": 1,
    "no-empty-function": 1,
    "no-var": 2,
    "no-console": [
      "warn",
      {
        "allow": ["error", "warn", "group", "groupEnd"],
      },
    ],
    "promise/prefer-await-to-then": 1,
  },
};
