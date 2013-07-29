define([

	"jquery",
	"backbone",
	"collections/PlayersCollection",
	"iconTemplate",
	"handlebars",
	"MD5"

], function($, Backbone, PlayersCollection, iconTemplate, Handlebars, MD5) {

	var IconsView = Backbone.View.extend({

		el: "#iconsWrapper ul",

		collection: new PlayersCollection(),

		events: {
			"dragstart img": "handleDragStart",
			"dragend img": "handleDragEnd"
		},

		handleDragStart: function(e) {

			var $target = $(e.target),
				playerId = $target.attr("data-id");

			e.originalEvent.dataTransfer.effectAllowed = "all";

			e.originalEvent.dataTransfer.setData("text/plain", JSON.stringify(this.collection.get(playerId)));

		},

		handleDragEnd: function(e) {

			Backbone.trigger("icon:dragend");

		},

		initialize: function() {

			this.addTemplateHelpers();

			this.listenTo(this.collection, "reset", this.render);

			this.collection.fetch({reset: true});

		},

		render: function() {

			this.collection.each(function(playerModel) {

				this.$el.append(iconTemplate(playerModel.toJSON()));

			}, this);

			this.$el.closest("div").show();

		},

		addTemplateHelpers: function() {

			Handlebars.registerHelper("getIconSrc", function(email) {

				return "http://www.gravatar.com/avatar/" + MD5(email);

			});

		}

	});

	return IconsView;

});