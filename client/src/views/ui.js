var Map = require('../models/map');
var Diseases = require('../models/diseases');

var UI = function() {  
  var container = document.getElementById('map');
  var center = {lat: 42.384902, lng: 11.918695};
  var diseaseList = new Diseases();
  this.diseases;
  // console.log(this.diseases);
  var map = new Map(container, center, 1);
  map.googleMap.setZoom(2);

  this.loadData(diseaseList, map, this.selectDropdown);

  // this.getDisease(this.diseases, map);
  
}

UI.prototype = {
  loadData: function(diseaseList, map, callback){
    diseaseList.all(function(data){
      var self = this;
        this.diseases = data;
        callback(map, self);
    }.bind(this));
  },
  selectDropdown: function (map, newThis) {
    var self = newThis;
    console.log(self);
    var select = document.querySelector('select');
    select.onchange = function() {
      console.log(select)
      var value = (select.selectedIndex);
      console.log(self);
      self.handleSelectChanged(event, self.diseases, map, value, select);
    }.bind(this);  
  },
  handleSelectChanged: function(event, diseases, map, value, select) {
    console.log(map)
    map.deleteMarkers();
    var option = select.options[value].value;
    console.log(option);
    for(disease of diseases) {  
      if(option === disease.name) {
        console.log(disease)
        var diseasio = [disease];
        this.getDisease(diseasio, map)
      }
    } 
    this.addDropdown(map, select, value);
  },
  addDropdown: function(map, select, value) {
    var dropdown2 = document.querySelector('#diseasios');
    dropdown2.style.visibility = "visible";
    dropdown2.onchange = function(){
      this.handleSelectChangio(event, this.diseases, map, value, select)
    }.bind(this);
  },
  handleSelectChangio: function(event, diseases, map, value, select) {
    map.deleteMarkers();
    var option = select.options[value].value;
    for(disease of diseases) {  
      if(option === disease.name) {
        console.log(disease)
        var diseasio = [disease];
        this.getDisease(diseasio, map)
      }
    } 
    this.addDropdownio(event, diseases, map, value, select);
  },
  addDropdownio: function(event, diseases, map, value, select) {
    var dropdown3 = document.querySelector('#diseasiosios');
    dropdown3.style.visibility = "visible";
    dropdown3.onchange = function() {
      this.handleSelectChangioio(event, this.diseases, map, value, select);
    }.bind(this)
  }, 
  handleSelectChangioio: function(event, diseases, map, value, select) {
    map.deleteMarkers();
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