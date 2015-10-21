var heroin = require('heroin');
function opiate(fn) {
  return function spread(args) {
    return heroin(fn, args)();
  };
}
module.exports = opiate;