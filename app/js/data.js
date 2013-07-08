define(["jquery"], function($) {

	var api = {},

		players;

	api.init = function() {

		$.ajax({
			type: "GET",
			url: "/app/data/players.json",
			dataType: "json",
			success: function(data) {

				players = data;
				console.log(players);

			}
		});

	};

	api.getPlayers = function() {

		return players;

	};

	return api;

});