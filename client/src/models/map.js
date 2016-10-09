var Map = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
      center: coords, 
      zoom: zoom
    });

  var infowindow = null;
  function getContentString(disease){
    console.log(disease);
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="heading">'+ disease.name + '</h1>'+
      '<h3 id="subHeading">Name of Country</h3>'+
      '<div id="bodyContent">' + getRandomFact(disease.facts) + '</div>' +
      '<div id="image">' + disease.facts[0].image + '</div>';
    return contentString;
  } 

  function getRandomFact(facts){
    var i = Math.floor((Math.random() * 3));
    return facts[i].comment;
  }

  this.addMarker = function(coords, disease) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    marker.addListener('click', function() {
      if (infowindow) {
        infowindow.close();
      }
      infowindow = new google.maps.InfoWindow({
        content: getContentString(disease)
      });
      infowindow.open(map, marker);
    });
  }
}

module.exports = Map;