var Disease = require("./disease");
var Fact = require('./fact');
var Query = require('./queryRequest.js');

var Diseases = function() {

  this.request = new Query();

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
    comment: "Smallpox is the only human based infection that has been completely eradicated from the world. The world has been smallpox free since 1979 after a widescale vaccination programme.",
    image: "http://www.museumofhealthcare.ca/explore/exhibits/vaccinations/smallpox.html"
  });

 

  var zikaFact1 = new Fact({
    comment: "The Zika virus has been linked to a surge in the number of babies born with microcephaly, a birth defect which causes infants to be born with abnormally small heads and brain damage.",
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

  var hivFact1 = new Fact({
    comment: "HIV (Human Immunodeficiency Virus) is a virus that infects the immune system, decreasing its ability to fight off other infections and diseases.",
    image: "https://www.aids.gov/images/aids-infographics/what-is-hiv-aids-1.png"
  });

  var hivFact2 = new Fact({
    comment: "More than 35 million people live with HIV worldwide.",
    image: "http://www.foundcare.org/cache.trustedpartner.com/images/library/Foundcare2010/Content/globe1.jpg"
  });

  var hivFact3 = new Fact({
    comment: "About 30 million people have died from HIV/AIDS-related causes since its discovery in 1981.",
    image: "https://abm-website-assets.s3.amazonaws.com/biosciencetechnology.com/s3fs-public/embedded_image/2016/06/shutterstock_236439424.jpg"
  });



}

Diseases.prototype = {
  all: function(){
    var self = this;
    var url = "http://localhost:3000/api/diseases";
      this.request.api(url, function(){
        console.log("request completed")
      if(this.status != 200) return;
      var jsonString = this.responseText;
      // console.log("api data:", jsonString);
      var apiData = JSON.parse(jsonString);
      // console.log(apiData);
      var diseases = self.populateDiseases(apiData);
    })
  },
  populateDiseases: function(apiData){
    var diseases = [];
    for(var data of apiData){
      var disease = new Disease(data);
      diseases.push(disease);
    }
    return diseases;
  }
}

module.exports = Diseases;