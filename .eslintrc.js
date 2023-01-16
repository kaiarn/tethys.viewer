// https://npmmirror.com/package/@typescript-eslint/eslint-plugin/v/5.0.1-alpha.14
module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    env: {
        es6: true,
        node: true,
    },
    // extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/typescript/recommended", "@vue/prettier", "@vue/prettier/@typescript-eslint"],
    extends: [
        // "plugin:vue/vue3-essential",
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended",
        // "plugin:@typescript-eslint/recommended",

        // "plugin:prettier/recommended",
        "@vue/prettier",
        // "@vue/prettier/@typescript-eslint"
    ],
    // plugins: ["@typescript-eslint"],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        // parser: "@typescript-eslint/parser",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "@typescript-eslint/indent": ["error", 4, { ignoredNodes: ["PropertyDefinition"] }],
        "arrow-parens": "off",
        semi: "error",
        // "@vue-eslint/printWidth": ["error", 120],
        "vue/v-bind-style": ["warn", "longform"], //autofix
        "vue/prop-name-casing": ["error", "camelCase"],
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/attribute-hyphenation.md
        "vue/attribute-hyphenation": [
            "error",
            "never",
            {
                ignore: [],
            },
        ],

        // 'prettier/prettier': ['error', { printWidth: 120 }],
        //  "prettier/prettier": "error",
        "prettier/prettier": ["error", { singleQuote: false }],
    },
};
