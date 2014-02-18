/* global define, require, angular */

define(["config"], function (config) {

	'use strict';


	var app = angular.module(config.appName, ["ui.router", "ngSanitize", "ngAnimate"]);

	

	app.config(function($stateProvider, $urlRouterProvider){



		$stateProvider.state("challenge", {
			url: "/challenge",
			templateUrl: "js/app/views/challenge.html"
		});

		$stateProvider.state("player-select", {
			url: "/player-select",
			templateUrl: "js/app/views/player-select.html"
		});

		$stateProvider.state("match-setup", {
			url: "/match-setup",
			templateUrl: "js/app/views/match-setup.html"
		});

		$stateProvider.state("match", {
			url: "/match",
			templateUrl: "js/app/views/match.html"
		});

		$stateProvider.state("match-complete", {
			url: "/match-complete",
			templateUrl: "js/app/views/match-complete.html"
		});

		$stateProvider.state("submit-challenge", {
			url: "/submit-challenge",
			templateUrl: "js/app/views/submit-challenge.html"
		});





		$urlRouterProvider.otherwise("/challenge");



	});


	return app;

});