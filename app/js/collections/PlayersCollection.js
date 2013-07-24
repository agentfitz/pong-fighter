define([
	"backbone",
	"models/PlayerModel"
], function(Backbone, PlayerModel) {

	var PlayersCollection = Backbone.Collection.extend({

		model: PlayerModel

	});

	return PlayersCollection;

});