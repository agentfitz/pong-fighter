define(["jquery", "appDom"], function($, appDom) {

	var api = {},

		dom = {
			challengeWrapper: $("#challengeWrapper"),
			team1: $("#team1"),
			team2: $("#team2")
		},

		addEventHandlers = function() {

			dom.challengeWrapper
				.on("dragenter", "#team1, #team2", handleDragEnter)
				.on("dragover", "#team1, #team2", handleDragOver)
				.on("dragleave", "#team1, #team2", handleDragLeave)
				.on("drop", "#team1, #team2", handleDrop);

		},

		handleDragEnter = function(e) {

			var $target = $(e.target);

			$target.addClass("icon-entered");

		},

		handleDragOver = function(e) {

			e.preventDefault();
			e.stopPropagation();

			e.originalEvent.dataTransfer.dropEffect = "copy";

		},

		handleDragLeave = function(e) {

			var $target = $(e.target);

			$target.removeClass("icon-entered");

		},

		handleDrop = function(e) {

			e.preventDefault();
			e.stopPropagation();

			this.innerHTML = e.originalEvent.dataTransfer.getData("text/plain");

		};

	api.handleDragEnd = function(e) {

		dom.team1
			.add(dom.team2)
			.removeClass("icon-entered");

	};

	api.show = function() {

		dom.challengeWrapper.show();

	};

	api.init = function() {

		addEventHandlers();

	};

	return api;

});