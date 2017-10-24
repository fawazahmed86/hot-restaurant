var path = require("path");

function apiRoutes(app){

  app.get("/api/tables", function(req, res) {

  });

  app.get("/api/waitlist", function(req, res) {

  });

  app.post("api/new", function(req, res){
    var newTable = req.body;
    console.log(newTable);

    

  });
}


module.exports = apiRoutes;