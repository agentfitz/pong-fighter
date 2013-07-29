define([

	"backbone"
	
], function(Backbone) {

	var PlayerModel = Backbone.Model.extend({

		defaults: {
			mugshot: "http://www.placehold.it/150"
		}

	});

	return PlayerModel;

});