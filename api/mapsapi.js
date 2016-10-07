var DiseaseApi = function(app) {

  var diseases = [{
    name: "TB"
  }]
  

app.get("/api/diseases", function(req, res) {
  res.json({data: diseases});
})

app.get("/api/diseases/:id", function(req, res) {
  var diseaseId = req.params.id;
  res.json({data: diseases[diseaseId]});
})

}

module.exports = DiseaseApi;

