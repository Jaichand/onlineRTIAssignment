(function(){
  var app = angular.module('formData',['ngRoute','starter.controller']);
  app.config(['$routeProvider',function($routeProvider){
      $routeProvider
      .when('/home',{
        templateUrl: 'showStudents.html',
        controller: 'formDataController',
        controllerAs: 'studentCtrl'
      })
      .when('/home/addStudent',{
        templateUrl: 'addStudent.html',
        controller: 'formDataController',
        controllerAs: 'studentCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
    }]);
})();