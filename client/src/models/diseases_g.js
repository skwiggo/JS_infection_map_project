var Diseases = function() {

  var zikaFact1 = new Fact({
    comment: "The Zika virus has been linked to a surge in the number of babies born with microcephaly, a birth defect which causes infants to be born with small heads and brain damage.",
    image: "https://www.statnews.com/wp-content/uploads/2016/05/birthdefectt-800x576.jpg"
  });

  var zikaFact2 = new Fact({
    comment: "There is currently no vaccine or cure for Zika.",
    image: "https://jnswire.s3.amazonaws.com/jns-media/40/ed/138306/shutterstock_363993479.jpg"
  });

  var zikaFact3 = new Fact({
    comment: "Symptoms of Zika in adults are generally mild, and can include a slight fever, rash, red eyes, headache and joint pain in the hands and feet.",
    image: "http://i2.cdn.turner.com/cnnnext/dam/assets/160128185001-zika-mutant-male-mosquitos-mclaughlin-pkg-00020830-large-169.jpg"
  });

  var zika = new Disease({
    name: "zika",
    nineteenthCentury: [],
    twentiethCentury: [    
      { 
        name: "Uganda", 
        coords: {lat: 1.373333, 
                 lng: 32.290275},
        mortality: "low"             
      },

      {
        name: "Nigeria", 
        coords: {lat: 9.081999, 
                lng: 8.675277},
        mortality: "low"             
      },

       {
         name: "Sierra Leone", 
         coords: {lat: 8.460555, 
                  lng: -11.779889},
         mortality: "low"             
       },
       
       {
         name: "Senegal", 
         coords: {lat: 14.497401, 
                  lng: -14.452362},
         mortality: "low"             
       },

       {
         name: "Pakistan", 
         coords: {lat: 30.375321, 
                  lng: 69.345116},
         mortality: "low"
       },

        {
          name: "Malaysia", 
          coords: {lat: 4.210484,  
                   lng: 101.975766},
          mortality: "low"             
        },

        {
          name: "Indonesia", 
          coords: {lat: -0.789275, 
                  lng: 113.921327},
          mortality: "low"             
        }    
    ]  
  });


  var hiv = new Disease({
    name: "HIV",   
    nineteenthCentury: [],     
    twentiethCentury: [
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


  zika.addFact(zikaFact1);
  zika.addFact(zikaFact2);
  zika.addFact(zikaFact3);

  return [zika, yellowFever];

}