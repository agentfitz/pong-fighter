define(["jquery", "appDom"], function($, appDom) {

	var api = {},

		dom = {
			challengeWrapper: $("#challengeWrapper")
		};

	api.show = function() {

		dom.challengeWrapper.show();

	};

	api.init = function() {

	};

	return api;

});