

var app = angular.module("app", ["ui.router"]);



app.config(function($stateProvider, $urlRouterProvider){

	$stateProvider.state("login", {
		url: "/login",
		templateUrl: "templates/login.html",
		controller: "LoginCtrl"
	});

	$stateProvider.state("home", {
		url: "/home",
		templateUrl: "templates/home.html",
		controller: "HomeCtrl"
	});

	$urlRouterProvider.otherwise("/login");

});


LoginCtrl = function($scope, $location){

	// nothing yet

	$scope.login = function(){

		if($scope.credentials.username === "BFitz") {
			alert("welcome");
			$location.path("/home");
		}
		else {
			alert("invalid credentials");
		}

	};

};

HomeCtrl = function($scope, $location){

	// nothing yet

};