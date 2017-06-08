// var imported = document.createElement('script');
// imported.src = 'js/angular.min.js';
// document.head.appendChild(imported);

var app=angular.module("index.app",[]);
app.controller("index.controller",function($scope){
  // $scope.name=;
  // $scope.password="";
  $scope.clear= function(){
    $scope.name="";
    $scope.password="";
  };
  $scope.submit= function(){
    alert("welcome to angular world");
    // $scope.name="";
    // $scope.password="";
  };

});
