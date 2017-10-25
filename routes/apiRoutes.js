var path = require("path");
var tableData = require("tableData");
var waitListData = require("waitListData");

function apiRoutes(app){

  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waitListData);
  });

  app.post("api/tables", function(req, res){
    var newTableData = req.body;
    console.log(newTable);

    if(tableData.length < 5){
      tableData.push(tableData);
      res.json(true);
    }
    else{
      waitListData.push(newTableData);
      res.json(false);
    }
  });
}


module.exports = apiRoutes;