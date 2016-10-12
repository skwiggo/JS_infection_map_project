var Map = require('../models/map');
var Diseases = require('../models/diseases');

var selectedDiseases = [];

var UI = function() {  
  //diseases
  var diseaseList = new Diseases();

  //map
  var container = document.getElementById('map');
  var center = {lat: 32.584902, lng: 70.918695};
  var map = new Map(container, center, 1);
  map.generate21stCenturyMap();
  map.googleMap.setZoom(2);
  map.generate21stCenturyMap();

  this.loadData(diseaseList, map, this.selectDropdown);

  var slider = document.getElementById('dateslider');
  var label = document.getElementById('rangeValLabel');
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
      else if (slider.value === '2100') {
        map.generate22ndCenturyMap();
      }
    label.value = slider.value + "s";
  };

  // UI Elements
  var diseaseSelector = document.getElementById('diseaseSelect');
  var ul = document.getElementById("selectedDiseases");
  var resetBtn = document.getElementById('reset');
  resetBtn.onclick = function (){
    map.deleteMarkers();
    ul.innerHTML = '';
    selectedDiseases = [];
    diseaseSelector.selectedIndex = null;
    for (var i = 0; i < diseaseSelector.options.length; i++){
      diseaseSelector.options[i].disabled = false;
    }
  };
}

UI.prototype = {
  loadData: function(diseaseList, map){
    diseaseList.all(function(data){
        this.diseases = data;
        this.selectDropdown(map);
        this.showAll(map);
        this.sliderUpdated(map);
    }.bind(UI.prototype));
  },
  selectDropdown: function (map) {
      var diseaseSelector = document.getElementById('diseaseSelect');
      diseaseSelector.onchange = function() {
        var disease = this.diseases[diseaseSelector.selectedIndex -1];
        selectedDiseases.push(disease);
        this.addMarkersForDisease(disease, map);
      }.bind(UI.prototype);  
  },
  showAll: function (map) {
    var viewAllBtn = document.getElementById('viewAllBtn');
    var slider = document.getElementById('dateslider');
    viewAllBtn.onclick = function(){
      for (var i = 0; i < this.diseases.length; i++){
        console.log(this.diseases[i].name);
        this.addMarkersForDisease(this.diseases[i], map);
      }
    }.bind(UI.prototype);
  },
  addMarkersForDisease: function(disease, map) {
    var diseaseSelector = document.getElementById('diseaseSelect');
    diseaseSelector.options[diseaseSelector.selectedIndex].disabled = true;
    var listItem = document.createElement("li");
    listItem.innerText = disease.name;
    if(listItem.innerText === "Smallpox") {
      var smallpoxUl = document.getElementById('Smallpox');
      smallpoxUl.appendChild(listItem);
    }
    else if(listItem.innerText === "Tuberculosis") {
      var tuberculosisUl = document.getElementById('Tuberculosis');
      tuberculosisUl.appendChild(listItem);
    }
    else if(listItem.innerText === "HIV/AIDS") {
      var hivAidsUl = document.getElementById('HIV');
      hivAidsUl.appendChild(listItem);
    }
    else {
      var zikaUl = document.getElementById('Zika');
      zikaUl.appendChild(listItem);
    }    
    var label = document.getElementById('rangeValLabel');
    var slider = document.getElementById('dateslider');
    var countries = getCountries(slider.value, disease);
    for (var i = 0; i < countries.length; i++){
      map.addMarker(countries[i], map, disease);
    } label.value = slider.value + "s";
  },
  sliderUpdated: function(map){
    var slider = document.getElementById('dateslider');
    var label = document.getElementById('rangeValLabel');
    slider.oninput = function() {
      map.deleteMarkers();
      updateMap(slider.value, map);
      for (var i = 0; i < selectedDiseases.length; i++){
        var countries = getCountries(slider.value, selectedDiseases[i]); 
        for (var c = 0; c < countries.length; c++){
          map.addMarker(countries[c], map, selectedDiseases[i]);
        } 
      }label.value = slider.value + "s";
    }
  }
}

function getCountries(century, disease){
  var c;
  switch(century){
    case '1800': 
      c = disease.nineteenthCentury;
      break; 
    case '1900': 
      c = disease.twentiethCentury;
      break;
    case '2000': 
      c = disease.presentDay;
      break;
    case '2100': 
      c = disease.twentySecondCentury;
      break;  
  }
  return c;
}

function updateMap(century, map){
  switch(century){
    case '1800': 
      map.generate19thCenturyMap();
      break; 
    case '1900': 
      map.generate20thCenturyMap();
      break;
    case '2000': 
      map.generate21stCenturyMap();
      break;
    case '2100': 
      map.generate22ndCenturyMap();
      break;  
  }
}

module.exports = UI;