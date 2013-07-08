require.config({
	"baseUrl": "js",

	"paths": {
		"jquery": "vendor/jquery-2.0.3.min",
		"handlebars": "vendor/handlebars.runtime"
	},

	"shim": {
		handlebars: {
			exports: "Handlebars"
		}
	}
});

// Load the main app module to start the app
require(["main"]);