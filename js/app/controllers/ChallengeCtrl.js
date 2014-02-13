/* global define */

console.log("ChallengeCtrl loading");

define(['app'], function (app) {

	'use strict';

	app.controller('ChallengeCtrl',

	[
		'$scope',
		'$location',
		'PlayerService',
		'ParticipantService',
		'AudioService',
		'UtilService',

		function (

			$scope,
			$location,
			PlayerService,
			ParticipantService,
			AudioService,
			UtilService

		) {


		var soundIconStop = "fa-times-circle-o",
			soundIconPlay = "fa-toggle-right";


		$scope.players = PlayerService.getPlayers();
		$scope.participants = ParticipantService.getParticipants();
		$scope.soundIcon = soundIconStop;


		AudioService.startSoundtrack();


		// api
		$scope.revealPlayerSelect = function(participantIdx){
			ParticipantService.setActiveParticipantIdx(participantIdx);
			$location.path("/player-select");
		};

		$scope.selectPlayer = function(playerId){

			PlayerService.updatePlayer(playerId, {
				isAvailable: false
			});

			AudioService.playSound("outstanding");

			ParticipantService.updateParticipant(ParticipantService.getActiveParticipantIdx(), playerId);
			$location.path("/challenge");

		};

		$scope.toggleSound = function(){

			if(AudioService.isSoundtrackPlaying){

				AudioService.muteSounds();
				$scope.soundIcon = soundIconPlay;

			}

			else {

				AudioService.startSoundtrack();
				$scope.soundIcon = soundIconStop;

			}


		};


	}]);
});