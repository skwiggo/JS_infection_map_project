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

	var UI = __webpack_require__(1)
	
	var initialize = function() {
	  new UI();
	}
	
	window.onload = initialize;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(2);
	var Diseases = __webpack_require__(3);
	
	var UI = function() {  
	  var container = document.getElementById('map');
	  var center = {lat: 0, lng: 150.644};
	  var diseases = new Diseases();
	  var map = new Map(container, center, 1);
	  this.getDisease(diseases, map);
	}
	
	UI.prototype = {
	  createMarker: function(coords, map) {
	    console.log(map);
	    map.addMarker(coords);
	  },
	  getDisease: function(diseases, map) {
	    console.log(diseases);
	    for(disease of diseases) {
	      this.getCountry(disease, map);
	    }
	  },
	  getCountry: function(disease, map) {
	    var countries = disease.eighteenthCentury;
	    for(country of countries) {
	      this.createMarker(country.coords, map);
	    }
	  }
	}
	
	
	
	module.exports = UI;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var Map = function(container, coords, zoom) {
	  console.log("hi")
	  this.googleMap = new google.maps.Map(container, {center: coords, 
	    zoom: zoom
	  });
	  this.addMarker = function(coords) {
	    var marker = new google.maps.Marker({
	    position: coords,
	    map: this.googleMap
	  });
	  return marker;
	  }
	}
	
	module.exports = Map;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Disease = __webpack_require__(4);
	
	var Diseases = function() {
	  var tuberculosis = new Disease({
	    name: "Tuberculosis",
	    eighteenthCentury: [
	                {
	                  name: "UK", 
	                  coords: {lat: 55.378051, 
	                           lng: -3.435973},
	                  mortality: "high"             
	                  },  
	                    
	                  { 
	                    name: "France", 
	                    coords: {lat: 46.227638, 
	                             lng: 2.213749},
	                    mortality: "high"             
	                  },
	
	                  {
	                    name: "Spain", 
	                    coords: {lat: 40.463667, 
	                            lng: -3.74922},
	                    mortality: "high"             
	                  }
	                ]
	              });
	
	var yellowFever = new Disease({
	  name: "Yellow Fever",        
	  eighteenthCentury: [
	              {
	                name: "UK", 
	                coords: {lat: 55.378051, 
	                         lng: -3.435973},
	                mortality: "low"             
	              },  
	              
	              { 
	                name: "France", 
	                coords: {lat: 46.227638, 
	                         lng: 2.213749},
	                mortality: "low"             
	              },
	              
	              {
	                name: "Spain", 
	                coords: {lat: 40.463667, 
	                        lng: -3.74922},
	                mortality: "low"             
	              }
	            ]
	          });
	
	  return [tuberculosis, yellowFever];
	}
	
	  module.exports = Diseases;
	


/***/ },
/* 4 */
/***/ function(module, exports) {

	var Disease = function(options){
	  this.name = options.name;
	  this.eighteenthCentury = options.eighteenthCentury;
	}
	
	module.exports = Disease;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map