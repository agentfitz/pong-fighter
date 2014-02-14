/* global define */

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

		var soundIconStop = "fa-volume-up",
			soundIconPlay = "fa-volume-off";


		$scope.players = PlayerService.getPlayers();
		$scope.participants = ParticipantService.getParticipants();
		$scope.soundIcon = AudioService.getIsSoundMuted() ? soundIconPlay : soundIconStop;
		$scope.isValidMatch = ParticipantService.isValidMatch();

		$scope.toggle = true;
			
		AudioService.init();

		// api

		$scope.revealPlayerSelect = function(participantIdx){
			AudioService.playSound("add");
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

			if(AudioService.getIsSoundMuted()){

				AudioService.startSoundtrack();
				$scope.soundIcon = soundIconStop;

			}

			else {

				AudioService.muteSounds();
				$scope.soundIcon = soundIconPlay;

			}

		};


	}]);
});