define([
	"jquery",
	"data",
	"intro",
	"challenge",
	"icons",
	"views/AppView"
], function($, data, intro, challenge, icons, AppView) {

	// Get the data then init the app modules.
	/*$.when(data.init()).then(function() {

		intro.init();
		challenge.init();
		icons.init();

	});*/

	new AppView();

});