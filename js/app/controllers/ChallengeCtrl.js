/* global define */

console.log("ChallengeCtrl loading");

define(['app'], function (app) {

	'use strict';

	app.controller('ChallengeCtrl', ['$scope', 'PlayerService', function ($scope, PlayerService) {
		

		$scope.players = PlayerService.getPlayers();


	}]);
});