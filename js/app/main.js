/* global require, angular */

require(['config'], function(config) {
	
	'use strict';

	require.config({
		baseUrl: config.appDir,
		paths: {
			app: config.libDir + '/ng-app',
			router: config.libDir + '/angular-ui-router.min',
			modal: config.appDir + '/directives/modal-dialog'
		}
	});
	
	require(
		[
			'app',
			'router',
			'modal',
			'controllers/ChallengeCtrl',
			'services/PlayerService'
		],
		function (app) {

			console.log("bootstrap this mfer.");
			angular.bootstrap(document, [app.name]);

		}
	);

});