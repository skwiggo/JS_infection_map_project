var Diseases = require("../client/src/models/diseases")

var DiseaseApi = function(app) {

  var diseases = new Diseases;
  
  app.get("/api/diseases", function(req, res) {
    res.json({data: diseases});
  })

  app.get("/api/diseases/:id", function(req, res) {
    var diseaseId = req.params.id;
    res.json({data: diseases[diseaseId]});
  })

  app.put("/api/diseases/:id", function(req, res) {
    diseases[req.params.id] = req.body.name;
    res.json({data: diseases});
  });



}

module.exports = DiseaseApi;

