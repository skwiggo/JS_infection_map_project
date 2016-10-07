var Map = require('../models/map')

var UI = function() {  
  var container = document.getElementById('map');
  var center = {lat: 0, lng: 150.644};
  console.log(Map);
  var map = new Map(container, center, 1);
  console.log(map);
}

module.exports = UI;