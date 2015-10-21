/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var heroin = __webpack_require__(1);
	function opiate(fn) {
	  return function spread(args) {
	    return heroin(fn, args)();
	  };
	}

	if (typeof window === 'object') {
	  window.opiate = opiate;
	}
	if (true) {
	  module.exports = opiate;
	}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	;(function initHeroin() {
	  'use strict';

	  function getExpectedArguments(fn) {
	    var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
	    var text = fn.toString();
	    var args = text.match(FN_ARGS)[1].split(',');
	    args = args.map(function (name) {
	      return name.trim();
	    });
	    return args;
	  }

	  function heroin(obj, methodName, dependencies) {
	    var original;

	    if (typeof obj === 'function') {
	      original = obj;
	      dependencies = methodName;
	    } else {
	      original = obj[methodName];
	    }

	    dependencies = dependencies || {};

	    var expected = getExpectedArguments(original);

	    var proxy = function () {
	      var runtimeArgs = Array.prototype.slice.call(arguments, 0);
	      var parameters = expected.map(function (name) {
	        if (dependencies.hasOwnProperty(name)) {
	          return dependencies[name];
	        } else {
	          return runtimeArgs.shift();
	        }
	      });
	      // console.log('parameters', parameters);
	      return original.apply(obj, parameters);
	    };

	    if (typeof obj !== 'function') {
	      obj[methodName] = proxy;
	    }
	    return proxy;
	  }

	  if (true) {
	    module.exports = heroin;
	  }
	  if (typeof window === 'object') {
	    /* global window: true */
	    window.heroin = heroin;
	  }
	}());


/***/ }
/******/ ]);