define(["jquery"], function($) {

	var api = {},

		players;

	api.init = function() {

		return $.ajax({
			type: "GET",
			url: "/app/data/players.json",
			dataType: "json",
			success: function(data) {

				players = data;

			}
		});

	};

	api.getPlayers = function() {

		return players;

	};

	api.getPlayer = function(id) {

		return players[id];

	};

	return api;

});