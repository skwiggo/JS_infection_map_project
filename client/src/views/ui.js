var Map = require('../models/map');
var Diseases = require('../models/diseases');

var UI = function() {  
  var container = document.getElementById('map');
  var center = {lat: 0, lng: 150.644};
  this.diseases = new Diseases();
  var map = new Map(container, center, 1);
  // this.getDisease(this.diseases, map);
  this.selectDropdown(map);
}

UI.prototype = {
<<<<<<< HEAD
  selectDropdown: function (map) {
    var select = document.querySelector('select');
    
    select.onchange = function() {
      var value = (select.selectedIndex);
          console.log(value);

      this.handleSelectChanged(event, this.diseases, map, value, select);
    }.bind(this)
=======
  createMarker: function(country, map, disease) {
    map.addMarker(country, disease);
>>>>>>> de51f4984955c8c4bfbddfd49fb321787b45f629
  },
  handleSelectChanged: function(event, diseases, map, value, select) {
    // var disease = this.diseases[value].name;
    // console.log(disease)
    var option = select.options[value].value;
    console.log(option);
    for(disease of diseases) {
      if(option === disease.name) {
        console.log(disease)
        var diseasio = [disease];
        this.getDisease(diseasio, map)
      }
    } 
  },
  createMarker: function(coords, map) {
    map.customMarker(coords);
  },
  getDisease: function(disease, map) {
    console.log(disease);
    for(diseasio of disease) {
      console.log(diseasio)
      this.getCountry(diseasio, map);
    }
  },
  getCountry: function(disease, map) {
    var countries = disease.nineteenthCentury;
    console.log(disease)
    for(country of countries) {
      this.createMarker(country, map, disease);
    }
  }
}



module.exports = UI;