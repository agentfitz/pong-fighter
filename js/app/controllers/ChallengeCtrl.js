/* global define */

console.log("ChallengeCtrl loading");

define(['app'], function (app) {

	'use strict';

	app.controller('ChallengeCtrl', ['$scope', 'PlayerService', 'ParticipantService', '$location', function ($scope, PlayerService, ParticipantService, $location) {
		

		$scope.players = PlayerService.getPlayers();
		$scope.participants = ParticipantService.getParticipants();



		// api
		$scope.revealPlayerSelect = function(participantIdx){
			ParticipantService.setActiveParticipantIdx(participantIdx);
			$location.path("/player-select");
		};

		$scope.selectPlayer = function(playerId){

			PlayerService.updatePlayer(playerId, {
				isAvailable: false
			});

			ParticipantService.updateParticipant(ParticipantService.getActiveParticipantIdx(), playerId);
			$location.path("/challenge");

		};


	}]);
});