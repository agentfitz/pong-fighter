define([

	"jquery",
	"backbone"

], function($, Backbone) {

	var ChallengeView = Backbone.View.extend({

		el: "#challengeWrapper",

		events: {
			"dragenter #team1, #team2": "handleDragEnter",
			"dragover #team1, #team2": "handleDragOver",
			"dragleave #team1, #team2": "handleDragLeave",
			"drop #team1, #team2": "handleDrop"
		},

		initialize: function() {

			this.$team1 = this.$("#team1");
			this.$team2 = this.$("#team2");

			this.listenTo(Backbone, "icon:dragend", this.handleDragEnd);

			this.$el.show();

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

			this.$team1
				.add(this.$team2)
				.removeClass("icon-entered");

		},

		handleDrop: function(e) {

			var $target = $(e.target);

			e.preventDefault();
			e.stopPropagation();

			$target.html(e.originalEvent.dataTransfer.getData("text/plain"));

		}

	});

	return ChallengeView;

});