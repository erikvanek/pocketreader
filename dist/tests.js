/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ava__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ava___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ava__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_feedparser__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_feedparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_feedparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chai__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chai__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_request__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fs__);






const feed = './src/test/ponyFooFeed.xml';

let articlesCounter = 0;
const expectedArticles = [
'Regular Expressions in a post-ES6 world',
'Mixing Generators Into Iterators',
'Observables Proposal for ECMAScript!',
'Variables declared using const are not immutable',
'Content-Security-Policy in Express apps',
'Setting up an Angular 2 Development Environment [SPONSORED]',
'The JavaScript Standard',
'Let’s use const! Here’s why.',
'How Terrible Code Gets Written by Perfectly Sane People',
'Fourth Year in Review'
]

let actualArticles = [];

__WEBPACK_IMPORTED_MODULE_0_ava___default.a.cb.beforeEach(t => {
__WEBPACK_IMPORTED_MODULE_4_fs___default.a.createReadStream(feed)
  .pipe(new __WEBPACK_IMPORTED_MODULE_1_feedparser___default.a())
  .on('readable', function() {
    var stream = this, item;
    while (item = stream.read()) {
      articlesCounter++;
      actualArticles.push(item.title || item.description);
      if (articlesCounter === 10){
      	t.end();
      }
    }
  });
});

__WEBPACK_IMPORTED_MODULE_0_ava___default()('feed parser test', t => {
	t.is(expectedArticles.length,actualArticles.length);
	for (var i = 0; i <= actualArticles.length; i++) {
		t.is(expectedArticles[i],actualArticles[i]);
	}
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ava");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("feedparser");

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })
/******/ ]);