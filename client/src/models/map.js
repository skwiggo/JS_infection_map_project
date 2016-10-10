var markers = [];

var Map = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
      center: coords, 
      zoom: zoom
    });
  var infowindow = null;
  function getContentString(disease, country) {
    var i = getRandomFact(disease.facts);
    console.log(disease.facts[i].image);
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="heading">'+ disease.name + '</h1>'+
      '<h3 id="subHeading">' + country.name + '</h3>'+
      '<div id="bodyContent">' + disease.facts[i].comment + '</div>' +
      '<img id="infoWindowImage" src="' + disease.facts[i].image + '"/>';
    return contentString;
  }; 

  function getRandomFact(facts){
    return Math.floor((Math.random() * 3));
  }
}

  
  Map.prototype = {
    addMarker: function(country, disease) {
    var customIcon = {
      url: "https://cdn2.iconfinder.com/data/icons/medicine-7/512/sneeze-512.png",
      scaledSize: new google.maps.Size(22, 32)
    }
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
        content: getContentString(disease, country)
      });
      infowindow.open(map, marker);
    });
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


  

  // this.customMarker = function(coords) {
  //   var customIcon = {
  //     url: "https://cdn2.iconfinder.com/data/icons/medicine-7/512/sneeze-512.png",
  //     scaledSize: new google.maps.Size(22, 32)
  //   };
  //   var marker = new google.maps.Marker({position: coords, map: this.googleMap, icon: customIcon
  //   });
  //   return marker;
  // }
// }

module.exports = Map;