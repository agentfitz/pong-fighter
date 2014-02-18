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

		


		AudioService.init();
		MatchService.init();





		$scope.players = PlayerService.getPlayers();
		$scope.participants = MatchService.getParticipants();
		$scope.soundIcon = AudioService.getIsSoundMuted() ? soundIconPlay : soundIconStop;
		$scope.isValidMatch = MatchService.isValidMatch();
		$scope.showLoserPoints = false;
		$scope.loserPoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
		$scope.team1Wins = MatchService.getNumWins(1);
		$scope.team2Wins = MatchService.getNumWins(2);
		$scope.totalGames = MatchService.getMaxGames();
		$scope.activeGame = 1;



			






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

		$scope.setMaxGames = function(numGames){

			MatchService.setMaxGames(numGames);

		};

		$scope.revealLoserPoints = function(winningTeamId, losingTeamId){

			$scope.showLoserPoints = true;
			$scope.gameWinner = winningTeamId;
			$scope.gameLoser = losingTeamId;

		};

		$scope.returnHomeAfterMatch = function(){

			console.log("match complete, return home");


			MatchService.reinit();


			$location.path("/challenge");

		};

		$scope.setupRematch = function(){

			console.log("setup rematch");

			MatchService.setupRematch();

			$location.path("/match");

		};

		$scope.hideLoserPoints = function(){

			$scope.showLoserPoints = false;

		};

		$scope.saveGame = function(losingScore){

			var game = {},
				winningScore = losingScore < 10 ? 11 : losingScore + 2;



			MatchService.saveGame({
				winner: $scope.gameWinner, 
				loser: $scope.gameLoser, 
				winningScore: winningScore,
				losingScore: losingScore
			});


			// better way to do this?
			$scope.showLoserPoints = false;
			$scope.team1Wins = MatchService.getNumWins(1);
			$scope.team2Wins = MatchService.getNumWins(2);
			$scope.activeGame = MatchService.getActiveGame();



			if(MatchService.isMatchOver()){

				console.log("save match to db");
				
				$location.path("/match-complete");

			}



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