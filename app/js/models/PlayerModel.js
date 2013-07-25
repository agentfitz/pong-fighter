define([

	"backbone"
	
], function(Backbone) {

	var PlayerModel = Backbone.Model.extend({

		defaults: {
			profile: "http://nicenicejpg.com/600/600",
			mugshot: "http://www.placehold.it/150x150"
		}

	});

	return PlayerModel;

});