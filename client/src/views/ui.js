var Map = require('../models/map');
var Diseases = require('../models/diseases');

var UI = function() {  
  var container = document.getElementById('map');
  var center = {lat: 42.384902, lng: 11.918695};
  this.diseases = new Diseases();
  var map = new Map(container, center, 1);
  map.googleMap.setZoom(2);

  // this.getDisease(this.diseases, map);
  this.selectDropdown(map);
}

UI.prototype = {
  selectDropdown: function (map) {
    var select = document.querySelector('select');
    select.onchange = function() {
      var value = (select.selectedIndex);
          console.log(value);
      this.handleSelectChanged(event, this.diseases, map, value, select);
    }.bind(this)  
  },
  handleSelectChanged: function(event, diseases, map, value, select) {
    map.deleteMarkers();
    this.addDropdown();
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
  generateSelect: function() {
    var dropDown = document.createElement('select');
    dropDown.classList.add('diseases')
    return dropDown;
  },
  generateOption: function(text) {
    var option = document.createElement('option');
    option.innerText = text;
    return option;
  },
  appendElements: function(select, tb, smallPox, zika, hiv) {
    var div = document.querySelector('#mySidenav');
    div.appendChild(select)
    select.appendChild(hiv);
    select.appendChild(tb);
    select.appendChild(smallPox);
    select.appendChild(zika);
  },
  addDropdown: function() {
    var select = this.generateSelect();
    var tb = this.generateOption("tb");
    var smallPox = this.generateOption("smallpox");
    var zika = this.generateOption("zika");
    var hiv = this.generateOption("hiv");
    this.appendElements(select, tb, smallPox, zika, hiv);

  },
  createMarker: function(country, map, disease) {
    console.log(disease);
      map.addMarker(country, map, disease);
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