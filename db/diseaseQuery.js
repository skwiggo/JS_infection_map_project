var MongoClient = require('mongodb').MongoClient;

var DiseaseQuery = function(){
  this.url = "mongodb://localhost:27017/diseases";
}

DiseaseQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection("disease");
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      })
    })
  }
}

module.exports = DiseaseQuery;