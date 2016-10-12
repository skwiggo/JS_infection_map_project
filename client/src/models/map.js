var markers = [];
var infowindow = null;

var Map = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
      center: coords, 
      zoom: zoom,
      disableDefaultUI: true 
       });
   }

Map.prototype = {
  generate19thCenturyMap: function(map) {
    this.googleMap.set('styles', [
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          { color: '#7f9eb2' },
          { saturation: -50 },
          { invert_lightness: false }
        ]
      }, {
        featureType: 'landscape.natural.landcover',
        elementType: 'geometry.fill',
        stylers: [
          { color: '#fcbe32'},
          { saturation: -50 },
          { invert_lightness: false }
        ]
      }, {
        featureType: 'landscape.natural.terrain',
        elementType: 'geometry.fill',
        stylers: [
          { hue: '#3F4B3B' },
          { gamma: 6 },
          { saturation: -100 },
          { lightness: 0 }
        ]
      }
    ])
  },
  generate20thCenturyMap: function(map) {
    this.googleMap.set('styles', [
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          { color: '#4ea1d3' },
          { saturation: -50 },
          { invert_lightness: false }
        ]
      }, {
        featureType: 'landscape.natural.landcover',
        elementType: 'geometry.fill',
        stylers: [
          { color: '#4f953b'},
          { saturation: -50 },
          { invert_lightness: false }
        ]
      }, {
        featureType: 'landscape.natural.terrain',
        elementType: 'geometry.fill',
        stylers: [
          { hue: '#3F4B3B' },
          { gamma: 6 },
          { saturation: -100 },
          { lightness: 0 }
        ]
      }
    ])
  },
  generate21stCenturyMap: function(map) {
    this.googleMap.set('styles', [
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          { color: '#5A9367' },
          { weight: 10 }
        ]
      }, {
        featureType: 'landscape.natural.landcover',
        elementType: 'geometry.fill',
        stylers: [
          { color: '#3F4B3B'},
          { saturation: -100 },
          { invert_lightness: false }
        ]
      }, {
        featureType: 'landscape.natural.terrain',
        elementType: 'geometry.fill',
        stylers: [
          { hue: '#3F4B3B' },
          { gamma: 1.4 },
          { saturation: -100 },
          { lightness: 0 }
        ]
      }
    ])
  },
  generate22ndCenturyMap: function(map) {
    this.googleMap.set('styles', [
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          { color: '#a6172d' },
          { saturation: -50 },
          { invert_lightness: false }
        ]
      }, {
        featureType: 'landscape.natural.landcover',
        elementType: 'geometry.fill',
        stylers: [
          { color: '#8c9184'},
          { saturation: -100 },
          { invert_lightness: false }
        ]
      }, {
        featureType: 'landscape.natural.terrain',
        elementType: 'geometry.fill',
        stylers: [
          { hue: '#8c9184' },
          { gamma: 6 },
          { saturation: -100 },
          { lightness: 0 }
        ]
      }
    ])
  },
  getContentString: function(disease, country) {
      var i = this.getRandomFact(disease.facts);
      console.log(disease.facts)
      var contentString = '<div id="infoWindowStyles">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<div id="headingDiv">' +
        '<h3 id="heading">' + disease.name + '</h3>' +
        '</div>' +
        '<div id="subheadingDiv">' +
        '<h4 id="subHeading">' + country.name + '</h4>' +
        '<h4 id="subHeading">' + "Infection Rate: " + country.mortality.toUpperCase() + '</h4>' +
        '</div>' +
        '<div id="infoWindowImageDiv">' +
        '<img id="infoWindowImage" src="' + disease.facts[i].image + '"/>' +
        '</div>' +
        '<div id="bodyContentDiv">' + disease.facts[i].comment + '</div>' 
        ;
      return contentString;
    },
  getRandomFact: function(facts){
    return Math.floor((Math.random() * 5));
  },
  markerOffset: function(){
    var rng = Math.floor(Math.random() * 2);
    var offset = Math.random() * 3;
    // console.log(rng)
    if(rng === 1) return offset * -1;
    // console.log(offset)
    return offset;
  },
  addMarker: function(country, map, disease) {
    console.log(disease.name)
    var contentio = this.getContentString(disease, country);
    var latOffset = this.markerOffset();
    var lngOffset = this.markerOffset();
    var coords = {lat: (country.coords.lat + latOffset), lng: (country.coords.lng + lngOffset)};
    var customIcon = {
      url: setIcon(disease.name),
      // TODO: update when century becomes selectable
      scaledSize: setIconSize(country.mortality)
    };
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      icon: customIcon
    });
    markers.push(marker);
    marker.addListener('click', function() {
      if (infowindow) {
        infowindow.close();
      }
      infowindow = new google.maps.InfoWindow({
        content: contentio,
        position: {lat: 32.584902, lng: 70.918695},
        disableAutoPan: true
      });
      infowindow.open(map, marker);  
    }.bind(this));
  },
  setMapOnAll: function(map) {
    for(var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  },
  clearMarkers: function() {
    this.setMapOnAll(null);
  },
  deleteMarkers: function() {
    this.clearMarkers();
    markers = [];
  }
}

function setIcon(diseaseName){
  console.log(diseaseName)
  switch(diseaseName.toLowerCase()){
    case "tuberculosis": 
      return "http://i.imgur.com/B8rOsNP.png";
      break;
    case "smallpox": 
      return "http://i.imgur.com/jyZWRe6.png";
      break;
    case "hiv-aids": 
      return "http://i.imgur.com/VQht9IV.png";
      break;
    case "zika": 
      return "http://i.imgur.com/2dVBZGd.png";
      break;
    case "zombies": 
      return "https://cdn4.iconfinder.com/data/icons/aami-flat-smileys/64/smile-61-512.png";
      break;
    default:
      return null;
      break; 
  }
}

function setIconSize(mortality){
  switch(mortality){
    case "low": 
      return new google.maps.Size(18, 22);
      break;
    case "medium": 
      return new google.maps.Size(28, 32);
      break;
    case "high": 
      return new google.maps.Size(32, 42);
      break;
    default: 
      return new google.maps.Size(22, 32);
      break;
  }
}

module.exports = Map;