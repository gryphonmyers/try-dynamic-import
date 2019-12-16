const tap = require('tap');
const tryDynamicImport = require('../index.js').default;

tap.rejects(() => {
  return tryDynamicImport('http://google.com')
})