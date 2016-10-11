var Map = require('../models/map');
var Diseases = require('../models/diseases');

var UI = function() {  
  var container = document.getElementById('map');
  var center = {lat: 32.584902, lng: 70.918695};
  var diseaseList = new Diseases();
  this.diseases;
  var map = new Map(container, center, 1);
  map.generate21stCenturyMap();
  map.googleMap.setZoom(2);
  map.generate21stCenturyMap();
  this.loadData(diseaseList, map, this.selectDropdown);

  var slider = document.getElementById('dateslider');
  slider.oninput = function() {
    if (slider.value === '1800') {
        map.generate19thCenturyMap();
      }
      else if (slider.value === '1900') {
        map.generate20thCenturyMap();
      }
      else if (slider.value === '2000') {
        map.generate21stCenturyMap();
     }
      else {
        map.generate22ndCenturyMap();
      }
  };
 
  var resetBtn = document.getElementById('reset');
  resetBtn.onclick = function (){
    map.deleteMarkers();
    var dropdown = document.getElementById('#disease-select').value = "disabled";
    var dropdown2 = document.querySelector('#diseasio-selector');
    dropdown2.style.display = "none";
    dropdown2.value = "disabled";
    var dropdown3 = document.querySelector('#selector-of-diseases');
    dropdown3.style.display = "none";
  };
  
  var viewAllBtn = document.getElementById('view-all');
  viewAllBtn.onclick = function (){
    map.deleteMarkers();
    var dropdown = document.getElementById('#disease-select').value = "disabled";
    var dropdown2 = document.querySelector('#diseasio-selector');
    dropdown2.style.display = "none";
    dropdown2.value = "disabled";
    var dropdown3 = document.querySelector('#selector-of-diseases');
    dropdown3.style.display = "none";
    this.showAll(this.diseases, map);
  }.bind(this);
}

UI.prototype = {
  loadData: function(diseaseList, map, callback){
    diseaseList.all(function(data){
        this.diseases = data;
        callback(map);
    }.bind(UI.prototype));
  },

  selectDropdown: function (map) {
    console.log("dropdown can be selected")
    var diseaseSelector = document.querySelector('#disease-select');
    var diseasioSelector = document.querySelector("#diseasio-selector");
    var selectorOfDiseases = document.querySelector("#selector-of-diseases");

    diseaseSelector.onchange = function() {
      console.log(this, "has been clicked");
      var value = diseaseSelector.selectedIndex;
      var id = "#diseasio-selector"
      this.handleSelectChanged(event, this.diseases, map, value, diseaseSelector, id);
    }.bind(UI.prototype);  
    diseasioSelector.onchange = function(){
      console.log(this, "has been clicked");
        var value = diseasioSelector.selectedIndex;
        var id = "#selector-of-diseases";
        this.handleSelectChanged(event, this.diseases, map, value, diseasioSelector, id);
    }.bind(UI.prototype);
    selectorOfDiseases.onchange = function(){
      console.log(this, "has been clicked");
        var value = selectorOfDiseases.selectedIndex;
        this.handleSelectChanged(event, this.diseases, map, value, selectorOfDiseases);
    }.bind(UI.prototype)
  },
  showAll: function(diseaseList, map){
    for(disease of diseaseList){
      this.getCountry(disease, map);
    }
  },

  handleSelectChanged: function(event, diseases, map, value, select, id) {
    map.deleteMarkers();
    console.log(diseases)
    var option = select.options[value].value;
    for(disease of diseases) { 
      if(option === disease.name) {
        var diseasio = [disease];
        this.getDisease(diseasio, map, id)
      }
    } 
    if(id) this.addDropdown(map, select, id);   
  },
  addDropdown: function(map, select, id) {
    var dropdown = document.querySelector(id);
    dropdown.style.display = "block";
    this.selectDropdown(map);

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
  console.log(disease)
  var slider = document.querySelector('#dateslider'); 
  var countries = disease.presentDay;
  var label = document.getElementById('rangeValLabel');
  var countries = disease.presentDay;
  slider.oninput = function() {
    if (slider.value === '1800') {
        map.deleteMarkers();
        countries = disease.nineteenthCentury;
      }
      else if (slider.value === '1900') {
        map.deleteMarkers();
        countries = disease.twentiethCentury; 
      }
      else if (slider.value === '2000') {
        map.deleteMarkers();
        countries = disease.presentDay;
     }
      else {
        map.deleteMarkers();
        countries = disease.twentySecondCentury;
      }
      label.value = slider.value + "s";   
      for(var i = 0; i < countries.length; i++) { 
        this.createMarker(countries[i], map, disease);    
    }
  }.bind(this);
 }
}

module.exports = UI;
