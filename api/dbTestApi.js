var diseaseQuery = require('../db/diseaseQuery.js');

var DiseaseApi = function(app) {

  var query = new diseaseQuery();
  
  app.get("/api/test/diseases", function(req, res) {
    query.all(function(info){
      res.json(info);
    })
  })

  app.get("/api/test/diseases/:id", function(req, res){
    var diseaseId = req.params.id;
    query.all(function(info){
      res.json(info[diseaseId]);
    })
  })
}

module.exports = DiseaseApi;