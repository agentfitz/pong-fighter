define(["jquery", "appDom", "challenge", "icons"], function($, appDom, challenge, icons) {

	var api = {},

		dom = {
			introWrapper: $("#introWrapper"),
			introImg: $("#introWrapper img")
		},

		addEventHandlers = function() {

			appDom.document.on("click", function() {

				goToArena();

			});

		},

		goToArena = function() {

			$.when(hide()).then(function() {

				challenge.show();
				icons.show();

			});

		},

		hide = function() {

			return dom.introImg.animate({width: 0, height: 0}, function() {

				dom.introWrapper.hide();

			});

		},

		show = function() {

			dom.introImg.animate({width: 318, height: 158}, 800);

		};

	api.init = function() {

		addEventHandlers();
		show();

	};

	return api;

});