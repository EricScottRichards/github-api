var app = angular.module('github-api');
app.service('service', function($http){
	var id = "myCLientID";
  var sec = "mySecretKeyThing";
  var param = "?client_id=" + id + "&client_secret=" + sec;
	
})