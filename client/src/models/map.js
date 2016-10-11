var markers = [];

var Map = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
      center: coords, 
      zoom: zoom,
      disableDefaultUI: true
  });
}
  
Map.prototype = {
  getContentString: function(disease, country) {
    var i = this.getRandomFact(disease.facts);
    // console.log(disease.facts[i].image);
    var contentString = '<div id="infoWindowStyles">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="heading">'+ disease.name + '</h1>'+
      '<h3 id="subHeading">' + country.name + '</h3>' +
      '<h3 id="subHeading">' + "Infection Rating: " + country.mortality + '</h3>' +
      '<div id="bodyContent">' + disease.facts[i].comment + '</div>' +
      '<img id="infoWindowImage" src="' + disease.facts[i].image + '"/>';
    return contentString;
  },
  getRandomFact: function(facts){
    return Math.floor((Math.random() * 5));
  },
  addMarker: function(country, map, disease) {
    // console.log(disease)
    var contentio = this.getContentString(disease, country)
    var infowindow = null;
    var customIcon = {
      url: "https://cdn2.iconfinder.com/data/icons/medicine-7/512/sneeze-512.png",
      scaledSize: new google.maps.Size(22, 32)
    };
    var marker = new google.maps.Marker({
      position: country.coords,
      map: this.googleMap,
      icon: customIcon
    });
    markers.push(marker);
    marker.addListener('click', function() {
      if (infowindow) {
        infowindow.close();
      }
      infowindow = new google.maps.InfoWindow({
        content: contentio
      });
      var center = {lat: 42.384902, lng: 11.918695};
      this.googleMap.setCenter(center);
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

module.exports = Map;