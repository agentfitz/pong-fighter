/* global define, require, angular */

define(["config"], function (config) {

	'use strict';


	var app = angular.module(config.appName, ["ui.router"]);

	

	app.config(function($stateProvider, $urlRouterProvider){



		$stateProvider.state("challenge", {
			url: "/challenge",
			templateUrl: "js/app/views/challenge/challenge.html"
		});

		$stateProvider.state("challenge.player-select", {
			url: "/player-select",
			templateUrl: "js/app/views/player-select.html"
		});





		$urlRouterProvider.otherwise("/challenge");



	});


	return app;

});