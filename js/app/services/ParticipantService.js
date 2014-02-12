/* global define */
/* global define */

define(['app'], function (app) {

	'use strict';

	app.factory('ParticipantService', ['$http', function ($http) {

		/**
		 * Essentially the data (model) will be retrieved from server
		 * via ajax request using the $http service. In this example,
		 * we have hard-coded the model here for simplicity's sake.
		 */

		var activeParticipantIdx = 0,
			participants = [

				{
					idx: 0,
					content: "+",
					isActive: false
				},
				{
					idx: 1,
					content: "+",
					isActive: false
				},
				{
					idx: 2,
					content: "+",
					isActive: false
				},
				{
					idx: 3,
					content: "+",
					isActive: false
				}

			],

			getParticipantMarkup = function(playerId){
				
				return "<img src='/img/players/mugshots/" + playerId + ".jpg'>";
			
			};


		return {

			getActiveParticipantIdx: function(){

				return activeParticipantIdx;

			},

			setActiveParticipantIdx: function(idx){

				activeParticipantIdx = idx;

			},

			getParticipants: function(){

				return participants;
			},

			updateParticipant: function(idx, playerId){

				participants[idx].content = getParticipantMarkup(playerId);

			}
		};

	}]);
});