/* global require, angular */

require(['config'], function(config) {
	
	'use strict';

	require.config({
		baseUrl: config.appDir,
		paths: {
			app: config.libDir + '/ng-app',
			router: config.libDir + '/angular-ui-router.min'
		}
	});
	
	require(
		[
			'app',
			'router',
			'controllers/ChallengeCtrl',
			'services/PlayerService'
		],
		function (app) {

			console.log("bootstrap this mfer.");
			angular.bootstrap(document, [app.name]);

		}
	);

});