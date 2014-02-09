/* global define */

console.log("ChallengeCtrl loading");

define(['app'], function (app) {

	'use strict';

	app.controller('ChallengeCtrl', ['$scope', 'PlayerService', function ($scope, PlayerService) {
		

		$scope.players = PlayerService.getPlayers();
		$scope.participants = PlayerService.getParticipants();
		$scope.activeParticipantIdx = undefined;


		$scope.getParticipantMarkup = function(playerId){
			return "<img src='/img/players/mugshots/" + playerId + ".jpg'>";
		};


		$scope.toggleModal = function(){
			$scope.modalShown = !$scope.modalShown;
		};

		$scope.updateActiveParticipant = function(participantIdx){
			$scope.activeParticipantIdx = participantIdx;
		};

		$scope.updateParticipant = function(playerId){

			// $scope.participants[$scope.activeParticipantIdx].content = "<img src='/img/players/mugshot/1.jpg'>";

		};


	}]);
});