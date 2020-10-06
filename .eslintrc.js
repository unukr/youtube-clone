module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "prettier/prettier": "off",
    "spaced-comment": "off",
  },
};
