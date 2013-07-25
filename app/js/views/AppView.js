define([

	"jquery",
	"backbone",
	"views/IntroView",
	"views/ChallengeView",
	"views/IconsView"

], function($, Backbone, IntroView, ChallengeView, IconsView) {

	var AppView = Backbone.View.extend({

		el: "#app",

		initialize: function() {

			new IntroView();

			this.listenTo(Backbone, "intro:exit", this.loadArena);

		},

		loadArena: function() {

			new ChallengeView();

			new IconsView();

		}

	});

	return AppView;

});