define(["jquery", "appDom"], function() {

	var api = {},

		dom = {
			iconWrapper: $("#iconWrapper")
		};

	api.show = function() {

		dom.iconWrapper.show();

	};

	api.init = function() {

		// TODO: pass data into handlebars template and generate markup

	};

	return api;

});