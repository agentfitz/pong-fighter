define([

	"backbone",
	"views/IntroView"

], function(Backbone, IntroView) {

	var AppView = Backbone.View.extend({

		el: "#app",

		initialize: function() {

			this.introView = new IntroView();

			this.$el.append(this.introView.el);

			this.introView.runIntro();

			this.listenTo(Backbone, "intro:exit", this.loadArena);

		},

		loadArena: function() {

			console.log("loadArena() called from event listener for intro:exit");

		}

	});

	return AppView;

});