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

  var spFact1 = new Fact({
    comment: "Smallpox is transmitted through extended face-to-face contact, or direct contact with infected body fluids or contaminated objects.",
    image: "https://i.ytimg.com/vi/yqUFy-t4MlQ/maxresdefault.jpg"
  });

  var spFact2 = new Fact({
    comment: "Insects and animals do not transmit smallpox. If aerosolized smallpox were to be released, 90% of the virus would die within 24 hours.",
    image: "https://i.ytimg.com/vi/yqUFy-t4MlQ/maxresdefault.jpg"
  });

  var spFact3 = new Fact({
    comment: "The majority of patients with smallpox recover, but death occurs in up to 30% of cases.",
    image: "http://www.museumofhealthcare.ca/explore/exhibits/vaccinations/smallpox.html"
  });

  var smallPox = new Disease({
    name: "smallPox",
    nineteenthCentury: [                
  {
    name: "UK", 
    coords: {lat: 55.378051, 
             lng: -3.435973},
    mortality: "medium"             
    },  
      
    { 
      name: "France", 
      coords: {lat: 46.227638, 
               lng: 2.213749},
      mortality: "medium"             
    },

    {
      name: "Spain", 
      coords: {lat: 40.463667, 
              lng: -3.74922},
      mortality: "medium"             
    },

     {
       name: "USA", 
       coords: {lat: 37.09024, 
                lng: -95.712891},
       mortality: "medium"             
     },
     
     {
       name: "South Africa", 
       coords: {lat: -30.559482, 
                lng: 22.937506},
       mortality: "high"             
     },

     {
       name: "DR Congo", 
       coords: {lat: -2.930652, 
                lng: 23.285279},
       mortality: "high"
     },

      {
        name: "Russia", 
        coords: {lat: 62.333724,  
                 lng: 92.189755},
        mortality: "medium"             
      },

      {
        name: "India", 
        coords: {lat: 20.593684, 
                lng: 78.96288},
        mortality: "medium"             
      },

    {
      name: "Argentina", 
      coords: {lat: -38.416097, 
               lng: -63.616672},
      mortality: "medium"             
    },
    
    {
      name: "Brazil", 
      coords: {lat: -14.235004, 
               lng:  -51.92528},
      mortality: "medium"             
    },

    {
      name: "Mexico", 
      coords: {lat: 23.634501, 
               lng: -102.552784},
      mortality: "medium"             
    },
     
    {
      name: "China", 
      coords: {lat: 34.560541,  
               lng: 102.994444},
      mortality: "medium"             
    }
   ],
   twentiethCentury: [
   {
     name: "UK", 
     coords: {lat: 55.378051, 
              lng: -3.435973},
     mortality: "none"             
     },  
       
     { 
       name: "France", 
       coords: {lat: 46.227638, 
                lng: 2.213749},
       mortality: "none"             
     },

     {
       name: "Spain", 
       coords: {lat: 40.463667, 
               lng: -3.74922},
       mortality: "none"             
     },

      {
        name: "USA", 
        coords: {lat: 37.09024, 
                 lng: -95.712891},
        mortality: "none"             
      },
      
      {
        name: "South Africa", 
        coords: {lat: -30.559482, 
                 lng: 22.937506},
        mortality: "low"             
      },

      {
        name: "DR Congo", 
        coords: {lat: -2.930652, 
                 lng: 23.285279},
        mortality: "medium"
      },

       {
         name: "Russia", 
         coords: {lat: 62.333724,  
                  lng: 92.189755},
         mortality: "low"             
       },

       {
         name: "India", 
         coords: {lat: 20.593684, 
                 lng: 78.96288},
         mortality: "none"             
       },

     {
       name: "Argentina", 
       coords: {lat: -38.416097, 
                lng: -63.616672},
       mortality: "low"             
     },
     
     {
       name: "Brazil", 
       coords: {lat: -14.235004, 
                lng:  -51.92528},
       mortality: "low"             
     },

     {
       name: "Mexico", 
       coords: {lat: 23.634501, 
                lng: -102.552784},
       mortality: "low"             
     },
      
     {
       name: "China", 
       coords: {lat: 34.560541,  
                lng: 102.994444},
       mortality: "low"             
     }
   ]         
  });

var tuberculosis = new Disease({
  name: "Tuberculosis",        
  nineteenthCentury: [
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
    },

     {
       name: "USA", 
       coords: {lat: 37.09024, 
                lng: -95.712891},
       mortality: "high"             
     },
     
     {
       name: "South Africa", 
       coords: {lat: -30.559482, 
                lng: 22.937506},
       mortality: "high"             
     },

     {
       name: "DR Congo", 
       coords: {lat: -2.930652, 
                lng: 23.285279},
       mortality: "high"
     },

      {
        name: "Russia", 
        coords: {lat: 62.333724,  
                 lng: 92.189755},
        mortality: "high"             
      },

      {
        name: "India", 
        coords: {lat: 20.593684, 
                lng: 78.96288},
        mortality: "high"             
      },

    {
      name: "Argentina", 
      coords: {lat: -38.416097, 
               lng: -63.616672},
      mortality: "high"             
    },
    
    {
      name: "Brazil", 
      coords: {lat: -14.235004, 
               lng:  -51.92528},
      mortality: "high"             
    },

    {
      name: "Mexico", 
      coords: {lat: 23.634501, 
               lng: -102.552784},
      mortality: "high"             
    },
     
    {
      name: "China", 
      coords: {lat: 1.352083, 
               lng: 103.819836},
      mortality: "high"             
    }       
  ]
});

smallPox.addFact(spFact1);
smallPox.addFact(spFact2);
smallPox.addFact(spFact3);

tuberculosis.addFact(tbFact1);
tuberculosis.addFact(tbFact2);
tuberculosis.addFact(tbFact3);

  return [smallPox, tuberculosis];

}

module.exports = Diseases;

