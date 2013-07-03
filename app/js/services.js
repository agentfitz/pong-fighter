/* global angular: false */

"use strict";

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module("pongFighter.services", ["ngResource"])

	.value("version", "0.1")

	.factory("Player", function($resource) {

		return $resource("players/:playerId.json", {}, {

			query: {method: "GET", params: {playerId: "players"}, isArray: true}

		});

	})

	.factory("utilityService", function() {

		return {

			getGravatarURL: function(email) {

				return "http://www.gravatar.com/avatar/" + MD5(email);

			}

		};

	});
