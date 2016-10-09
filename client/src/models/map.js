var Map = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
      center: coords, 
      zoom: zoom
    });

  var infowindow = null;
  function getContentString(disease, country){
    console.log(country);
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="heading">'+ disease.name + '</h1>'+
      '<h3 id="subHeading">' + country.name + '</h3>'+
      '<div id="bodyContent">' + getRandomFact(disease.facts) + '</div>' +
      '<div id="image">' + disease.facts[0].image + '</div>';
    return contentString;
  } 

  function getRandomFact(facts){
    var i = Math.floor((Math.random() * 3));
    return facts[i].comment;
  }

  this.addMarker = function(country, disease) {
    var marker = new google.maps.Marker({
      position: country.coords,
      map: this.googleMap
    });
    marker.addListener('click', function() {
      if (infowindow) {
        infowindow.close();
      }
      infowindow = new google.maps.InfoWindow({
        content: getContentString(disease, country)
      });
      infowindow.open(map, marker);
    });
  }
}

module.exports = Map;