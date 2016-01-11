var http = require('http');
module.exports = function(router){
  var db = require('')//database
  var server = http.createServer(function(req,res){
    if(req === 'POST'){
      var name = request.name;
      var email = request.email;
      var age = request.age;
      var instituteName = request.instituteName;
      var stream = request.stream;
      var cpi = request.cpi;  
    }
  });
  /*router.get('/', function(request,response,next){
    var name = request.name;
    var email = request.email;
    var age = request.age;
    var instituteName = request.instituteName;
    var stream = request.stream;
    var cpi = request.cpi;
    var server = http.createServer();
    var query = INSERT INTO studentdetail value('name','email','age','instituteName','stream','cpi');

  });*/
}