var Diseases = function() {

  var zikaFact1 = new Fact({
    comment: "The Zika virus has been linked to a surge in the number of babies born with microcephaly in Brazil, a birth defect which causes infants to be born with small heads and brain damage.",
    image: "https://www.statnews.com/wp-content/uploads/2016/05/birthdefectt-800x576.jpg"
  });

  var zikaFact2 = new Fact({
    comment: "There is currently no Zika vaccine and no cure. Currently, the only way to treat Zika is to try to ease its symptoms.",
    image: "https://jnswire.s3.amazonaws.com/jns-media/40/ed/138306/shutterstock_363993479.jpg"
  });

  var zikaFact3 = new Fact({
    comment: "Officials say symptoms of Zika in adults are generally mild, and can include a slight fever, rash, red eyes, headache and joint pain in the hands and feet.",
    image: "http://i2.cdn.turner.com/cnnnext/dam/assets/160128185001-zika-mutant-male-mosquitos-mclaughlin-pkg-00020830-large-169.jpg"
  });

  var zika = new Disease({
    name: "Zika",
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
                    coords: {lat: }
                  }
                ]
              });


tuberculosis.addFact(tbFact1);
tuberculosis.addFact(tbFact2);
tuberculosis.addFact(tbFact3);

  return [tuberculosis, yellowFever];
}