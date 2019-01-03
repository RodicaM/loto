var express = require('express');
var app = express();

app.get('/api/v1/random-numbers', function (req, res) {
	
	res.header('Content-Type', 'application/json');
  
  var response={};
  response.arrayOfRandomNumbers = [];
  
  for(var i=0;i<6;i++){		
	response.arrayOfRandomNumbers[i]= Math.floor((Math.random() * 49) + 1);	
  }
  
  res.send(response);
  
})

var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})