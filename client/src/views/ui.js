var Map = require('../models/map');
var Diseases = require('../models/diseases');

var UI = function() {  
  var container = document.getElementById('map');
  var center = {lat: 32.584902, lng:71.918695};
  var diseaseList = new Diseases();
  this.diseases;
  var map = new Map(container, center, 1);
  map.generate21stCenturyMap();
  map.googleMap.setZoom(2);

  this.loadData(diseaseList, map, this.selectDropdown);
 
  var resetBtn = document.getElementById('reset');
  resetBtn.onclick = function (){
    map.deleteMarkers();
    var dropdown = document.getElementById('#disease-selector').value = "disabled";
    var dropdown2 = document.querySelector('#diseasios');
    dropdown2.style.display = "none";
    dropdown2.value = "disabled";
    var dropdown3 = document.querySelector('#diseasiosios');
    dropdown3.style.display = "none";
  };
  
  var viewAllBtn = document.getElementById('view-all');
  viewAllBtn.onclick = function (){
    map.deleteMarkers();
    var dropdown = document.getElementById('#disease-selector').value = "disabled";
    var dropdown2 = document.querySelector('#diseasios');
    dropdown2.style.display = "none";
    dropdown2.value = "disabled";
    var dropdown3 = document.querySelector('#diseasiosios');
    dropdown3.style.display = "none";
    this.showAll(this.diseases, map);
  }.bind(this);
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
    console.log("dropdown can be selected")
    var self = newThis;
    var diseaseSelector = document.querySelector('#disease-select');
    var diseasioSelector = document.querySelector("#diseasio-selector");
    var selectorOfDiseases = document.querySelector("#selector-of-diseases");

    diseaseSelector.onchange = function() {
      console.log(this, "has been clicked");
      var value = diseaseSelector.selectedIndex;
      var id = "#diseasio-selector"
      self.handleSelectChanged(event, self.diseases, map, value, diseaseSelector, self, id);
    };  
    diseasioSelector.onchange = function(){
      console.log(this, "has been clicked");
        var value = diseasioSelector.selectedIndex;
        var id = "#selector-of-diseases";
        self.handleSelectChanged(event, self.diseases, map, value, diseasioSelector, self, id);
    };
    selectorOfDiseases.onchange = function(){
      console.log(this, "has been clicked");
        var value = selectorOfDiseases.selectedIndex;
        self.handleSelectChanged(event, self.diseases, map, value, selectorOfDiseases, self);
    }
  },
  showAll: function(diseaseList, map){
    for(disease of diseaseList){
      this.getCountry(disease, map);
    }
  },

  handleSelectChanged: function(event, diseases, map, value, select, newThis, id) {
    var self = newThis;
    map.deleteMarkers();
    var option = select.options[value].value;
    for(disease of diseases) { 
      if(option === disease.name) {
        var diseasio = [disease];
        this.getDisease(diseasio, map, id)
      }
    } 
    this.addDropdown(map, select, self, id);
  },
  addDropdown: function(map, select, newThis, id) {
    var self = newThis;
    var dropdown2 = document.querySelector(id);
    dropdown2.style.display = "block";
    this.selectDropdown(map, self);

  },

  createMarker: function(country, map, disease) {
      map.addMarker(country, map, disease);
  },

  getDisease: function(disease, map) { 
    for(diseasio of disease) {
      this.getCountry(diseasio, map);
    }
  },
 
 getCountry: function(disease, map) {
  var slider = document.querySelector('#dateslider'); 
  var countries = disease.nineteenthCentury;
  slider.oninput = function() {
    if (slider.value === '1800') {
        countries = disease.nineteenthCentury;
        map.generate19thCenturyMap();
        map.deleteMarkers();
      }
      else if (slider.value === '1900') {
        countries = disease.twentiethCentury;
        map.generate20thCenturyMap();
        map.deleteMarkers();
      }
      else if (slider.value === '2000') {
        countries = disease.presentDay;
        map.generate21stCenturyMap();
        map.Map();
     }
      else {
        countries; 
        map.generate22ndCenturyMap();
    }
    for(var i = 0; i < countries.length; i++) { 
      this.createMarker(countries[i], map, disease);
    }
  }.bind(this);
 }
}

module.exports = UI;