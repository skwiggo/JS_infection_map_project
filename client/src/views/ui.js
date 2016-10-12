var Map = require('../models/map');
var Diseases = require('../models/diseases');

var selectedDiseases = [];

var UI = function() {  
  this.diseases;
  var diseaseList = new Diseases();
  this.buttonPressed = false;
  // var selectedDiseases = []; 

  //map
  var container = document.getElementById('map');
  var chart = document.getElementById('chart');
  var center = {lat: 32.584902, lng: 70.918695};
  var map = new Map(container, center, 1);
<<<<<<< HEAD
=======
  map.generate21stCenturyMap();
>>>>>>> develop
  map.googleMap.setZoom(2);
  map.generate21stCenturyMap();

  this.loadData(diseaseList, map, this.selectDropdown);

  var chartbtn = document.getElementById('myonoffswitch');
  chartbtn.onclick = function() {
    if (chart.style.visibility == 'visible') {
     chart.style.visibility = 'hidden';  
    }
    else {
      chart.style.visibility = "visible";
    }
  }

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
        for (var disease of this.diseases) {
          if (disease.name === "Zombies") {
            this.addMarkersForDisease(disease, map)
          }
        }
      }
    label.value = slider.value + "s";
  };

  // UI Elements
  var diseaseSelector = document.getElementById('diseaseSelect');
  var resetBtn = document.getElementById('reset');
  resetBtn.onclick = function (){
<<<<<<< HEAD
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
};
=======
    this.removeMapMarkers(map);
    // console.log("reset button context - ", this)
    this.buttonPressed = false;
    this.htmlUpdate();
    // console.log(this.buttonPressed);
    selectedDiseases = [];
    diseaseSelector.selectedIndex = null;
    for (var i = 0; i < diseaseSelector.options.length; i++){
      diseaseSelector.options[i].disabled = false;
    }
  }.bind(UI.prototype);
}
>>>>>>> develop

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
        console.log(selectedDiseases)
      if(selectedDiseases.length >= 4){
        console.log("triggered")
        this.htmlUpdate();
      this.buttonPressed = false;
      
      this.removeMapMarkers(map);
      selectedDiseases = [];
    }
        var disease = this.diseases[diseaseSelector.selectedIndex -1];
        // console.log(disease)
        selectedDiseases.push(disease);
        console.log(diseaseSelector.value)
        this.addMarkersForDisease(disease, map);
      }.bind(UI.prototype);  
  },
  showAll: function (map) {
    var viewAllBtn = document.getElementById('viewAllBtn');
    var slider = document.getElementById('dateslider');
    viewAllBtn.onclick = function(){
        // console.log(this.buttonPressed);
      if(this.buttonPressed != true){
        // console.log(this.buttonPressed);
      this.htmlUpdate();
      this.removeMapMarkers(map);
        for (var i = 0; i < this.diseases.length; i++){
          // console.log(this.diseases[i].name);
          console.log(this.diseases);
          this.addMarkersForDisease(this.diseases[i], map);
          selectedDiseases.push(this.diseases[i]);

        }
      }
      this.buttonPressed = true;
      this.sliderUpdated(map);
    }.bind(UI.prototype);
  },
  htmlUpdate: function(){
    var div = document.getElementById("selectedDiseases");
    div.innerHTML = "";
    this.addOutputs(div);
    var diseaseSelector = document.getElementById('diseaseSelect');
    for (var i = 0; i < diseaseSelector.options.length; i++){
      diseaseSelector.options[i].disabled = false;
    }
  },
<<<<<<< HEAD

  handleSelectChanged: function(event, diseases, map, value, select, id) {
    console.log(diseases)
    var option = select.options[value].value;
    for(disease of diseases) { 
      if(option === disease.name) {
        var diseasio = [disease];
        this.getDisease(diseasio, map, id)
      }
    } 
    if(id) this.addDropdown(map, select, id);   
=======
  addOutputs: function(div){
    for(var disease of this.diseases){
      var ul = this.createUl(disease);
      // console.log(ul)
      div.appendChild(ul);
    }
>>>>>>> develop
  },
  createUl: function(disease){
    var ul = document.createElement("ul");
    ul.id = disease.name;
    console.log(ul)
    return ul;
  },
<<<<<<< HEAD

  createMarker: function(country, map, disease) {
       var slider = document.querySelector('#dateslider'); 
       map.addMarker(country, map, disease);
=======
  removeMapMarkers: function(map){
    map.deleteMarkers();
>>>>>>> develop
  },
  addMarkersForDisease: function(disease, map) {
    console.log(disease)
    var diseaseSelector = document.getElementById('diseaseSelect');
    diseaseSelector.options[diseaseSelector.selectedIndex].disabled = true;
    var listItem = document.createElement("li");
    listItem.innerText = disease.name;
    if(listItem.innerText === "Smallpox") {
      var outputDiseases = document.getElementById("selectedDiseases");
      var smallpoxUl = document.getElementById('Smallpox');
      smallpoxUl.appendChild(listItem);
    }
    else if(listItem.innerText === "Tuberculosis") {
      var tuberculosisUl = document.getElementById('Tuberculosis');
      tuberculosisUl.appendChild(listItem);
    }
    else if(listItem.innerText === "HIV-AIDS") {
      var hivAidsUl = document.getElementById('HIV-AIDS');
      hivAidsUl.appendChild(listItem);
    }
    else if(listItem.innerText === "Zika") {
      var zikaUl = document.getElementById('Zika');
      zikaUl.appendChild(listItem);
    }    
    var label = document.getElementById('rangeValLabel');
    var slider = document.getElementById('dateslider');
    var countries = getCountries(slider.value, disease);
    console.log(disease);
    for (var i = 0; i < countries.length; i++){
      map.addMarker(countries[i], map, disease);
    } label.value = slider.value + "s";
  },
<<<<<<< HEAD

 getCountry: function(disease, map) {
  console.log(disease)
  var slider = document.querySelector('#dateslider'); 
  var label = document.getElementById('rangeValLabel');
  var countries = disease.presentDay;
  slider.oninput = function() {
    if (slider.value === '1800') {
        map.generate19thCenturyMap();
        countries = disease.nineteenthCentury;
      }
      else if (slider.value === '1900') {
        map.generate20thCenturyMap();
        countries = disease.twentiethCentury; 
      }
      else if (slider.value === '2000') {
        map.generate21stCenturyMap();
        countries = disease.presentDay;
     }
      else {
        map.generate22ndCenturyMap();
        countries = disease.twentySecondCentury;
      }
      label.value = slider.value + "s";   
      for(var i = 0; i < countries.length; i++) { 
        this.createMarker(countries[i], map, disease);
    }
  }.bind(this);

 }
=======
  sliderUpdated: function(map){
    var slider = document.getElementById('dateslider');
    var label = document.getElementById('rangeValLabel');
    slider.oninput = function() {
      this.removeMapMarkers(map);
      updateMap(slider.value, map);
      if (slider.value === '2100') {
        for (var disease of this.diseases) {
          if (disease.name === "Zombies") {
            this.addMarkersForDisease(disease, map)
          }
        }
      }
      for (var i = 0; i < selectedDiseases.length; i++){
        var countries = getCountries(slider.value, selectedDiseases[i]); 
        for (var c = 0; c < countries.length; c++){
          map.addMarker(countries[c], map, selectedDiseases[i]);
        } 
      }
      label.value = slider.value + "s";
    }.bind(this);
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
>>>>>>> develop
}

module.exports = UI;