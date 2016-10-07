/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(3)
	
	var initialize = function() {
	  new UI();
	}
	
	window.onload = initialize;

/***/ },
/* 1 */
/***/ function(module, exports) {

	var Map = function(container, coords, zoom) {
	  console.log("hi")
	  this.googleMap = new google.maps.Map(container, {center: coords, 
	    zoom: zoom
	  });
	  
	}
	
	module.exports = Map;


/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(1)
	
	var UI = function() {  
	  var container = document.getElementById('map');
	  var center = {lat: 0, lng: 150.644};
	  console.log(Map);
	  var map = new Map(container, center, 1);
	  console.log(map);
	}
	
	module.exports = UI;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map