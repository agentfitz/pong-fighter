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

		return {
			
			getPlayers: function(){
				return [
					{
						id: 1,
						name: "Brian FitzGerald",
						dominantHand: "left"
					},
					{
						id: 2,
						name: "Evan Dull",
						dominantHand: "right"
					},
					{
						id: 3,
						name: "Kyle Hovis",
						dominantHand: "right"
					},
					{
						id: 4,
						name: "Paul Accattato",
						dominantHand: "right"
					},
					{
						id: 5,
						name: "Brian FitzGerald",
						dominantHand: "left"
					},
					{
						id: 6,
						name: "Evan Dull",
						dominantHand: "right"
					},
					{
						id: 7,
						name: "Kyle Hovis",
						dominantHand: "right"
					},
					{
						id: 8,
						name: "Paul Accattato",
						dominantHand: "right"
					},
					{
						id: 9,
						name: "Brian FitzGerald",
						dominantHand: "left"
					},
					{
						id: 10,
						name: "Evan Dull",
						dominantHand: "right"
					},
					{
						id: 11,
						name: "Kyle Hovis",
						dominantHand: "right"
					},
					{
						id: 12,
						name: "Paul Accattato",
						dominantHand: "right"
					}
				]
			}
		};

	}]);
});