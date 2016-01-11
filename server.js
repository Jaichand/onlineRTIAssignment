var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var morgan   = require('morgan');
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override');

//mongoose.connect('mongodb://admin:pass@ds039185.mongolab.com:39185/jaisam21');
mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');
//mongoose.connect('mongodb://localhost:27017/test');
app.use(express.static(__dirname + '/view'));
app.use('/lib',express.static(__dirname + '/lib'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json' }));
app.use(methodOverride());

var studentSchema = new Schema(
  {
    name : String,
    email: String,
    age  : { type: Number, default: 0 },
    colgname : String,
    stream : String,
    cpi    : { type: Number, default: 0 }
});

mongoose.model('studentdata',studentSchema);
var studentModel = mongoose.model('studentdata');

//api to retrive students information
app.get('/api/studentdetails',function(req,res){
  console.log('get studentdetails');
  studentModel.find(
    {}, function(err,students){
      if(err)
        res.send(err)
      console.log(students);
      res.json(students);
    }
  );
});

//api to delete student information
app.delete('/api/studentdetails/:id',function(req,res){
  //ToDo: get the particular mesg, if not found send error.
  console.log('delete studentdetails id',req.params.id);
  studentModel.findByIdAndRemove(
    req.params.id, function(err){
      if(err)
        res.send(err)
      else
        res.json({"status":"Removed Successfully"});
    }
  );
});

//api to insert student information
app.post('/api/studentdetails',function(req,res){
  studentModel.create({
    name : req.body.name,
    email: req.body.email,
    age  : req.body.age,
    colgname: req.body.instituteName,
    stream : req.body.stream,
    cpi    : req.body.cpi,
    done : false
  },function(err,students){
    if(err)
      res.send(err);
    console.log("posting error"+err);
    studentModel.find(function(err,students){
      if(err)
        res.send(err)
      res.json(students)
    });
  });
});

app.get('*',function(req,res){
  res.sendfile('./index.html');
});

app.listen(5000);
console.log("App listening on port 5000");