var Disease = require("./disease");
var Fact = require('./fact');
var Query = require('./queryRequest.js');
var tbFacts = require('./facts/tbFacts.js');
var spFacts = require('./facts/spFacts.js');
var zFacts = require('./facts/zFacts.js');
var hivFacts = require('./facts/hivFacts.js');
var zombFacts = require('./facts/zombFacts.js')

var Diseases = function() {

  this.facts = [];

  this.request = new Query();
  var tuberculiosisFacts = new tbFacts();
  var smallpoxFacts = new spFacts();
  var zikaFacts = new zFacts();
  var HIVFacts = new hivFacts();
  var zombieFacts = new zombFacts();

  this.addFacts(tuberculiosisFacts);
  this.addFacts(smallpoxFacts);
  this.addFacts(zikaFacts);
  this.addFacts(HIVFacts);
  this.addFacts(zombieFacts);

}

Diseases.prototype = {
  all: function(onCompleted){
    var self = this;
    var url = "http://localhost:3000/api/diseases";
      this.request.api(url, function(){
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
      // console.log(data)
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
  addFacts: function(factList){
    var facts = factList.data;
    for(var fact of facts){
      this.facts.push(fact);
    }
  }
}

module.exports = Diseases;