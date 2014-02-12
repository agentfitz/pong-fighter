/* global define */
/* global define */

define(['app'], function (app) {

	'use strict';

	app.factory('PlayerService', ['$http', function ($http) {

		/**
		 * Essentially the data (model) will be retrieved from server
		 * via ajax request using the $http service. In this example,
		 * we have hard-coded the model here for simplicity's sake.
		 */

		var players = [
				{
					id: 1,
					name: "Brian FitzGerald",
					dominantHand: "left",
					isAvailable: true,
				},
				{
					id: 2,
					name: "Evan Dull",
					dominantHand: "right",
					isAvailable: true,
				},
				{
					id: 3,
					name: "Kyle Hovis",
					dominantHand: "right",
					isAvailable: true,
				},
				{
					id: 4,
					name: "Paul Accattato",
					dominantHand: "right",
					isAvailable: true,
				},
				{
					id: 5,
					name: "Brian FitzGerald",
					dominantHand: "left",
					isAvailable: true,
				},
				{
					id: 6,
					name: "Evan Dull",
					dominantHand: "right",
					isAvailable: true,
				},
				{
					id: 7,
					name: "Kyle Hovis",
					dominantHand: "right",
					isAvailable: true,
				},
				{
					id: 8,
					name: "Paul Accattato",
					dominantHand: "right",
					isAvailable: true,
				},
				{
					id: 9,
					name: "Brian FitzGerald",
					dominantHand: "left",
					isAvailable: true,
				},
				{
					id: 10,
					name: "Evan Dull",
					dominantHand: "right",
					isAvailable: true,
				},
				{
					id: 11,
					name: "Kyle Hovis",
					dominantHand: "right",
					isAvailable: true,
				},
				{
					id: 12,
					name: "Paul Accattato",
					dominantHand: "right",
					isAvailable: true,
				}
			];

		return {
			
			getPlayers: function(){
				return players;
			},

			updatePlayer: function(id, data){

				var player = _.findWhere(players, { id: id });

				_.extend(player, data);

			}
		};

	}]);
});