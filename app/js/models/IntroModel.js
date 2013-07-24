define([

	"backbone"

], function(Backbone) {

	var IntroModel = Backbone.Model.extend({

		defaults: {
			imgPath: "/app/img/intro.jpg",
			msg: "enter the arena"
		}

	});

	return IntroModel;

});