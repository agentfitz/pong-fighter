define([

	"backbone"

], function(Backbone) {

	var ChallengeMOdel = Backbone.Model.extend({

		defaults: {
			team1: [],
			team2: []
		}

	});

	return ChallengeMOdel;

});