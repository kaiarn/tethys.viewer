module.exports = {
  
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 'prettier/prettier': ['error', { printWidth: 120 }],
    "prettier/prettier": "error",
    "@typescript-eslint/indent": ["error", 4],
    // "@vue-eslint/printWidth": ["error", 120],
  },
};
