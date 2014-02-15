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

			match = {

				maxGames: 0,

				participants: [

					{
						idx: 0,
						content: "+",
						isActive: false,
						playerId: 0
					},
					{
						idx: 1,
						content: "+",
						isActive: false,
						playerId: 0
					},
					{
						idx: 2,
						content: "+",
						isActive: false,
						playerId: 0
					},
					{
						idx: 3,
						content: "+",
						isActive: false,
						playerId: 0
					}

				],

				games: []

			},
			
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

			};


		


			// public api
			api.getActiveParticipantIdx = function(){

				return state.activeParticipantIdx;

			};

			api.setActiveParticipantIdx = function(idx){

				state.activeParticipantIdx = idx;

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

			api.saveGame = function(obj){

				var game = {};

				_.extend(game, obj);

				match.games.push(game);

			};

			api.getActiveMatch = function(){

				return match;

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

			api.init = function(obj){

				_.extend(match, obj);

			};
		
		return api;

	}]);
});