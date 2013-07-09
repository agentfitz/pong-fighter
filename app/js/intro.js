define(["jquery", "appDom", "challenge", "icons"], function($, appDom, challenge, icons) {

	var api = {},

		dom = {
			introWrapper: $("#introWrapper")
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

			return dom.introWrapper.transition({width: 0, height: 0}, 400);

		},

		show = function() {
			
			dom.introWrapper.transition({width: 318, height: 158}, 1000, function() {

				dom.introWrapper.transition({height: "+=20"}, 400, function() {

					dom.introWrapper.find("p").transition({opacity: 1}, 400);

				});

			});

		};

	api.init = function() {

		addEventHandlers();
		show();

	};

	return api;

});