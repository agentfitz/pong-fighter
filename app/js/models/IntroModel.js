define([

	"backbone"

], function(Backbone) {

	var IntroModel = Backbone.Model.extend({

		url: "/app/data/intro.json"

	});

	return IntroModel;

});