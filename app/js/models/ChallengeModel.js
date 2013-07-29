define([

	"backbone"

], function(Backbone) {

	var ChallengeModel = Backbone.Model.extend({

		defaults: {
			team1: {
				profile: "http://www.placehold.it/600&text=player1"
			},

			team2: {
				profile: "http://www.placehold.it/600&text=player2"
			},

			noPlayer: {
				profile: "http://www.placehold.it/600&text=player"
			}
		}

	});

	return ChallengeModel;

});