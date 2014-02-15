/* global define */

define(['app'], function (app) {

	'use strict';

	app.controller('ChallengeCtrl',

	[
		'$scope',
		'$location',
		'PlayerService',
		'MatchService',
		'AudioService',
		'UtilService',

		function (

			$scope,
			$location,
			PlayerService,
			MatchService,
			AudioService,
			UtilService

		) {

		var soundIconStop = "fa-volume-up",
			soundIconPlay = "fa-volume-off";


		$scope.players = PlayerService.getPlayers();
		$scope.participants = MatchService.getParticipants();
		$scope.soundIcon = AudioService.getIsSoundMuted() ? soundIconPlay : soundIconStop;
		$scope.isValidMatch = MatchService.isValidMatch();
		$scope.showLoserPoints = false;
		$scope.loserPoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
		$scope.team1Wins = MatchService.getNumWins(1);
		$scope.team2Wins = MatchService.getNumWins(2);
		$scope.match = MatchService.getActiveMatch();



			
		AudioService.init();





		// api

		$scope.revealPlayerSelect = function(participantIdx){
			AudioService.playSound("add");
			MatchService.setActiveParticipantIdx(participantIdx);
			$location.path("/player-select");
		};

		$scope.selectPlayer = function(playerId){

			PlayerService.updatePlayer(playerId, {
				isAvailable: false
			});

			AudioService.playSound("outstanding");

			MatchService.updateParticipant(MatchService.getActiveParticipantIdx(), playerId);

			$location.path("/challenge");

		};

		$scope.revealLoserPoints = function(winningTeamId, losingTeamId){

			$scope.showLoserPoints = true;
			$scope.gameWinner = winningTeamId;
			$scope.gameLoser = losingTeamId;

		};

		$scope.initMatch = function(maxGames){

			MatchService.init({
				maxGames: maxGames,
				games: []
			});

		};

		$scope.saveGame = function(losingScore){

			var game = {},
				winningScore = losingScore < 10 ? 11 : losingScore + 2;

			$scope.showLoserPoints = false;


			MatchService.saveGame({
				winner: $scope.gameWinner, 
				loser: $scope.gameLoser, 
				winningScore: winningScore,
				losingScore: losingScore
			});


			$scope.team1Wins = MatchService.getNumWins(1);
			$scope.team2Wins = MatchService.getNumWins(2);



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