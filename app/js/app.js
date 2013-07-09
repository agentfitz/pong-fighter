require.config({
	"baseUrl": "js",

	"paths": {
		"jquery": "vendor/jquery-2.0.3.min",
		"handlebars": "vendor/handlebars.runtime",
		"jqueryTransit": "vendor/jquery.transit.min",
		"MD5": "vendor/MD5",
		"iconsTemplate": "templates/compiled/iconsTemplate"
	},

	"shim": {
		"handlebars": {
			exports: "Handlebars"
		},
		"MD5": {
			exports: "MD5"
		},
		"jqueryTransit": ["jquery"]
	}
});

// Load the main app module to start the app
require(["jquery", "jqueryTransit", "main"]);