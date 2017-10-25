var path = require("path");
var tableData = require("../data/tableData");
var waitListData = require("../data/waitingListData");

function apiRoutes(app){

  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waitListData);
  });

  app.post("/api/tables", function(req, res){
    var newTableData = req.body;
    console.log(newTableData);

    if(tableData.length < 5){
      tableData.push(newTableData);
      res.json(true);
    }
    else{
      waitListData.push(newTableData);
      res.json(false);
    }
  });

  app.post("/api/clear", function(req, res){
    tableData = [];
    waitListData = [];

    console.log("data store", tableData, waitListData);
  });
}


module.exports = apiRoutes;