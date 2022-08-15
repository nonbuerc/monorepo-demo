module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: ["prettier"],

  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "vue/no-multiple-template-root": "off", // 关闭多根节点的校验
    "no-console": ["none"]
  }
}
