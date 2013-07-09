define(["jquery", "data", "intro", "challenge", "icons"], function($, data, intro, challenge, icons) {

	// Get the data then init the app modules.
	$.when(data.init()).then(function() {

		intro.init();
		challenge.init();
		icons.init();

	});

});