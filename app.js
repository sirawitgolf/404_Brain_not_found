var express = require('express');
var bodyparser = require('body-parser')
var fs = require('fs')
var app = express();
app.use(bodyparser.json());

app.get('/listUser',function(req,res){
  fs.readFile(__dirname + '/' + 'users.json' ,'utf8',function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.post('/addUser', function (req, res) {
   // First read existing users.
   var json = req.body
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = json;
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8080,function(){
  var port = server.address().port
  console.log('sample code for RESTful API run at ',port)
})