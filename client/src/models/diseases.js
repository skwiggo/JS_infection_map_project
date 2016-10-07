var Disease = require("./disease");
var Fact = require('./fact');

var Diseases = function() {

  var tbFact1 = new Fact({
    comment: "The evidence for tuberculosis can be traced back to mummies in Ancient Egypt.",
    image: "http://i.bnet.com/blogs/mummy.jpg"
  });

  var tbFact2 = new Fact({
    comment: "A quarter of all deaths in Europe are estimated to have been caused by tuberculosis infection during the 19th and early 20th century.",
    image: "http://www.ancient-origins.net/sites/default/files/styles/large/public/First-and-Last-Communion.jpg?itok=9hHKG13z"
  });

  var tbFact3 = new Fact({
    comment: "TB is the leading killer of people living with HIV.",
    image: "https://pbs.twimg.com/profile_images/710836583235260417/WzC93R20.jpg"
  });

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

tuberculosis.addFact(tbFact1);
tuberculosis.addFact(tbFact2);
tuberculosis.addFact(tbFact3);

  return [tuberculosis, yellowFever];
}

  module.exports = Diseases;

