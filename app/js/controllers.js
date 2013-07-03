/* global angular: false */

"use strict";

/* Controllers */

angular.module("pongFighter.controllers", [])

	.controller("MyCtrl1", [function() {

	}])

	.controller("MyCtrl2", [function() {

	}])

	.controller("PlayerDetailCtrl", ["$scope", "$routeParams", "Player", "utilityService", function($scope, $routeParams, Player, utilityService) {

		$scope.player = Player.get({playerId: $routeParams.playerId}, function(player) {

			// $scope.mainImageUrl = phone.images[0];

		});

		$scope.getGravatarURL = utilityService.getGravatarURL;

	}])

	.controller("PlayerListCtrl", ["$scope", "Player", "utilityService", function($scope, Player, utilityService) {

		$scope.players = Player.query();

		$scope.orderProp = "name";

		$scope.getGravatarURL = utilityService.getGravatarURL;

	}]);