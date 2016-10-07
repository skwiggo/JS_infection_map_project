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
        coords: {lat: 46.227638, 
                 lng: 2.213749},
        mortality: "low"             
      },

      {
        name: "Nigeria", 
        coords: {lat: 40.463667, 
                lng: -3.74922},
        mortality: "low"             
      },

       {
         name: "Sierra Leone", 
         coords: {lat: 37.09024, 
                  lng: -95.712891},
         mortality: "low"             
       },
       
       {
         name: "Senegal", 
         coords: {lat: -30.559482, 
                  lng: 22.937506},
         mortality: "low"             
       },

       {
         name: "Pakistan", 
         coords: {lat: -2.930652, 
                  lng: 23.285279},
         mortality: "low"
       },

        {
          name: "Malaysia", 
          coords: {lat: 62.333724,  
                   lng: 92.189755},
          mortality: "low"             
        },

        {
          name: "Indonesia", 
          coords: {lat: 20.593684, 
                  lng: 78.96288},
          mortality: "low"             
        }    
    ]  
  });


  zika.addFact(zikaFact1);
  zika.addFact(zikaFact2);
  zika.addFact(zikaFact3);

  return [zika, yellowFever];

}