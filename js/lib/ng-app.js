/* global define, require, angular */

define(["config"], function (config) {

	'use strict';


	var app = angular.module(config.appName, ["ui.router"]);

	

	app.config(function($stateProvider, $urlRouterProvider){



		$stateProvider.state("challenge", {
			url: "/challenge",
			templateUrl: "js/app/views/challenge/challenge.html"
		});



		$urlRouterProvider.otherwise("/challenge");



	});


	return app;

});