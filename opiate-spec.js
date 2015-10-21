require('lazy-ass');

describe('opiate', function () {
  var opiate = require('./opiate');

  function add(a, b) {
    console.log('add a', a, 'b', b);
    return a + b;
  }

  it('is a function', function () {
    la(typeof opiate === 'function');
  });

  it('is curried', function () {
    var wrapped = opiate(add);
    la(typeof wrapped === 'function');
    var sum = wrapped({ a: 10, b: 2 });
    la(sum === 12);
  });

  it('leaves free arguments', function () {
    var wrapped = opiate(add);
    la(typeof wrapped === 'function');
    var result = wrapped({});
    la(isNaN(result), 'undefined + undefined should be NaN', result);
  });
});