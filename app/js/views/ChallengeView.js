define([

	"jquery",
	"backbone",
	"models/ChallengeModel",
	"challengeTemplate"

], function($, Backbone, ChallengeModel, challengeTemplate) {

	var ChallengeView = Backbone.View.extend({

		el: "#challengeWrapper",

		model: new ChallengeModel(),

		events: {
			"dragenter .arena-player": "handleDragEnter",
			"dragover .arena-player": "handleDragOver",
			"dragleave .arena-player": "handleDragLeave",
			"drop .arena-player": "handleDrop"
		},

		initialize: function() {

			this.listenTo(this.model, "change", this.render);
			this.listenTo(Backbone, "icon:dragend", this.handleDragEnd);

			this.render();

			this.$el.show();

		},

		render: function() {

			this.$el.html(challengeTemplate(this.model.toJSON()));

			return this;

		},

		handleDragEnter: function(e) {

			var $target = $(e.target);

			$target.addClass("icon-entered");

		},

		handleDragOver: function(e) {

			e.preventDefault();
			e.stopPropagation();

			e.originalEvent.dataTransfer.dropEffect = "copy";

		},

		handleDragLeave: function(e) {

			var $target = $(e.target);

			$target.removeClass("icon-entered");

		},

		handleDragEnd: function() {

			this.$(".arena-player").removeClass("icon-entered");

		},

		handleDrop: function(e) {

			var $target = $(e.target),
				whichTeam = $target.closest("div").attr("id") === "team1" ? "team1" : "team2",
				otherTeam = whichTeam === "team1" ? "team2" : "team1",
				player = JSON.parse(e.originalEvent.dataTransfer.getData("text/plain"));

			if (player.name === this.model.get(otherTeam).name) {

				// This player is already on the other team, so remove him
				// from that team by resetting the "noPlayer" data.

				this.model.set(otherTeam, this.model.get("noPlayer"));

			}

			this.model.set(whichTeam, player);

			e.preventDefault();
			e.stopPropagation();

		}

	});

	return ChallengeView;

});