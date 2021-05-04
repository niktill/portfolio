module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['airbnb', 'prettier', 'plugin:vue/essential', '@vue/airbnb'],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'prettier/prettier': ['warn'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-shared-component-data': 'warn',
    indent: 'off',
  },
};
