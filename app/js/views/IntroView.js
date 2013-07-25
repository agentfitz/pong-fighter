define([

	"jquery",
	"backbone",
	"introTemplate",
	"models/IntroModel",
	"jqueryTransit"

], function($, Backbone, introTemplate, IntroModel) {

	var IntroView = Backbone.View.extend({

		el: "#introWrapper",

		model: new IntroModel(),

		events: {
			"click a": "exitIntro"
		},

		initialize: function() {

			this.listenTo(this.model, "change", this.render);

			this.model.fetch();

		},

		render: function() {

			this.$el.html(introTemplate(this.model.toJSON()));

			this.runIntro();

			return this;

		},

		runIntro: function() {

			var $el = this.$el;

			$el.transition({width: 318, height: 158}, 1000, function() {

				$el.transition({height: "+=20"}, 400, function() {

					$el.$("p").transition({opacity: 1}, 400);

				});

			});

		},

		exitIntro: function(e) {

			e.preventDefault();

			this.$el.transition({width: 0, height: 0}, 400, function() {

				this.remove();

				Backbone.trigger("intro:exit");

			});

		}

	});

	return IntroView;

});