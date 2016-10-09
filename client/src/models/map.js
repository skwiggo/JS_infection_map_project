var Map = function(container, coords, zoom) {
  console.log("hi")
  this.googleMap = new google.maps.Map(container, {center: coords, 
    zoom: zoom
  });

  this.addMarker = function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    return marker;
  }

  this.customMarker = function(coords) {
    var customIcon = {
      url: "https://cdn2.iconfinder.com/data/icons/medicine-7/512/sneeze-512.png",
      scaledSize: new google.maps.Size(22, 32)
    };
    var marker = new google.maps.Marker({position: coords, map: this.googleMap, icon: customIcon
    });
    return marker;
  }
}

module.exports = Map;