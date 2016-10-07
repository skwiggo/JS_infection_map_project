var Disease = require("./disease");

var Diseases = function() {
  var tuberculosis = new Disease({
    name: "Tuberculosis",
    eighteenthCentury: [
                {
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
                  }
                ]
              });

var yellowFever = new Disease({
  name: "Yellow Fever",        
  eighteenthCentury: [
              {
                name: "UK", 
                coords: {lat: 55.378051, 
                         lng: -3.435973},
                mortality: "low"             
              },  
              
              { 
                name: "France", 
                coords: {lat: 46.227638, 
                         lng: 2.213749},
                mortality: "low"             
              },
              
              {
                name: "Spain", 
                coords: {lat: 40.463667, 
                        lng: -3.74922},
                mortality: "low"             
              }
            ]
          });

  return [tuberculosis, yellowFever];
}

  module.exports = Diseases;

