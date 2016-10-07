var Map = require('../models/map');
var Diseases = require('../models/diseases');

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