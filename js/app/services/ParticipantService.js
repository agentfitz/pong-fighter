/* global define */
/* global define */

define(['app'], function (app) {

	'use strict';

	app.factory('ParticipantService', ['$http', 'UtilService', function ($http, UtilService) {

		/**
		 * Essentially the data (model) will be retrieved from server
		 * via ajax request using the $http service. In this example,
		 * we have hard-coded the model here for simplicity's sake.
		 */

		var api = {},
			activeParticipantIdx = 0,
			participants = [

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

			getParticipantMarkup = function(playerId){
				
				return "<img src='/img/players/mugshots/" + playerId + ".jpg'>";
			
			},

			getNumTeamOneParticipants = function(){

				var numParticipants = 0;

				_.each(participants, function(participant, i){

					if(UtilService.isOdd(i + 1) && participant.playerId){
						numParticipants++;
					}

				});

				return numParticipants;

			},

			getNumTeamTwoParticipants = function(){

				var numParticipants = 0;

				_.each(participants, function(participant, i){

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

				_.each(participants, function(participant, el){

					if(participant.playerId){
						numParticipants++;
					}

				});

				if(numParticipants > 0 && ( numParticipants % 2 ) === 0) {
					valid = true;
				}

				return valid;

			};


		

			api.getActiveParticipantIdx = function(){

				return activeParticipantIdx;

			};

			api.setActiveParticipantIdx = function(idx){

				activeParticipantIdx = idx;

			};

			api.getParticipants = function(){

				return participants;
			};

			api.updateParticipant = function(idx, playerId){

				participants[idx].playerId = playerId;
				participants[idx].content = getParticipantMarkup(playerId);

			};

			api.isValidMatch = function(){				

				return isValidSinglesMatch() || isValidDoublesMatch();

			};
		
		return api;

	}]);
});