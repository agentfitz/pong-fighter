define(["jquery", "handlebars", "MD5", "appDom", "iconsTemplate", "data", "challenge"], function($, Handlebars, MD5, appDom, iconsTemplate, data, challenge) {

	var api = {},

		dom = {
			iconWrapper: $("#iconWrapper")
		},

		registerTemplateHelpers = function() {

			Handlebars.registerHelper("getIconSrc", function(email) {

				return "http://www.gravatar.com/avatar/" + MD5(email);

			});

		},

		addEventHandlers = function() {

			dom.iconWrapper
				.on("dragstart", ".icon", handleDragStart)
				.on("dragend", ".icon", handleDragEnd);

		},

		handleDragStart = function(e) {

			e.originalEvent.dataTransfer.effectAllowed = "all";

			e.originalEvent.dataTransfer.setData("text/plain", JSON.stringify(data.getPlayer(0)));

		},

		handleDragEnd = function(e) {

			challenge.handleDragEnd();

		};

	api.show = function() {

		dom.iconWrapper.show();

	};

	api.init = function() {

		var templateMarkup;

		registerTemplateHelpers();

		templateMarkup = iconsTemplate(data.getPlayers());

		dom.iconWrapper.html(templateMarkup);

		addEventHandlers();

	};

	return api;

});