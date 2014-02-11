/* global define */

console.log("ChallengeCtrl loading");

define(['app'], function (app) {

	'use strict';

	app.controller('ChallengeCtrl', ['$scope', 'PlayerService', '$location', function ($scope, PlayerService, $location) {
		

		$scope.players = PlayerService.getPlayers();
		$scope.participants = PlayerService.getParticipants();
		$scope.activeParticipantIdx = undefined;



		// private
		var getParticipantMarkup = function(playerId){
				return "<img src='/img/players/mugshots/" + playerId + ".jpg'>";
			},

			updateActiveParticipant = function(participantIdx){
				$scope.activeParticipantIdx = participantIdx;
			},

			updateParticipant = function(playerId){
				$scope.participants[$scope.activeParticipantIdx].content = getParticipantMarkup(playerId);
			};



		// api
		$scope.revealPlayerSelect = function(participantIdx){
			updateActiveParticipant(participantIdx);
			$location.path("/player-select");
		};

		$scope.selectPlayer = function(playerId){
			$scope.updateParticipant(playerId);
		};
		


	}]);
});