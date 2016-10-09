var diseaseQuery = require('../db/diseaseQuery.js');

var DiseaseApi = function(app) {

  var query = new diseaseQuery()
  
  app.get("/api/test/diseases", function(req, res) {
    query.all(function(info){
      res.json(info);
    })
  })
}

module.exports = DiseaseApi;