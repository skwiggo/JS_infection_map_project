var Map = require('../models/map')

var UI = function() {  
  var container = document.getElementById('map');
  var center = {lat: 0, lng: 150.644};
  var map = new Map(container, center, 1);
  map.addMarker(center);
}

module.exports = UI;