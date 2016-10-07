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
  
}

module.exports = Map;
