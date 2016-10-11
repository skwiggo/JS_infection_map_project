var Disease = require("./disease");
var Fact = require('./fact');
var Query = require('./queryRequest.js');
var tbFacts = require('./facts/tbFacts.js');

var Diseases = function() {

  this.facts = [];

  this.request = new Query();
  this.tuberculiosisFacts = new tbFacts();

  this.addFacts();

  console.log(this.facts);


  // this.facts = [,

  // {
  //   disease: "Smallpox",
  //   comment: "Smallpox is a relatively weak virus when it’s all by itself. If you were to spray smallpox into the air, 90% of the virus was sprayed into the year would die within 24 hours. Because of this weakness, insects and animals are not able to transmit the disease at all. Humans can only get smallpox from other humans who have an active infection.",
  //   image: "https://www.thestar.com/content/dam/thestar/news/insight/2015/05/22/sneeze-politics-sorting-out-fact-from-sinus-fiction/sneezing.jpg.size.xxlarge.letterbox.jpg"
  // },
  // {
  //   disease: "Smallpox",
  //   comment: "As smallpox has not been active wordwide for almost 40 years, the current world population has almost no inbuilt immunity to the disease. It is therefore feared that if smallpox were to be used as a biological weapon, it could have a devastating effect.",
  //   image: "http://science.dodlive.mil/files/2013/11/Caution-Biowarfare.jpg"
  // },

  // {
  //   disease: "Smallpox",
  //   comment: "Smallpox is the only human based infection that has been completely eradicated from the world. The world has been smallpox free since 1979 after a widescale vaccination programme. ",
  //   image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Dryvax.jpg"
  // },

  // {
  //   disease: "Smallpox",
  //   comment: "The first signs and symptoms of smallpox usually appear 12 to 14 days after infection, although the incubation period can range from 7 to 17 days. During this time, an infected person may look and feel normal.",
  //   image: "http://www.freeiconspng.com/uploads/thermometer-png-icon-4.png"
  // },

  // {
  //   disease: "Smallpox",
  //   comment: "For centuries, epidemics of smallpox affected people all over the globe. But in 1796, an English doctor named Edward Jenner discovered a way to protect people from getting smallpox, and his experiments eventually led to the development of the first smallpox vaccine.",
  //   image: "http://blog.rsb.org.uk/wp-content/uploads/2014/09/jenner.jpg"
  // },

  // {
  //   disease: "Zika",
  //   comment: "The Zika virus was first discovered in Ugandan monkeys in 1947. It spread to the South Pacific and caused an outbreak on Yap Island in Micronesia in 2007. The island’s population was too small for scientists to observe whether the virus caused side effects like birth defects or neurological damage.",
  //   image: "http://www.esayap.com/images/Island1.jpg"
  // },
  // {
  //   disease: "Zika",
  //   comment: "In early 2015, Brazil experienced a spike in Zika cases, and the virus quickly spread throughout other parts of the Americas. It could have been introduced in 2014, when Brazil hosted the FIFA World Cup and an international canoeing competition. The Zika virus is now in 23 countries in the Americas.",
  //   image: "http://images.huffingtonpost.com/2016-05-22-1463949471-6072763-BrazilFlagMap.png"
  // },

  // {
  //   disease: "Zika",
  //   comment: "Symptoms of Zika in adults are usually mild. Along with fever, joint pain, rash, or conjunctivitis (red eyes), an affected person might experience headache and muscle pain. Hospitalization is uncommon, and symptoms generally only last up to a week.",
  //   image: "http://image.shutterstock.com/z/stock-vector-zika-virus-symptom-icons-fever-headache-muscle-pain-joint-pain-red-eyes-rash-zika-virus-380603164.jpg"
  // },

  // {
  //   disease: "Zika",
  //   comment: "The virus is spread primarily by mosquito. According to the World Health Organization, all countries in the Americas will have the disease sometime in the future with the exception of mainland Chile and Canada because the mosquito can’t live there.",
  //   image: "http://i2.cdn.turner.com/cnnnext/dam/assets/160128185001-zika-mutant-male-mosquitos-mclaughlin-pkg-00020830-large-169.jpg"
  // },

  // {
  //   disease: "Zika",
  //   comment: "There are no approved drugs or vaccines for Zika, in large part because scientists long assumed the virus was so benign that it wasn’t worth the resources required to investigate treatment.",
  //   image: "http://static2.businessinsider.com/image/56a7acb5c08a80d7118bc7c5-1200/as-of-right-now-theres-no-treatment-for-the-zika-virus-which-is-why-the-cdc-is-urging-pregnant-women-to-avoid-traveling-to-countries-where-the-virus-is-growing-in-strength-labs-are-currently-doing-studies-to-find-more-answers.jpg"
  // },

  // {
  //   disease: "HIV/AIDS",
  //   comment: "HIV (Human Immunodeficiency Virus) is a virus that infects the immune system, decreasing its ability to fight off other infections and diseases. The first known human to become infected with HIV was a citizen of the Democratic Republic of the Congo whose blood was collected and tested in 1959. Scientists believe the first human infection may have occurred in the late 1940s or early 50s.",
  //   image: "https://c2.staticflickr.com/4/3551/3463183104_2fa0c1b251_z.jpg?zz=1"
  // },

  // {
  //   disease: "HIV/AIDS",
  //   comment: "As of 2013, there were 35.0 million people living with HIV around the globe, up from 29.8 million in 2001. Scientists attribute these staggering HIV statistics to new infections, but also to general population growth and the fact that research and treatments have allowed those with HIV to live longer lives.",
  //   image: "http://www.foundcare.org/cache.trustedpartner.com/images/library/Foundcare2010/Content/globe1.jpg"
  // },

  // {
  //   disease: "HIV/AIDS",
  //   comment: "About 30 million people have died from HIV/AIDS-related causes since its discovery in 1981. Geographically, the worst AIDS epidemic is in sub-Sahara Africa, with approximately 65% of all cases located there. Almost 90% of children with HIV live in sub-Sahara Africa.",
  //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/HIV_in_Africa_2011.svg/2000px-HIV_in_Africa_2011.svg.png"
  // },

  // {
  //   disease: "HIV/AIDS",
  //   comment: "In 1988, DC Comics introduced a villain named “Hemo-Goblin.” The HIV-positive vampire was created by a group of white supremacists and used to infect minorities. Not surprisingly, Hemo-Goblin wasn’t much of a fan favorite and the character appeared in only one issue of The New Guardians.",
  //   image: "http://vignette4.wikia.nocookie.net/marvel_dc/images/0/0d/Hemo-Goblin_01.jpg/revision/latest?cb=20091006193609"
  // },

  // {
  //   disease: "HIV/AIDS",
  //   comment: "Two strains of HIV have been identified: HIV-1 (from the Central Common Chimpanzee) and HIV-2 (from the Sooty Mangabey monkey). HIV-1 is more virulent, more easily transmitted, and is the cause of the vast majority of global HIV infections. HIV-2 is harder to transmit and is mainly confined to West Africa.",
  //   image: "http://www.awf.org/sites/default/files/media/gallery/wildlife/Chimpanzee/chimp_Craig_R_Sholley.jpg?itok=4QfFXY3F"
  // }
  // ]

}

Diseases.prototype = {
  all: function(onCompleted){
    var self = this;
    var url = "http://localhost:3000/api/diseases";
      this.request.api(url, function(){
        // console.log("request completed")
      if(this.status != 200) return;
      var jsonString = this.responseText;
      var apiData = JSON.parse(jsonString);
      var diseases = self.populateDiseases(apiData);
      onCompleted(diseases);
    })
  },
  populateDiseases: function(apiData){
    var diseases = [];
    var facts = this.populatefacts(this.facts);
    for(var data of apiData){
      console.log(data)
      var disease = new Disease(data);
      for (var info of facts){
        if(info.disease === disease.name){
          disease.addFact(info);
        }      
      }
      diseases.push(disease);
    }
    return diseases;
  },
  populatefacts: function(facts){
    var infoFact = [];
    for(var fact of facts){
      var info = new Fact(fact);
      infoFact.push(info);
    }
    return infoFact;
  },
  addFacts: function(){
    var tbFacts = this.tuberculiosisFacts.data;
    for(var fact of tbFacts){
      this.facts.push(fact);
    }
  }
}

module.exports = Diseases;