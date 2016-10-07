var Disease = require("./disease");

var Diseases = function() {
  var tuberculosis = new Disease({
    name: "tuberculosis",
    eighteenthCentury: [{
                  name: "UK", 
                  coords: {lat: 55.378051, 
                           lng: -3.435973},
                  mortality: "high"             
                  },  
                    
                  { 
                    name: "France", 
                    coords: {lat: 46.227638, 
                             lng: 2.213749},
                    mortality: "high"             
                  },

                  {
                    name: "Spain", 
                    coords: {lat: 40.463667, 
                            lng: -3.74922},
                    mortality: "high"             
                  },
                    ]});
  return [tuberculosis];
}

  module.exports = Diseases;

