 var app = angular.module('starter.controller',[]);
 app.controller('formDataController',['$http',function($http){
    var self = this;
    self.studentData = {};
     
    $http.get('/api/studentdetails')
    .success(function(data){
      self.students = data;
      console.log(self.students);
    })
    .error(function(err){
      console.log('Error: ' + err);
    });

    self.enterDetail = function(){
      $http.post('/api/studentdetails',self.studentData)
      .success(function(data){
        self.studentData = {};
        self.students = data;
        console.log(data);
        document.getElementById('msg').innerHTML = "You have added a Student, click here <a href='/#/home'>Show Student</a> to view ";
      })
      .error(function(err){
        console.log("Error: " + err);
      });
    };
    self.deleteStudent = function(id) {
      $http.delete('/api/studentdetails/'+id, self.students)
      .success(function() {
        self.students = self.students.filter(function(mesg){
          return mesg._id !== id;
        });
      })
      .error(function(err){
        console.log("Error: " + err);
      });
    };
  }]);