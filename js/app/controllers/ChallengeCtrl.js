/* global define */

console.log("ChallengeCtrl loading");

define(['app'], function (app) {

	'use strict';

	app.controller('ChallengeCtrl', ['$scope', 'PlayerService', '$sce', function ($scope, PlayerService, $sce) {
		

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
			$scope.participants[$scope.activeParticipantIdx].content = $sce.trustAsHtml("<img src='/img/players/mugshots/" + playerId + ".jpg'>");
		};

		$scope.revealPlayerSelect = function(participantIdx){
			$scope.updateActiveParticipant(participantIdx);
			$scope.toggleModal();
		};

		$scope.selectPlayer = function(playerId){
			$scope.updateParticipant(playerId);
			$scope.toggleModal();
		};


	}]);
});