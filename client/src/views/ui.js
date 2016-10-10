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
    var select = document.querySelector('select');
    select.onchange = function() {
      
      var value = (select.selectedIndex);
      
      self.handleSelectChanged(event, self.diseases, map, value, select);
    }.bind(this);  
  },
  handleSelectChanged: function(event, diseases, map, value, select) {
    map.deleteMarkers();
    var option = select.options[value].value;
    for(disease of diseases) {  
      if(option === disease.name) {
        
        var diseasio = [disease];
        this.getDisease(diseasio, map)
      }
    } 
    this.addDropdown(map, select, value);
  },

  addDropdown: function(map, select) {
    var dropdown2 = document.querySelector('#diseasios');
    dropdown2.style.display = "block";
    dropdown2.onchange = function(){
      var value = (dropdown2.selectedIndex);
      this.handleSelectChangio(event, this.diseases, map, value, dropdown2)
    }.bind(this);

  },
  handleSelectChangio: function(event, diseases, map, value, dropdown2) {
    map.deleteMarkers();
    var option = dropdown2.options[value].value;
    for(disease of diseases) {  
      if(option === disease.name) {
        console.log(disease)
        var diseasio = [disease];
        this.getDisease(diseasio, map)
      }
    } 
    this.addDropdownio(event, diseases, map, value);
  },
  addDropdownio: function(event, diseases, map) {
    var dropdown3 = document.querySelector('#diseasiosios');
    dropdown3.style.display = "block";
    dropdown3.onchange = function() {
      var value = (dropdown3.selectedIndex);
      this.handleSelectChangioio(event, this.diseases, map, value, dropdown3);
    }.bind(this)
  }, 
  handleSelectChangioio: function(event, diseases, map, value, dropdown3) {
    map.deleteMarkers();
    var option = dropdown3.options[value].value;
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
      map.addMarker(country, map, disease);
  },
  getDisease: function(disease, map) { 
    for(diseasio of disease) {
      console.log(diseasio)
      this.getCountry(diseasio, map);
    }
  },
  getCountry: function(disease, map) {
    var slider = document.getElementById("dateslider");
    var countries = disease.nineteenthCentury;
    if (slider.value === "2") {
      countries = disease.twentiethCentury;
      console.log(countries);
    }
    else if (slider.value === "3") {
      countries = disease.presentDay;
      console.log(countries);
    }
    else {
      return countries
      console.log(countries);
    }
    for(country of countries) {
      this.createMarker(country, map, disease);
    }
  }
}

module.exports = UI;