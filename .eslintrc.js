module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    //'@vue/standard'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-undef': 'off'
  }
}
