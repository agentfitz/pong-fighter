/* global define */
/* global define */

define(['app'], function (app) {

	'use strict';

	app.factory('MatchService', ['$http', 'UtilService', function ($http, UtilService) {

		/**
		 * Essentially the data (model) will be retrieved from server
		 * via ajax request using the $http service. In this example,
		 * we have hard-coded the model here for simplicity's sake.
		 */

		var api = {},

			match = {},
			
			state = {
				activeParticipantIdx: 0
			},

			getParticipantMarkup = function(playerId){
				
				return "<img src='/img/players/mugshots/" + playerId + ".jpg'>";
			
			},

			getNumTeamOneParticipants = function(){

				var numParticipants = 0;

				_.each(match.participants, function(participant, i){

					if(UtilService.isOdd(i + 1) && participant.playerId){
						numParticipants++;
					}

				});

				return numParticipants;

			},

			getNumTeamTwoParticipants = function(){

				var numParticipants = 0;

				_.each(match.participants, function(participant, i){

					if(UtilService.isEven(i + 1) && participant.playerId){
						numParticipants++;
					}

				});

				return numParticipants;

			},

			isValidSinglesMatch = function(){

				return getNumTeamOneParticipants() === 1 && getNumTeamTwoParticipants() === 1;

			},

			isValidDoublesMatch = function(){

				return getNumTeamOneParticipants() === 2 && getNumTeamTwoParticipants() === 2;

			},

			hasValidNumberOfParticipants = function(){

				var numParticipants = 0,
					valid = false;

				_.each(match.participants, function(participant, el){

					if(participant.playerId){
						numParticipants++;
					}

				});

				if(numParticipants > 0 && ( numParticipants % 2 ) === 0) {
					valid = true;
				}

				return valid;

			},

			getDefaultParticipantData = function(i){

				return {
					idx: i,
					content: "+",
					isActive: false,
					playerId: 0
				}

			},

			getDefaultParticipants = function(){

				var slots = [1,2,3,4],
					participants = [];

				_.each(slots, function(slot, i){

					participants[i] = getDefaultParticipantData(i);

				});

				return participants;

			},

			getNumWinsNecessaryToDecideMatch = function(){

				return Math.ceil(match.maxGames / 2);

			},

			hasTeamWon = function(teamId){

				var numWinsTeam = api.getNumWins(teamId),
					hasWon = false;

				if(numWinsTeam >= getNumWinsNecessaryToDecideMatch()){

					hasWon = true;

				}

				return hasWon;

			};


		


			// public api
			api.getActiveParticipantIdx = function(){

				return state.activeParticipantIdx;

			};

			api.setActiveParticipantIdx = function(idx){

				state.activeParticipantIdx = idx;

			};

			api.setMaxGames = function(numGames){

				match.maxGames = numGames;

			};

			api.getMatch = function(numGames){

				return match;

			};

			api.getParticipants = function(){

				return match.participants;
			};

			api.updateParticipant = function(idx, playerId){

				match.participants[idx].playerId = playerId;
				match.participants[idx].content = getParticipantMarkup(playerId);

			};

			api.isValidMatch = function(){				

				return isValidSinglesMatch() || isValidDoublesMatch();

			};

			api.getWinningTeam = function(){				

				var winningTeam;


				if(hasTeamWon(1)) {

					winningTeam = 1;

				}

				else if(hasTeamWon(2)) {

					winningTeam = 2;

				}

				else {

					console.log("neither team has won yet");

				}

				return winningTeam;

			};

			api.isMatchOver = function(){

				var isOver = false;

				if(hasTeamWon(1) || hasTeamWon(2)) {

					isOver = true;

				}

				return isOver;

			};

			api.saveGame = function(obj){

				var game = {};

				_.extend(game, obj);

				match.games.push(game);

			};

			api.getActiveGame = function(){

				console.log("my active game: " + match.games.length);

				return match.games.length + 1;

			};

			api.getNumGamesPlayed = function(){

				return match.games.length;

			};

			api.getMaxGames = function(){

				return match.maxGames;

			};

			api.setStatus = function(status){

				match.status = status;

			};

			api.getStatus = function(status){

				return match.status;

			};

			api.getNumWins = function(teamId){

				var numWins = 0;

				_.each(match.games, function(game, i){

					if(game.winner === teamId) {

						numWins++;

					}

				});

				return numWins;

			};

			api.setupRematch = function(){

				var rematch = UtilService.getDeepCopy(match);
				
				match.id = 0;
				rematch.games = [];
				rematch.participants = match.participants;
				rematch.maxGames = match.maxGames;

				api.init(rematch);

			};

			api.reinit = function(){

				var newMatch = {},
					participants = UtilService.getDeepCopy(api.getParticipants());

				console.log("reinit called");

				if(hasTeamWon(1)){

					participants[1] = getDefaultParticipantData(1);
					participants[3] = getDefaultParticipantData(3);

				}

				else if (hasTeamWon(2)){

					participants[0] = getDefaultParticipantData(0);
					participants[2] = getDefaultParticipantData(2);

				}

				match.id = 0;
				newMatch.participants = participants;


				api.init(newMatch);


			};

			api.init = function(obj){

				if(!match.id){

					console.log("initializing match");
					console.log(getDefaultParticipants());					

					match = {

						id: UtilService.getUniqueId(),

						maxGames: 0,

						participants: getDefaultParticipants(),

						status: "challenge", // active, completed

						games: []

					};

					_.extend(match, obj);

				}

				else {

					console.log("match already initialized");

				}

			};
		
		return api;

	}]);
});