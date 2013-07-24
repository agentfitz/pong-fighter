require.config({
	baseUrl: "js",

	paths: {
		jquery: "vendor/jquery-2.0.3.min",
		handlebars: "vendor/handlebars.runtime",
		jqueryTransit: "vendor/jquery.transit.min",
		MD5: "vendor/MD5",
		backbone: "vendor/backbone-min",
		underscore: "vendor/underscore-min",
		introTemplate: "templates/compiled/introTemplate",
		iconsTemplate: "templates/compiled/iconsTemplate"
	},

	shim: {
		handlebars: {
			exports: "Handlebars"
		},

		MD5: {
			exports: "MD5"
		},

		jqueryTransit: {
			deps: ["jquery"]
		},

		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},

		underscore: {
			expoerts: "_"
		}
	}
});

// Load the main app module to start the app
require([

	"views/AppView",
	"jqueryTransit"

], function(AppView) {

	new AppView();

});