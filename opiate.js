var heroin = require('heroin');
function opiate(fn) {
  return function spread(args) {
    return heroin(fn, args)();
  };
}

if (typeof window === 'object') {
  window.opiate = opiate;
}
if (typeof module === 'object') {
  module.exports = opiate;
}
