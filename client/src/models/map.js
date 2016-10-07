var Map = function(container, coords, zoom) {
  console.log("hi")
  this.googleMap = new google.maps.Map(container, {center: coords, 
    zoom: zoom
  });
  
}

module.exports = Map;
